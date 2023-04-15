import React from "react";
import { Chart } from "react-google-charts";


  function ReportChart(props) {
    const {data}=props
    const newdata = [
      ["student","Minutes Attended"],
    ];
    data.forEach(ele=>{
          newdata.push([ele["Name (Original Name)"], Number(ele["Total Duration (Minutes)"])])
        })

        const options = {
          "vAxis": { "title": "Duration" },
          "hAxis": { "title": "Participants" },
          "seriesType": "bars",
          "series": { "5": { "type": "line" } }
      };
  

  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={newdata}
      options={options}
    />
  );
}
export default ReportChart
