import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={handleFilter} />
    </FilterContainer>
  );
};

export default Filter;
