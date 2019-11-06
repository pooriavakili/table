import React, {Fragment, useState} from 'react'
import {Table} from 'react-bootstrap'
import Calendar from 'react-calendar'
import Axios from "axios";
function Tables() {
    const [row,setRows]=useState();
    const [Data,setData]=useState()
const TableChangeAdd=()=>{
      let row=new Array()
    row.push('new rows')
    setRows({row:row})
}
const TableChangeDelete=()=>{
        let data= new Array()
        data.splice(data.index,1)
    setRows({data})
}
const SaveTable=()=>{
const Call=async ({baseUrl="AIzaSyBUJnbE1PwRO7b85aaXyOA9tOlItVEejTk"})=>{
    const data=await Axios.post({
    url:baseUrl
    }).catch({
        response:Call
    }).catch(err=>{
        throw err
    })
    return data
}
}
const Jame=(row)=>{

    row.forEach((item,index)=>{
        return row[index]=item+1
    })
}

    return(
        <Fragment>
<div>
<button  onClick={TableChangeAdd} id="addBtn" style={{
    padding:10,
    backgroundColor:"green",
    color:"white",

}}>+</button>
<button
    onClick={TableChangeDelete}
style={{
    padding:10,
    backgroundColor:"green",
    color:"white",
    marginLeft:5
}}
>-</button>
<button
    id={row}
    onClick={SaveTable}
    style={{
        padding:10,
        backgroundColor:"green",
        color:"white",
        marginLeft:5
    }}
>save</button>
</div>


            <div style={{
                marginTop:20
            }}>
                <Table
                    row={Jame}
                    style={{
                    borderWidth:4,
                    borderStyle:"solid",
                    borderColor:"black",
                    width:"70%"
                }} striped bordered hover
                       value={row}

                       size="sm">
                    <thead>
                    <tr>
                        <th
                        >نام </th>
                        <th >نام خانوادگی </th>
                        <th >سال ورود </th>
                        <th >تاریخ  </th>
                        <th >شهریه</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td  style={{textAlign:"center"}}>پوریا</td>
                        <td style={{textAlign:"center"}}>وکیلی</td>
                        <td style={{textAlign:"center"}}>۱۳۹۲</td>
                        <td style={{textAlign:"center"}}>
                            <Calendar
                                value={Data}
                                onChange={setData}
                                inputPlaceholder="تاریخ را وارد کنید"

                            />

                        </td>
                        <td style={{textAlign:"center"}}>500/000/000</td>
                    </tr>

                    </tbody>
                </Table>
            </div>
        </Fragment>
    )

}
export default Tables
