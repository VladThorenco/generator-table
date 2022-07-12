import React, {ReactNode} from 'react';
import {FormControl, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material';
import {styles} from './styles';
import {Item} from './selectData';
import Arrow from 'shared/components/icons/arrow';
import {FormikErrors} from 'formik';

interface Props {
  items: Item[];
  value: string;
  onHandleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  error: FormikErrors<boolean>;
  name: string;
}

const FormSelect = (props: Props): JSX.Element => {
  const {items, value, onHandleChange, name, error} = props;

  return (
      <FormControl sx={styles.select}>
        <Select
            name={name}
            value={value}
            onChange={onHandleChange}
            MenuProps={styles.selectPaper}
            error={error}
            displayEmpty
            IconComponent={Arrow}
            sx={styles.icon}
            renderValue={(selected: string) => {
              if (selected?.length === 0) {
                return <Typography variant="caption">City</Typography>;
              }
              return selected ?? value;
            }}>
          {
            items.map((item: Item) => {
              return <MenuItem key={item.id} value={item.label}>
                {item.label}
              </MenuItem>;
            })
          }
        </Select>
      </FormControl>
  );
};

export default FormSelect;
