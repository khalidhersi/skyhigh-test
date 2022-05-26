import React from 'react'
import "./BarChartComponent.css"
import BarChart from 'react-easy-bar-chart';

const BarChartComponent = (props) => {
    const {sales, year} = props

    const data = [
      {
        sales: sales,
        year: year,
      },
    ]
  return (
    <div>
        <BarChart 
          xAxis='Year'
          yAxis="Sales"
          height={400}
          width={800}
          data={data}
        />
    </div>
  )
}

export default BarChartComponent