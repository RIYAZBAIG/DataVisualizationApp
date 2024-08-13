import './App.css';
// import App2 from './Components/App2';
import Convert from './Components/Convert';
import { CsvData } from './Components/CsvData';
// import MyComponent from './Components/MyComponent';
// import MyComponent1 from './Components/MyComponent1';
// import UserData from './Components/UserData';
import Home from './Components/Home';
import DataFetch from './Components/DataFetch';
// import LineChart from './Components/LineChart';
// import { LineChartData } from './Components/LineChartData';
import PieChart from './Components/PieChart';

  function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <PieChart/> */}
      {/* <Api/> */}
      {/* <UserData/> */}
      {/* <LineChartData/> */}
      <Convert/>
      {/* <CsvData/> */}
      {/* <MyComponent/> */}
      <DataFetch/>
      {/* <LineChart/> */}
    </div>
  );
}

export default App;
