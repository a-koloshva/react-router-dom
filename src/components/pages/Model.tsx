import React from 'react';
import { AdidasItem, adidasArr } from './Adidas';
import { useParams } from 'react-router-dom';
import { S } from './_styles';
import { Error404 } from './Error404';

export const Model = () => {
  const params = useParams();
  console.log(params);

  let res = adidasArr.find((el: AdidasItem) => el.id === Number(params.id));

  return (
    <div>
      {res ? (
        <>
          <div>{res.id}</div>
          <div>{res.model}</div>
          <div>{res.collection}</div>
          <S.ShoeImg src={res.picture} alt="pictur" />
          <div>{res.price}</div>
        </>
      ) : (
        <Error404 />
      )}
    </div>
  );
};
