import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../data/asynMock';
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const { ItemId } = useParams()
  useEffect(() =>{
    setIsLoading(true)
      getProductById(ItemId)
        .then((prod) => {
          setProduct(prod)
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))

  }, [ItemId])

  return (
    <div>
      {isLoading ? 
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-light" style={{ width: '7rem', height: '7rem', marginTop: '7rem' }} role="status">
            <span className="sr-only"></span>
          </div>
        </div>
       : 
       <ItemDetail {...product} />
      }

    </div>
  );
};

export default ItemDetailContainer;
