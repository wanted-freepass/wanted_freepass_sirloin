import React from 'react';
import * as S from './Input.style';

const Input = ({ name, value, onChange, type }) => {
  return (
    <S.Label name={name} onChange={onChange}>
      <S.Input name={name} value={value} type={type} />
      <S.Text>{value}</S.Text>
    </S.Label>
  );
};

export default Input;
