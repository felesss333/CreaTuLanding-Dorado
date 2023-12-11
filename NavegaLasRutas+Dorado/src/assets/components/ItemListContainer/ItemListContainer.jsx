import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../../data/asynMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((prod) => setData(prod))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      getProducts()
        .then((prod) => {
          setData(prod);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [categoryId]);

  return (
    <div>
      {isLoading ? 
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-light" style={{ width: '7rem', height: '7rem', marginTop: '7rem' }} role="status">
            <span className="sr-only"></span>
          </div>
        </div>
       : 
        <ItemList data={data} />
      }
    </div>
  );
};

export default ItemListContainer;
