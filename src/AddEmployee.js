import { Component } from "react";
import axios from 'axios';
const employeeRoute = "http://localhost:3001/api/v1/employee/";


class AddEmployee extends Component{
    state={
        first_name:"",
        last_name:"",
        gender:"",
        email:"",  
        password:"",
        message:"",
    }

    //Add Employee
    addEmployee=(e)=>{
        e.preventDefault();
        const data ={
            first_name:this.state.first_name, 
            last_name:this.state.last_name,
            gender:this.state.gender,
            email:this.state.email,
            password:this.state.password
        }
        axios.post(employeeRoute+'registerEmployee', data)
        .then((response)=>{
            if(response.data.success==true){
                window.location.href='/viewEmployee'
            }
            this.setState({
                message: response.data.message
            })
            
        })
     }
    
    render(){
        return(
            <div class="row m-2">
               <form onSubmit={this.addEmployee} className="card shadow col-md-6 mx-auto">
                    <h4 className="text-center m-3">ADD EMPLOYEE</h4>
                    {/* <p className="text-center text-danger">{this.state.message}</p> */}
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" required placeholder="First Name" value={this.state.first_name} onChange={(event)=>{this.setState({first_name: event.target.value})}}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" required placeholder="Last Name" value={this.state.last_name} onChange={(event)=>{this.setState({last_name: event.target.value})}}/>
                        </div>
                    </div>
                    <label for="gender">Gender</label>
                    <div class="form-group">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                            <label class="form-check-label" for="inlineRadio3">Others</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" required placeholder="example@example.com" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" required placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/>
                    </div>
                    <button type="submit" style={{backgroundColor:"#31B1B9"}} className="btn m-3 float-right btn-primary">ADD</button>
                </form>
            </div>
        )
    }
}

export default AddEmployee