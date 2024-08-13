import React, { useState, useEffect } from 'react';


const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.csv')
      .then(response => response.text())
      .then(text => {
        const rows = text.split('\n');
        const headers = rows[0].split(',');
        const dataArray = [];
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].split(',');
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          dataArray.push(obj);
        }
        setData(dataArray);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.header1}: {item.data1}</p>
          <p>{item.header2}: {item.data2}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
