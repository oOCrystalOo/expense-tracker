import React from 'react';

import './ExpenseFilter.css';

export default function ExpenseFilter ( props ) {
  const changeHandler = e => {
    const value = e.currentTarget.value;
    if ( typeof props.onChangeCallback === 'function' ) {
      props.onChangeCallback( value );
    }
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler}>
          <option value=''>Clear Filter</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};