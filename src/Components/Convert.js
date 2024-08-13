import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

export const Convert = () => {
  const [globalData, setGlobalData] = useState(null);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [xAxisOptions, setXAxisOptions] = useState([]);
  const [yAxisOptions, setYAxisOptions] = useState([]);

  useEffect(() => {
    if (globalData) {
      setXAxisOptions(globalData.columns);
      setYAxisOptions(globalData.columns);
    }
  }, [globalData]);

  const csvFileConverter = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = (event) => {
      setFileContent(event.target.result);
      const data = d3.csvParse(fileContent);
      setGlobalData(data);
    };
  };

  const handleFileInput = (e) => {
    csvFileConverter(e.target.files[0]);
  };

  const handleXAxisChange = (e) => {
    setXAxis(e.target.value);
  };

  const handleYAxisChange = (e) => {
    setYAxis(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    drawGraph(globalData, xAxis, yAxis);
  };

  const drawGraph = (receiVedData, xAxisInput, yAxisInput) => {
    d3.select('text').remove();
    d3.select('g').remove();
    const svg = d3.select('#chart')
    const margin = 200;
    const width = svg.attr('width') - margin;
    const height = svg.attr('height') - margin;
    svg.append('text')
      .attr('transform', 'translate(1000,0)')
      .attr('x', 50)
      .attr('y', 50)
      .attr('font-size', '...');
  } 

  return (
    <div className="App">
      <input type="file" accept=".csv" onChange={handleFileInput} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="xAxisDropDown">Choose field to show on X axis:</label>
        <select id="xAxisDropDown" name="xAxisDropDown" onChange={handleXAxisChange}>
          {xAxisOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <label htmlFor="yAxisDropDown">Choose field to show on Y axis :</label>

       </form>
       
       </div>
  )
  }

  export default Convert;