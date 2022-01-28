import React,{useState,useEffect} from 'react';

export default function Table(props){
  const [tableData,settableData] = useState([])
  const [tRows,setrows] =useState([])

  useEffect(() =>{
    if(props.tdata.length){
      setrows(Object.keys(props.tdata[0]))
      settableData(props.tdata)
    }
  },[props])

  return(<>
  <table>
    <thead>
      {tRows.map(h => {return <th>{h.toUpperCase()}</th>})}
    </thead>
    <tbody>
      {tableData.map((item,i) => {return <tr>
        {tRows.map(x=> { return  <td>{item[x]}</td>})}
        </tr>})}
    </tbody>
  </table>
  </>)
}