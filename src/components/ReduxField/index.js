import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, pushNum } from '../../redux/actions';

const ReduxField = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Field</h1>
      <button onClick={() => dispatch(decrement())}>Decrementy</button>

      <button onClick={() => dispatch(pushNum())}>PushyNum</button>
    </div>
  );
};

export default ReduxField;
