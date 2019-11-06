import React, {Fragment, useState} from 'react'
import {Table} from "react-bootstrap";
import Calendar from "react-calendar";
const User=()=> {
    const [Data,setData]=useState()
return(
    <Fragment>
        <div>
            <Table

                style={{
                    borderWidth: 4,
                    borderStyle: "solid",
                    borderColor: "black",
                    width: "70%"
                }} striped bordered hover


                size="sm">
                <thead>
                <tr>
                    <th
                    >نام
                    </th>
                    <th>نام خانوادگی</th>
                    <th>سال ورود</th>
                    <th>تاریخ</th>
                    <th>شهریه</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{textAlign: "center"}}>پوریا</td>
                    <td style={{textAlign: "center"}}>وکیلی</td>
                    <td style={{textAlign: "center"}}>۱۳۹۲</td>
                    <td style={{textAlign: "center"}}>
                        <Calendar
                            value={Data}
                            onChange={setData}
                            inputPlaceholder="تاریخ را وارد کنید"

                        />

                    </td>
                    <td style={{textAlign: "center"}}>500/000/000</td>
                </tr>

                </tbody>
            </Table>
        </div>
    </Fragment>
)
}
export default User
