import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

class MobileHeader extends React.Component  {

  constructor(props) {
      super(props);
      this.state = { }
  }

  render (){
    return (
      <Navbar expand="lg" className="yello-dark">
          <Navbar.Brand href="#home" onClick={() => this.props.goHome()}> Online Courses For Schools </Navbar.Brand>
      </Navbar>
       );
  }
}

export default MobileHeader;
