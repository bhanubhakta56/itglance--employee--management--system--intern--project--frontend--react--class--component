import axios from 'axios';
import React, { Component } from 'react';
import image from './image.png';
const employeeRoute = "http://localhost:3001/api/v1/employee/";



class ViewEmployee extends Component{
    state={
        employee:[]
    }

    
    componentDidMount(){
        //To Get all Employee
        axios.get(employeeRoute+"/allEmployee")
        .then((response)=>{
            console.log(response);
            this.setState({
                employee:response.data.employee
            })
        })
        .catch((err)=>{ console.log(err.response) })
    }

    //-------------------------DELETE Employee-------------------
    deleteEmployee=(id)=>{
        axios.delete(employeeRoute+'deleteEmployee/'+id)
        .then((response)=>{
            console.log(response.data.success)
            window.location.href='/'
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }


    render(){
        return(
            <div className="container-fluid">
                <div className="row m-2 justify-content-center">
                {this.state.employee.map((employee)=>{
                        return(
                            <div class="card shadow m-3 p-2 col-md-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={image} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{employee.first_name+" "+employee.last_name}</h5>
                                            <p class="card-text">{employee.email}</p>
                                        </div>
                                        <a href={'/updateEmployee/'+employee._id} class="m-1 float-end"><u><button className="btn btn-primary">UPDATE</button></u></a>
                                        <a class="m-1 float-end text-decoration-underline"><u><button onClick={this.deleteEmployee.bind(this, employee._id)} className="btn btn-danger">DELETE</button></u></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

//export ViewEmployee
export default ViewEmployee