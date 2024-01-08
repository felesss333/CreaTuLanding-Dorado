import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../../data/asynMock';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent/LoaderComponent';

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
      <LoaderComponent loading={isLoading} />
      {!isLoading &&  <ItemList data={data} />
      }
    </div>
  );
};

export default ItemListContainer;
