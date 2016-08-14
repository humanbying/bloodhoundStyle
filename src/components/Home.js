import React from 'react'

const Home = React.createClass({
  // componentDidMount : function(){
  //   console.log(this.props);
  // },
  render(){
    console.log('in home');
    return (
      <div>
        <button>
         from home
        </button>     
      </div>
    )
  }
})

export default Home;
