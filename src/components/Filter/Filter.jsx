import React from 'react';
import { FormDatePicker } from 'components/FormDatePicker';
import { FormSelect } from 'components/FormSelect';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterTop = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 0 0.5rem 0;
`

export const Filter = ({ data, getObject }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      office: data.rights === 'manager' ? data.office[0] : null,
      dateStart: data.dateStart || null,
      dateEnd: data.dateEnd || null,
    }
  })
  const onSubmit = (form) => {
    getObject(form);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilterTop>
        <FormDatePicker
          name='dateStart'
          label='От'
          control={control}
          defaulValue={data.dateStart}
        />
        <FormDatePicker
          name='dateEnd'
          label='До'
          control={control}
          defaulValue={data.dateEnd}
        />
        <FormSelect
          name='office'
          control={control}
          variants={data.office}
          defaulValue={data.rights === 'manager' ? data.office[0] : null}
          disabled={data.rights === 'manager'}
        />
        <Button
          variant="contained"
          fullWidth
          size='small'
          type='submit'
        >
          Сформировать
        </Button>
      </FilterTop>
      <Controller
        name='watchOffice'
        control={control}
        render={({ field }) => (
          <FormControlLabel {...field} control={<Checkbox />} label="Свернуть до офиса" />
        )}
      />
    </form>
  );
};