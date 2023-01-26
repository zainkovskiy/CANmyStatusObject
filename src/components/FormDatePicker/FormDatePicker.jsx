import React from 'react';
import { Controller } from 'react-hook-form';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export const FormDatePicker = (props) => {
  return (
    <Controller
      {...props}
      defaultValue={moment().format('YYYY-MM-DD')}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment().locale('ru')}>
          <DatePicker
            label={props.label}
            value={moment(field.value)}
            onChange={(e) => field.onChange(moment(e).format('YYYY-MM-DD'))}
            renderInput={(params) => <TextField size="small" fullWidth {...params} />}
          />
        </LocalizationProvider>
      )}
    />
  );
};
