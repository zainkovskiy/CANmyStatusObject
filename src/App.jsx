import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Filter } from 'components/Filter';
import { Linear } from 'components/Linear';
import { TableObjects } from 'components/TableObjects';
import { getOfficeList, getObjectList } from './Api';
import './App.scss';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [tabliList, setTableList] = useState([]);

  useEffect(() => {
    getOffises();
  }, [])

  const getOffises = () => {
    getOfficeList().then((res) => {
      if (res?.data && res?.statusText === 'OK') {
        console.log(res);
        setData(res.data)
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

  const getObject = (raw) => {
    setLoadingTable(true);
    getObjectList(raw).then((res) => {
      if (res?.data && res?.statusText === 'OK') {
        setTableList(res.data.data);
        console.log(res);
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoadingTable(false);
    })
  }

  return (
    <>
      <Header />
      {
        loaderOrError()
      }
      {
        (!loading && !error) &&
        <>
          <Filter
            getObject={getObject}
            data={data}
          />
          {
            loadingTable ?
              <Linear /> :
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

