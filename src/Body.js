import { Component } from "react";
import { Route , Routes} from "react-router-dom";
import AddEmployee from "./AddEmployee";
import Home from "./Home";
import New from "./new";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";

class Body extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/addEmployee" exact element={<AddEmployee/>}/>
                    <Route path="/viewEmployee" exact element={<ViewEmployee/>}/>
                    <Route path="/updateEmployee/:id" exact element={
                        <UpdateEmployee/>
                    }/>
                    <Route path="/new/:12" exact element={<New/>}/>
                    {/* <Route path='/update/:id' render={(matchProps) =>
                            <UpdateEmployee
                                {...matchProps}
                                {...this.props}
                                handleMatch={this.handleMatch}
                            />
                            }/> */}
                </Routes>
            </div>
        )
    }
}
export default Body