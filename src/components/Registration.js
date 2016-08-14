import React from 'react'
const Registration = React.createClass({
  getInitialState:function (){
    return {
     fname:'',
     lname: '',
     bloodtype:'',
     age:'',
     address:'',
     state:'',
     country:'',
     phonenumber:''
    }
  },

  onInputChange: function(event){
    this.setState({fname:event.target.value});

  },
  onInputChangeLast: function(event){
    this.setState({lname:event.target.value});

  },
  onInputChangeBloodType: function(event){
    this.setState({bloodtype:event.target.value});
  },
    onInputChangeAge: function(event){
    this.setState({age:event.target.value});
  },
   onInputChangeAddress: function(event){
    this.setState({address:event.target.value});

  },
   onInputChangeState: function(event){
    this.setState({state:event.target.value});

  },
  onInputChangeCountry: function(event){
    this.setState({country:event.target.value});

  },
   onInputChangePhone: function(event){
    this.setState({phonenumber:event.target.value});

  },
  addDonor: function() {
    var url = "/bloodhounds/"
    fetch(url,
    {
      method: "POST",
      headers:{  "Content-type": "application/json"  },
      body:JSON.stringify(this.state)
    })
    console.log("this.state:", this.state)

  },

  render(){
    console.log('Registration');
    return (
      <div id = "regForm">
          <input className="form-control" type="text" value ={this.state.fname} placeholder = "First Name" onChange = {this.onInputChange}/><br/>
          <input className="form-control" type="text" value ={this.state.lname} placeholder = "Last Name" onChange = {this.onInputChangeLast}/><br/>
          <input className="form-control" type="text" value ={this.state.bloodtype} placeholder = "Blood Type" onChange ={this.onInputChangeBloodType}/><br/>
          <input className="form-control" type="text" value ={this.state.age} placeholder = "Age" onChange ={this.onInputChangeAge}/><br/>
          <input className="form-control" type="text" value ={this.state.address} placeholder = "Address" onChange ={this.onInputChangeAddress}/><br/>
          <input className="form-control" type="text" value ={this.state.state} placeholder = "State" onChange ={this.onInputChangeState}/><br/>
          <input className="form-control" type="text" value ={this.state.country} placeholder = "Country" onChange ={this.onInputChangeCountry}/><br/>
          <input className="form-control" type="text" value ={this.state.phonenumber} placeholder = "Phone Number" onChange ={this.onInputChangePhone}/><br/>
          <button id = "submitButton" className="btn btn-success btn-sm" onClick={this.addDonor}>submit</button>
      </div>
    )
  }
});

export default Registration;
