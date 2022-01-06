import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component{
    render(){
        return(
            <div>
                <div class="row m-2">
                    <div class="col-md-7 card shadow mt-3 mx-auto">
                            {/* <p className="text-center text-danger">{this.state.message}</p> */}
                            <div class="p-3 m-2">
                                <h4 class="text-center pb-2">Employee Management System</h4>
                                <div class="row justify-content-center">
                                    <div class="col-md-6 m-1 card shadow ">
                                        <div class="p-2 mt-3">
                                            <div class="container">
                                                <h4 class="card-title text-center">ADD EMPLOYEE</h4>
                                                <hr/>
                                                <a href="/addEmployee"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD</button></u></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 m-1 card shadow ">
                                        <div class="p-2 mt-3">
                                            <div class="container">
                                                <h4 class="card-title text-center">VIEW EMPLOYEE</h4>
                                                <hr/>
                                                <a href="/viewEmployee"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VIEW</button></u></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home