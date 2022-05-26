import React from 'react'
import { useEffect, useState } from 'react';
import "./Home.css"
import BarChartComponent from '../../components/BarChartComponent/BarChartComponent';

const Home = () => {
    const [data, setData] = useState({});

    const url = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub";
    const requestBody = { angular_test: 'angular-developer' };
  
    // Fetch
    const getData = () => {
    fetch(url, { method: "POST", body: JSON.stringify(requestBody) })
    .then(response => response.json())
    .then(json => {setData(json)
    console.log(data[0])})
    .catch(error => console.log(error));
  }
    useEffect(() => {
      getData();
    }, [data])
    

    // JSX function for rendering each item in array of objects
    const BarChartJSX = data.map((eachObj) => (
        <BarChartComponent sales={eachObj.Sales} year={eachObj[ 'Order Date' ]} />
      ));
    

  return (
    <div>
        {BarChartJSX}
    </div>
  )
}


export default Home