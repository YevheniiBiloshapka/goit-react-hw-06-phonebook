import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { onChangeFilter } from '../../redux/contacts/filter.slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeInput = e => {
    const value = e.currentTarget.value;
    dispatch(onChangeFilter(value.toLowerCase()));
  };

  return (
    <Label htmlFor="">
      <p>Find contacts by name</p>
      <Input
        type="text"
        id="filter"
        placeholder="Enter name"
        onChange={onChangeInput}
      ></Input>
    </Label>
  );
};
