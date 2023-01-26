import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const TableTextTitle = styled.span`
  font-size: 12px;
`
const TableTextHeader = styled(TableTextTitle)`
  font-weight: 600;
  font-size: 12px;
`

const TableText = styled.p`
  margin: 0;
  font-size: 11px;
`

export const TableObjects = ({ tabliList }) => {
  const getArrow = (number) => {
    if (number > 0) {
      return <NorthIcon fontSize='12' color='success'/>
    }
    if (number < 0) {
      return <SouthIcon fontSize='12' color='error'/>
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><TableTextHeader className='text'>Риелтор</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>Тип недвижимости</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>Всего объектов</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>Черновики</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>Листинг</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>В рекламе</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>СК</TableTextHeader></TableCell>
            <TableCell align="center"><TableTextHeader className='text'>РД</TableTextHeader></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tabliList.map((row, idx) => (
              <React.Fragment key={idx}>
                <TableRow>
                  <TableCell
                    rowSpan={row?.typeRealty.length + 1}
                  >
                    <TableTextTitle>
                      {row.realtor}
                    </TableTextTitle>
                  </TableCell>
                </TableRow>
                {
                  row?.typeRealty.map((realty, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="right">
                        <TableTextTitle>
                          {realty.name}
                        </TableTextTitle>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.totalStart}</TableText>
                        <TableText className='text'>На конец: {realty.totalEnd}</TableText>
                        <TableText className='text'>Разница: {realty.totalStart - realty.totalEnd} {getArrow(realty.totalStart - realty.totalEnd)}</TableText>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.blankStart}</TableText>
                        <TableText className='text'>На конец: {realty.blankEnd}</TableText>
                        <TableText className='text'>Разница: {realty.blankStart - realty.blankEnd} {getArrow(realty.blankStart - realty.blankEnd)}</TableText>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.listingStart}</TableText>
                        <TableText className='text'>На конец: {realty.listindEnd}</TableText>
                        <TableText className='text'>Разница: {realty.listingStart - realty.listindEnd} {getArrow(realty.listingStart - realty.listindEnd)}</TableText>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.onAdvStart}</TableText>
                        <TableText className='text'>На конец: {realty.onAdvEnd}</TableText>
                        <TableText className='text'>Разница: {realty.onAdvStart - realty.onAdvEnd} {getArrow(realty.onAdvStart - realty.onAdvEnd)}</TableText>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.exStart}</TableText>
                        <TableText className='text'>На конец: {realty.exEnd}</TableText>
                        <TableText className='text'>Разница: {realty.exStart - realty.exEnd} {getArrow(realty.exStart - realty.exEnd)}</TableText>
                      </TableCell>
                      <TableCell align="center">
                        <TableText className='text'>На начало: {realty.adStart}</TableText>
                        <TableText className='text'>На конец: {realty.adEnd}</TableText>
                        <TableText className='text'>Разница: {realty.adStart - realty.adEnd} {getArrow(realty.adStart - realty.adEnd)}</TableText>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </React.Fragment>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
