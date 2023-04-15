import React from "react";

const Report=(props)=>{
    const {data}=props
    const host=data.find((ele)=>{
        return(ele.Guest==='No')
    })

    const hours = Math.floor(host["Total Duration (Minutes)"] / 60);
    const minutes = host["Total Duration (Minutes)"] % 60;
    return(
        <div>
            <h2>Report</h2>
            <h5>Host-{host["Name (Original Name)"]}</h5>
            <h5>Total Participants-{data.length}</h5>
            <h5>Duration-{host["Total Duration (Minutes)"]} Minutes({hours} hour {minutes} Minutes)</h5>
            <table border="1" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((obj,i)=>{
                                return(<tr key={i}>
                                    <td>{obj["Name (Original Name)"]}</td>
                                    <td>{obj["User Email"]}</td>
                                    <td>{obj["Total Duration (Minutes)"]}</td>
                                </tr>)
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}
export default Report