import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Filter } from 'components/Filter';
import { Linear } from 'components/Linear';
import { TableObjects } from 'components/TableObjects';
import { getOfficeList, getObjectList } from './Api';
import './App.scss';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offices, setOffises] = useState([]);
  const [tabliList, setTableList] = useState([]);

  useEffect(() => {
    getOffises();
  }, [])

  const getOffises = () => {
    getOfficeList().then((res) => {
      if (res?.data && res?.statusText === 'OK') {
        if (res?.data?.office) { setOffises(res.data.office) }
      } else {
        console.log('here');
        setError({ message: 'Что то пошло не так :(' })
      }
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    })
  }

  const loaderOrError = () => {
    if (loading) { return <Linear /> }
    if (error) {
      return <p className='text' style={{
        textAlign: 'center',
        color: '#ff2121'
      }}>{error.message}</p>
    }
  }

  const getObject = () => {
    getObjectList().then((res) => {
      if (res?.data && res?.statusText === 'OK') {
        // setTableList(testData);
        setTableList(res.data.data);
        console.log(res.data);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      {
        loaderOrError()
      }
      {
        (!loading && !error) &&
        <>
          <Header />
          <Filter
            offices={offices}
            getObject={getObject}
          />
          {
            tabliList.length > 0 &&
            <TableObjects 
            tabliList={tabliList}
            />
          }
        </>
      }
    </>
  );
};

