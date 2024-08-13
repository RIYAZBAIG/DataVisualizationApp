import loanData from './loan_age_income.csv';
import Papa from 'papaparse';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
 
export  const  LineChartData =()=> {
  const [chartData, setChartData] = useState({
    datasets: []
  });
  const [chartOptions, setChartOptions] = useState({})
 
  useEffect(() => {
    Papa.parse(loanData, {
      download: true,
      header: true,
      dynamicTyping: true,
      delimiter: "",
      complete: ((result) => {
        console.log(result)
        setChartData({
          labels: result.data.map((item, id) => [item['Married /Single']]).filter( String ),
          datasets: [
            {
              label: "Income",
              data: result.data.map((item, id) => [item['Income']]).filter( Number ),
              borderColor: "black",
              backgroundColor: "grey"
            },
            setChartOptions({
              label: "Age",
              data: result.data.map((item, id) => [item['Age']]).filter( Number ),
              borderColor: "black",
              backgroundColor: "red"





            })
          ]
        });
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: "Costomer_Loan_data"
            }
          }
        })
      })
    })
  }, [])
 
  return (
    <div>
      <h1>HOME PAGE</h1>
      {
        chartData.datasets.length > 0 ? (
          <div>
            <Line options={chartOptions} data={chartData}/>
            </div>
        ) : (
          <div>
            Loading...
            </div>
        )
      }
    </div>
  );
}
 
export default LineChartData;