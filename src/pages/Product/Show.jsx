import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';

const ProductShow = function () {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {
        !loading && product
          ? <ProductCard producto={product} isShow />
          : <Loader />
      }
    </div>
  );
};

export default ProductShow;
