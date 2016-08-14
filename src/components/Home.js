import React from 'react'

const Home = React.createClass({
  // componentDidMount : function(){
  //   console.log(this.props);
  // },
  render(){
    console.log('in home');
    return (
      <div>
      <span id= "promises">Our Promises</span>
      <img  id = "patientsPic" width = "1020px" src = "images/patients.svg"/>
      <div id = "fakeWords">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis odio, imperdiet vehicula blandit ac, vehicula ut neque. Nam imperdiet accumsan lorem vitae varius. Sed eget efficitur turpis. Sed condimentum rhoncus tellus, dictum ullamcorper ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce tristique, urna sed porta dignissim, mi dolor consequat diam, a iaculis massa enim mollis orci. In bibendum elit a finibus molestie.

Cras ut rutrum sem, venenatis semper nibh. In sed elit dolor. Quisque felis lectus, eleifend in vulputate a, venenatis a urna. Donec consequat convallis turpis sit amet rhoncus. Suspendisse eget libero ut massa tempus vehicula. Cras cursus sagittis diam at iaculis. Fusce felis metus, vehicula in cursus quis, pharetra at purus. Etiam tortor erat, luctus ac placerat at, semper at turpis. Nunc metus sem, elementum quis tincidunt vitae, mollis vitae tellus. Nam pretium sapien non nunc viverra dignissim. Integer rhoncus nisl euismod urna tristique, sit amet sollicitudin libero commodo.

Donec nec eleifend odio, ac semper arcu. Duis ut hendrerit sapien. Etiam efficitur, diam vitae varius viverra, nisi sapien sagittis sapien, ac egestas mi elit non enim. Nam dignissim efficitur laoreet. Vivamus pharetra, libero ut ultricies blandit, purus odio luctus orci, auctor placerat diam massa aliquet odio. Nullam porttitor nec magna ut venenatis. Quisque non orci aliquet, pellentesque mauris at, elementum tellus. Maecenas sodales nisl eu bibendum bibendum. Vestibulum finibus, neque sit amet ultricies hendrerit, sem urna suscipit diam, ac molestie leo orci id neque.

      </div>
      <span id= "mission">Mission</span>
      <div id = "fakeWords2">
      In sed elit dolor. Quisque felis lectus, eleifend in vulputate a, venenatis a urna. Donec consequat convallis turpis sit amet rhoncus. Suspendisse eget libero ut massa tempus vehicula. Cras cursus sagittis diam at iaculis. Fusce felis metus, vehicula in cursus quis, pharetra at purus. Etiam tortor erat, luctus ac placerat at, semper at turpis. Nunc metus sem, elementum quis tincidunt vitae, mollis vitae tellus. Nam pretium sapien non nunc viverra dignissim. Integer rhoncus nisl euismod urna tristique, sit amet sollicitudin libero commodo.

      Donec nec eleifend odio, ac semper arcu. Duis ut hendrerit sapien. Etiam efficitur, diam vitae varius viverra, nisi sapien sagittis sapien, ac egestas mi elit non enim. Nam dignissim efficitur laoreet. Vivamus pharetra, libero ut ultricies blandit, purus odio luctus orci, auctor placerat diam massa aliquet odio. Nullam porttitor nec magna ut venenatis. Quisque non orci aliquet, pellentesque mauris at, elementum tellus. Maecenas sodales nisl eu bibendum bibendum. Vestibulum finibus, neque sit amet ultricies hendrerit, sem urna suscipit diam, ac molestie leo orci id neque.
      </div>
      </div>
    )
  }
})

export default Home;
