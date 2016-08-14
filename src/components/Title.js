import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'


const Title = React.createClass({
render(){
    return (
      <div>
        <h1 id="bhTitle">Bloodhound
          <img width ="170px" src ="images/bloosdrop.png"/>
        </h1>
        <h4 id="slogan">search. give. save.</h4>
        <hr/>
        <button id="buttons">
        <Link to = '/home'><span className="titleButtons">Home</span></Link>
        </button>


        <button id="buttons">
        <Link to = '/registration'><span className="titleButtons">Registration</span></Link>
        </button>


        <button id="buttons">
        <Link to = '/searchdonors'><span className="titleButtons">Search Donors</span></Link>
        </button>
        <br/>
        {this.props.children}
  
      </div>
    )
  }
})
export default Title;
