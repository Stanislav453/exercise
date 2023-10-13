import { select } from '../../stringVariables';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { searchByValue } from '../../Redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

export const FilterButton = ({ inputData }: any) => {

  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => dispatch(searchByValue({...inputData}))}
      variant='contained'
      endIcon={<SearchIcon />}
    >
      {select}
    </Button>
  );
};
