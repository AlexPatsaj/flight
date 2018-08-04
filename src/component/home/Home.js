import React, { Component } from 'react';
import Hheader from './header/Hheader';
import Hbody from './body/Hbody'
import Hbottom from './bottom/Hbottom'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hheader />
        <Hbody />
        <Hbottom />
      </div>
    );
  }
}
export default Home;