import React, { useState, useEffect } from 'react';
import RawGraphs from 'rawgraphs-core';

 export const LineChart = () => {
  const [data, setData] = useState([]);
  const [lineChartOption, setLineChartOption] = useState({});

  useEffect(() => {
    debugger
    console.log("hello")
    async function loadCSVData() {
          const csvData = await RawGraphs.parsers.csv.parse('loan_data_income/to/csv');
          setData(csvData);
          setLineChartOption({
              chart: {
                  type: 'line'
              },
              series: [{
                  name: 'Sales',
                  data: csvData.map(d => d.sales)
              }],
              xaxis: {
                  categories: csvData.map(d => d.month)
              }
          });
      }

    loadCSVData();
  }, []);

  return (
    <div>
      <h1>Line Chart</h1>
      <RawGraphs options={lineChartOption} />
    </div>
  );
};

export default LineChart;
