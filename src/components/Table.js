import React, {Fragment,Component} from 'react'
import Axios from "axios";
import User from "./User";
 export default class Table extends Component {
     constructor(props){
         super(props)
             this.state = {
             row: []
         }
     }


     render() {
         const TableChangeAdd = () => {
             this.setState({
                 row: [...this.state.row, <User/>]
             })
         }
         const SaveTable = () => {
             const Call = async ({baseUrl = "AIzaSyBUJnbE1PwRO7b85aaXyOA9tOlItVEejTk"}) => {
                 const data = await Axios.post({
                     url: baseUrl
                 }).catch({
                     response: Call
                 }).catch(err => {
                     throw err
                 })
                 return data
             }
         }
             const TableChangeDelete = () => {
                 this.setState({
                     row: this.state.row.splice(-1, 1)
                 })
             }
             return (
                 <Fragment>
                     <div>
                         <button onClick={TableChangeAdd} id="addBtn" style={{
                             padding: 10,
                             backgroundColor: "green",
                             color: "white",

                         }}>+
                         </button>
                         <button
                             onClick={TableChangeDelete}
                             style={{
                                 padding: 10,
                                 backgroundColor: "green",
                                 color: "white",
                                 marginLeft: 5
                             }}
                         >-
                         </button>
                         <button

                             onClick={SaveTable}
                             style={{
                                 padding: 10,
                                 backgroundColor: "green",
                                 color: "white",
                                 marginLeft: 5
                             }}
                         >save
                         </button>
                         {this.state.row}
                     </div>


                     <div style={{
                         marginTop: 20
                     }}>
                         <User/>
                     </div>
                 </Fragment>
             )
         }

 }
