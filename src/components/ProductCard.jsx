import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductCard.scss';

const getRandomMinutes = () => Math.floor(Math.random() * (500 - 0) + 0);

const ProductCard = function ({ producto, isShow = false }) {
  const [seconds, setSeconds] = useState(getRandomMinutes());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      if (seconds === 0) setIsActive(false);
    } else if (!isActive && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="product">
      <span className="product__price">
        S/
        {producto.price}
      </span>
      <img alt="2" className="product__image" src={producto.image} />
      <h1 className="product__title">{producto.title}</h1>
      <hr />
      <p>
        {producto.description}
      </p>
      {
        !isShow
          ? (
            <div className="product__footer" style={{ textAlign: 'center' }}>
              <Timer sec={seconds} />
              {
                isActive
                  ? (
                    <div className="product__btn btn">
                      <Link to={`/${producto.id}`}> Ver producto </Link>
                    </div>
                  )
                  : <strong>Ya no está disponible</strong>
              }
            </div>
          )
          : (
            <br />
          )
      }

    </div>
  );
};

const Timer = function ({ sec }) {
  const date = new Date(0);
  date.setSeconds(sec);
  const timeString = date.toISOString().substr(11, 8);
  return (
    <div style={{ padding: '10px' }}>
      <strong style={{ fontSize: '1.4em' }}>
        {timeString}
      </strong>
    </div>
  );
};
export default ProductCard;
