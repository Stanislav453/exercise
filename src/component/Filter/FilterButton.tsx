import { select } from '../../stringVariables';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export const FilterButton = () => {
  return (
    <Button variant='contained' endIcon={<SearchIcon />}>
      {select}
    </Button>
  );
};
