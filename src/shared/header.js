import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { AiFillLinkedin, AiFillFacebook , AiFillTwitterSquare} from "react-icons/ai";


class Header extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        img: require('./../assets/img/logo-color.png')
      }
      
  }

  render (){
    return (
      <>
        <div className="topbar">
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-9"  style={{ padding: 5}}>
                  <p className="top-text" style={{ marginBottom: 0}}>
                    <a href="http://vrquin.in" className="top-btn-text" target="_blank" > VRQUIN LLP </a> 
                     presents Gitanjali.org. India's first non-profit e-learning software. 
                  </p>
                </div>
                <div className="col-4 col-md-1 text-center " style={{ padding: 5}}>
                  <a href="/volunteer" className="top-btn"> 
                      Volunteer 
                  </a>
                </div>
                <div className="col-4 col-md-1 text-center" style={{ padding: 5}}>
                 
                </div>
                <div className="col-4 col-md-1 text-center" style={{ padding: 5}}>
                  <AiFillFacebook> </AiFillFacebook> 
                  <AiFillTwitterSquare />   
                  <AiFillLinkedin />
                </div>
            </div>
            </div>
        </div>
        <Navbar expand="lg" className="yello-dark">
            <Navbar.Brand  href="/school" style={{ marginLeft: 50}}> 
              <img src={this.state.img} style={{ height: '48px', width: '48px'}}/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ float: 'right'}} />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/school"> Schools </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/channel/UCd6FQ7_X5U5bpWjxDizqyxQ" className="rightBorder" target="_blank"> 
                        Online Classes
                    </Nav.Link>
                    <Nav.Link href="/stories" className="rightBorder"> Story </Nav.Link>
                    <Nav.Link href="/demo" className="rightBorder"> Demo </Nav.Link>
                    <Nav.Link href="/register" className="rightBorder"> Register </Nav.Link>
                    <Nav.Link href="/about" className="rightBorder"> About </Nav.Link>
                    <Nav.Link href="/contact-us" className="rightBorder"> Contact Us </Nav.Link>
                    <Nav.Link href="#" style={{ display: 'none'}}   onClick={() => this._onSave('Zoe')} className="borderLeft"> Bunny Story </Nav.Link>
                    <Nav.Link href="#" style={{ display: 'none'}}  onClick={() => this._onSave('more')} > More </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
        </Navbar>
      </>
       );
  }

  _onSave = (text) => {
    const { onSelect } = this.props;
    onSelect(text);
  }

}

export default Header;
