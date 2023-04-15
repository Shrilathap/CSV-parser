import React, {useState} from "react";
import Papa from "papaparse"
import Report from "./Report";
import ReportChart from "./ReportChart";


const App = (props) => {
  const[file,setFile]=useState({})
  const[data,setData]=useState([])
  const changeHandler = (e) => {
    setFile(e.target.files[0])
  }
  const handleClick=(e)=>{
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data)
      },
    })
  }


  return (
    <div>
      <h1>File Upload + CSV parser</h1>
      <input type="file" name="file" accept=".csv" onChange={changeHandler} />
      <button onClick={handleClick}>Upload</button>
      {data.length>0&&
        <div>
      <Report  data={data}/>
      <ReportChart  data={data} />
      </div>}
    </div>
  )
}
export default App;
