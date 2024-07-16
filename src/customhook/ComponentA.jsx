import React from 'react'
import useFetchData from './useFetchData'

function ComponentA() {
  
    const data = useFetchData('https://api.example.com/data');

    return <div>{data ? data : 'Loading...'}</div>;
  
}

export default ComponentA