import React,{Component} from 'react';
import { Link } from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
        }
    }

    handleEmail=(e)=>{
          this.setState({
            email:e.target.value
          });
      }
  
      handlePassword=(e)=>{
        this.setState({
          password:e.target.value
        });
      }

      handleClick=(e)=>{
        console.log(this.state.email);
        console.log(this.state.password);

      }

    render(){
        return(
            <React.Fragment>
            <form onSubmit={this.handleClick}>
              <label >E-mail </label>
              <br></br>
              <input className="email" ref="email" placeholder="email id" type="email" />
                <br></br>
              <label >Password:</label>
                <br></br>
              <input className="password" ref="password" placeholder="Password" type="password"/>
                <br></br>
                <input className="button" type="submit" value="Login"/>
                <hr/>
                <Link className="link" to={'/'}>Create a new Account!</Link>
            </form>
            </React.Fragment>
        );
    }
}

export default Login;
