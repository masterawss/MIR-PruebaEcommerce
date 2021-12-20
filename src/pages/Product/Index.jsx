import { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';

const sectionStyles = {
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  flexWrap: 'wrap',
};

const ProductIndex = function () {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProductos(json))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div style={sectionStyles}>
      {
        !loading
          ? (
            productos.map(
              (producto) => <ProductCard key={producto.id} producto={producto} />,
            )
          )
          : (
            <Loader />
          )
      }
    </div>
  );
};

export default ProductIndex;
