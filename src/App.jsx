import { useEffect, useState } from 'react'
import './App.css'
import BarChart from './Components/BarChart'
import ChartComponent from './Components/ChartComponent'

function App() {
const [chartData, setChartData] = useState(null);

useEffect(() => 
  fetch('/financial_data.json')
    .then((response) => response.json())
)

  return (
    <>
      
    </>
  )
}

export default App
