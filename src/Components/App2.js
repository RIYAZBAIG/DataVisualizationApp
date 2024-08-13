import React, { useState } from 'react';
import { parseDataset } from '@rawgraphs/rawgraphs-core';

const App2 = () => {
  const [parsedData, setParsedData] = useState({});

  const handleDataParsing = (data) => {
    const { dataset, dataTypes, errors } = parseDataset(data);
    setParsedData({ dataset, dataTypes, errors });
  };

  return (
    <div>
      <button onClick={() => handleDataParsing([{a: 1, b: "2001-01-01"}, {a: 2000, b: "2001-02-02"}, {a: 1, b: "no data"}])}>
        Parse Data
      </button>
      <pre>{JSON.stringify(parsedData, null, 2)}</pre>
    </div>
  );
};

export default App2;
