import React, {Fragment, useState} from 'react'
import {Button,Table} from 'react-bootstrap'
import Calendar from 'react-calendar'
function Tables() {
    const [Dates,setDates]=useState()
    const [row,setRows]=useState();
    const [Data,setData]=useState()
const TableChangeAdd=()=>{
      let rows=row
    rows.push('new rows')
    setRows({row:rows})
}
const TableChangeDelete=()=>{
        let data=Data;
        data.splice(row.index,1)
    setData({Data})
}

    return(
        <Fragment>
<div>
<Button onChange={TableChangeAdd} id="addBtn" style={{
    padding:10,
    backgroundColor:"green",
    color:"white",

}}>+</Button>
<Button
    onChange={TableChangeDelete}
style={{
    padding:10,
    backgroundColor:"green",
    color:"white",
    marginLeft:5
}}
>-</Button>
<Button
    style={{
        padding:10,
        backgroundColor:"green",
        color:"white",
        marginLeft:5
    }}
>save</Button>
</div>


            <div style={{
                marginTop:20
            }}>
                <Table style={{
                    borderWidth:4,
                    borderStyle:"solid",
                    borderColor:"black",
                    width:"70%"
                }} striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>نام </th>
                        <th>نام خانوادگی </th>
                        <th>سال ورود </th>
                        <th>تاریخ  </th>
                        <th>شهریه</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{textAlign:"center"}}>پوریا</td>
                        <td style={{textAlign:"center"}}>وکیلی</td>
                        <td style={{textAlign:"center"}}>۱۳۹۲</td>
                        <td style={{textAlign:"center"}}>
                            <Calendar
                                value={Dates}
                                onChange={setDates}
                                inputPlaceholder="تاریخ را وارد کنید"

                            />

                        </td>
                        <td style={{textAlign:"center"}}>500/000/000</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td ></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )

}
export default Tables
