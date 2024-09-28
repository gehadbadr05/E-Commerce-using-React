import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Ttable({ data }) {
  return (
      <Table 
      style={{ bordercollapse: "collapse", width: "100%",textalign: "left"}}>
        <thead>
          <tr>
          <th style={{ padding: "8px", border: "1px solid black", backgroundcolor:" #f2f2f2"}}>Name</th>
            <th style={{ padding: "8px", border: "1px solid black" , backgroundcolor:" #f2f2f2"}}>Email</th>
            <th style={{ padding: "8px", border: "1px solid black" , backgroundcolor:" #f2f2f2"}}>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            
            <tr key={index} >
               <td style={{ padding: "8px", border: "1px solid black"}}>{item.name}</td>
              <td style={{ padding: "8px", border: "1px solid black"}}>{item.email}</td>
              <td style={{ padding: "8px", border: "1px solid black"}}>{item.password}</td>
            </tr>
         
          ))}
        </tbody>
      </Table>
    );
}
