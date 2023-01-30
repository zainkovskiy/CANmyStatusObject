import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const FormSelect = (props) => {
  const { variants, defaulValue, disabled } = props;
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          options={variants || []}
          getOptionLabel={(option) => option.bDepartment}
          onChange={(e, newValue) => field.onChange(newValue)}
          defaultValue={defaulValue}
          disabled={disabled}
          size='small'
          fullWidth
          noOptionsText={<span className='text text_12'>Нет офисов</span>}
          renderInput={(params) => <TextField {...params} label="Офис" />}
        />
      )}
    />
  );
};
