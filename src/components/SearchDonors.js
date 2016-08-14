import React from 'react'

const SearchDonors = React.createClass({
 getInitialState: function(){
   return {
    data:[]
   }
 },


  DeleteMe :function(id){
 
   var url = `/bloodhounds/${id}`
    fetch(url,
    {
      method: "DELETE",
      headers:{  "Content-type": "application/json"  },
      
    })
      .then(res => {
      return res.json();
    })
    /*.then(data => {
      
      this.setState({data:data});
    })*/
    //hi
    .catch(err => console.log('err','err'))


  },


  clickedMe0: function(event){
    var url=`/bloodhounds/${btn0.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))

  },

  
  clickedMe1: function(event){
   var url=`/bloodhounds/${btn1.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },


   clickedMe2: function(event){
    var url=`/bloodhounds/${btn2.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },
 

   clickedMe3: function(event){
     var url=`/bloodhounds/${btn3.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },

   clickedMe4: function(event){
     var url=`/bloodhounds/${btn4.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },

   clickedMe5: function(event){
       var url=`/bloodhounds/${btn5.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },


    clickedMe6: function(event){
        var url=`/bloodhounds/${btn6.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },



    clickedMe7: function(event){
         var url=`/bloodhounds/${btn7.value}`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))
  },
  render(){
    console.log('in donors page');
    return (
     <div className="dropdown">
       <button className="dropbtn">Dropdown</button>
       <div className="dropdown-content">
          <div>
            <button onClick ={this.clickedMe0}id="btn0" value ="O+">O+</button>
            <button onClick ={this.clickedMe1}id ="btn1" value ="O-">O-</button>
            <button onClick ={this.clickedMe2}id ="btn2" value ="A+">A+</button>
            <button onClick ={this.clickedMe3}id ="btn3" value ="A-">A-</button>
            <button onClick ={this.clickedMe4}id ="btn4" value ="B+">B+</button>
            <button onClick ={this.clickedMe5}id ="btn5" value ="B-">B-</button>
            <button onClick ={this.clickedMe6}id ="btn6" value ="AB+">AB+</button>
            <button onClick ={this.clickedMe7}id ="btn7" value ="AB-">AB-</button>
         </div>
      </div>
        <DataDisplay data = {this.state.data} delete={this.DeleteMe}/>
 

  </div>

)
 }
});


const DataDisplay = React.createClass({

  DeleteMe :function(event){
   var id = event.target.value;
   this.props.delete(id);


  },
 

 ModifyMe :function(){
   console.log("delete me");
  },
  render(){

       let person = this.props.data.map(info=>{
        return(
          <tr key ={info.id}>
            <td>{info.fname + ' ' + info.lname}</td>
            <td>{info.bloodtype}</td>
            <td>{info.age}</td>
            <td>{info.address}</td>
            <td>{info.state}</td>
            <td>{info.country}</td>
            <td>{info.phonenumber}</td>
            <td><button value ={info.id} onClick ={this.DeleteMe}>Delete</button><button onClick={this.ModifyMe}>Modify</button></td>
          </tr>
          );
      });
      return (
        <table className="table table-bordered">
          <thead>
              <tr>
                <th>Name</th>
                <th>Bloodtype</th>
                <th>Age</th>
                <th>Address</th>
                <th>State</th>
                <th>Country</th>
                <th>Phone Number</th>
                <th>Delete/Modify</th>
              </tr>
            </thead>
            <tbody>
              {person}
            </tbody>
        </table>
        )

    
  }


})

export default SearchDonors;
