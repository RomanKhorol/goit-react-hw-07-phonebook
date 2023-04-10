import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import { FitrTitle, FitrWrap, FitrInput } from './Filtr.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <FitrWrap>
      <FitrTitle>Find contact by name</FitrTitle>

      <FitrInput type="text" onChange={changeFilter} />
    </FitrWrap>
  );
};
