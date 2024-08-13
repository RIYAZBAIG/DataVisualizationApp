import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

const headers = ['header1', 'header2', 'header3'];

export const CsvData=()=> {
  const [selectedHeader, setSelectedHeader] = useState('');

  const handleChange = (event) => {
    setSelectedHeader(event.target.value);
  };

  return (
    <Select value={selectedHeader} onChange={handleChange}>
      {headers.map((header) => (
        <MenuItem key={header} value={header}>
          {header}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CsvData;
