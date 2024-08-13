import React, { useState } from 'react';
import Papa from 'papaparse';

const MyComponent1 = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const csvData = await Papa.parse(file, { header: true });
    setCsvData(csvData.data);
    setHeaders(Object.keys(csvData.data[0]));
  };

  const chartData = csvData.map((data) => {
    // calculate chart variables and dimensions here
    return { ...data };
  });

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <MyChart data={chartData} />
    </div>
  );
};

const MyChart = ({ data }) => {
  // use charting library to render chart with `data`
  return <div>Chart will be here</div>;
};

export default MyComponent1;
