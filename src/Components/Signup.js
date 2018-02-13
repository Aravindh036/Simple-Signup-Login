import React,{Component} from 'react';
// import ReactDom from 'react-dom';
// import App from '../App';
import {  Link } from 'react-router-dom';

class Signup extends Component{
    constructor(props){
        super(props);
        this.handleFirsrtName=this.handleFirsrtName.bind(this);
        this.handleLastName=this.handleLastName.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleConfirm=this.handleConfirm.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state={
          firstName:'',
          lastName:'',
          email:'',
          password:'',
          confirm:''
        }
    }

    handleFirsrtName(e){
      this.setState({
        firstName:e.target.value        
      });      
      console.log("firstName");

    }

    handleLastName(e){
      this.setState({
        lastName:e.target.value        
      });
      console.log("lastname");

    }

    handleEmail(e){
      this.setState({
        email:e.target.value        
      });
      console.log("email");

    }

    handlePassword(e){
      this.setState({
        password:e.target.value        
      });
      console.log("password");

    }

    handleConfirm(e){
      this.setState({
        confirm:e.target.value        
      });
      console.log("confirm");

    }

    handleClick(e){
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(this.state.confirm);
    }
    
    render(){
        return(
            <form onSubmit={this.handleClick}>
              <label > Name: </label>
              <br></br>
              <input className="firstName" ref="firstName" placeholder="First Name" type="text" onBlur={this.handleFirsrtName}/>
              <br></br>
              <input className="lastName" ref="lastName" placeholder="Last Name" type="text" onBlur={this.handleLastName}/>
              <label >E-mail </label>
              <br></br>
              <input className="email" ref="email" placeholder="email id" type="email" onBlur={this.handleEmail}/>
                <br></br>
              <label >Password:</label>
                <br></br>
              <input className="password" ref="password" placeholder="Password" type="password" onBlur={this.handlePassword}/>
                <br></br>
              <input className="confirmPassword" ref="password" placeholder="confirm password" type="password" onBlur={this.handleConfirm}/>
                <br></br>
              <input className="button" type="submit" value="Signup"/>
              <hr/>

             <button> <Link className="link" to={'/Login'}>Already have an account?</Link></button>
            </form>
        );
    }
}


export default Signup;
