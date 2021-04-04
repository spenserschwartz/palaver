import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, pushNum } from '../../redux/actions';

const ReduxField = () => {
  const dispatch = useDispatch();
  const excelObject = useSelector((state) => state.excelObject);

  return (
    <div>
      <h1>Redux Field</h1>
      <button onClick={() => dispatch(decrement())}>Decrementy</button>

      <button onClick={() => dispatch(pushNum())}>PushyNum</button>

      <button onClick={() => console.log(excelObject)}>
        excelObject console
      </button>
    </div>
  );
};

export default ReduxField;
