import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Component } from "react/cjs/react.production.min";
const employeeRoute = "http://localhost:3001/api/v1/employee/";

class UpdateEmployee extends Component{
    state={
        // id:useParams(),
        first_name:"",
        last_name:"",
        gender:"",
        mobile:"",
        email:"",  
        message:"",
        // id: this.props.match.params.id,
    }
    
    componentDidMount(){
        axios.get(employeeRoute+"singleEmployee/61c45d00bf1f96a22ea1f2cc")
        .then((response)=>{
            console.log(response);
            this.setState({
                first_name : response.data.employee.first_name,
                last_name: response.data.employee.last_name,
                mobile:response.data.employee.mobile,
                email: response.data.employee.email,
                gender:response.data.employee.gender
            })
        })
        .catch((err)=>{ console.log(err.response) })
    }

     //update product
     UpdateEmployee=(e)=>{
        e.preventDefault();//defalut behaviour stop
        axios.put(employeeRoute+"/update", this.state)
           .then((response)=>{
                window.location.href='/'
           })
           .catch((err)=>{
               console.log(err.response);
           })
   }


    render(){
        return(
            <div class="row p-2 m-2">
                <form className="card shadow col-md-6 col-sm-9 col-xs-9 mx-auto">
                    <h4 className="text-center m-3">UPDATE EMPLOYEE</h4>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="inputProductName">First Name</label>
                            <input type="text" class="form-control" placeholder="First Name" value={this.state.first_name} onChange={(event)=>{this.setState({first_name: event.target.value})}}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="inputProductName">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last Name" value={this.state.last_name} onChange={(event)=>{this.setState({last_name: event.target.value})}}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="inputProductName">Email</label>
                            <input type="text" class="form-control" placeholder="example@example.com" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="inputProductName">Phone</label>
                            <input type="text" class="form-control" required placeholder="+977 XXX-XXXX-XXX" value={this.state.mobile} onChange={(event)=>{this.setState({mobile: event.target.value})}}/>
                        </div>
                    </div>
                    <button onClick={this.UpdateEmployee} type="submit" style={{backgroundColor:"#31B1B9"}} className="btn m-3 float-right btn-primary">SAVE</button>
                </form>
            </div>
        )
    }
}
export default UpdateEmployee;