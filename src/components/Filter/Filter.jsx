import React from 'react';
import { FormDatePicker } from 'components/FormDatePicker';
import { FormSelect } from 'components/FormSelect';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';

const FIlter = styled.form`
  display: flex;
  gap: 1rem;
`

export const Filter = ({ offices, getObject }) => {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data);
    getObject();
  }
  return (
    <FIlter onSubmit={handleSubmit(onSubmit)}>
      <FormDatePicker
        name='test'
        label='От'
        control={control}
      />
      <FormDatePicker
        name='test2'
        label='До'
        control={control}
      />
      <FormSelect
        name='test3'
        control={control}
        variants={offices}
      />
      <Button
        variant="contained"
        fullWidth
        size='small'
        type='submit'
      >
        Сформировать
      </Button>
    </FIlter>
  );
};