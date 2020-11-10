import React from 'react';
import './Header.css'

import Button from 'react-bootstrap/Button';

class Categories extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { }
    }

    
    render (){
        return (
                <div>
                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <Button className="outlineColor" onClick={() => this._onPress('school')} variant="outline-primary" block>Schools</Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <a className="linkborder" 
                                href="https://www.youtube.com/channel/UCd6FQ7_X5U5bpWjxDizqyxQ" target="_blank"  variant="outline-primary" block> Online Classes </a>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <Button className="outlineColor" onClick={() => this._onPress('reg')} variant="outline-primary" block> Register </Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <Button className="outlineColor" onClick={() => this._onPress('demo')} variant="outline-primary" block> Demo </Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <Button className="outlineColor" onClick={() => this._onPress('about')} variant="outline-primary" block> About </Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1">
                            <Button className="outlineColor" onClick={() => this._onPress('contact-us')} variant="outline-primary" block> Contact US </Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1" style={{ display: 'none'}}>
                            <Button className="outlineColor" onClick={() => this._onPress('Dog')} variant="outline-primary" block>Dog Story</Button>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div className="box1"  style={{ display: 'none'}}>
                            <Button className="outlineColor" onClick={() => this._onPress('Zoe')}  variant="outline-danger" block>Bunnys Story</Button>
                        </div>
                    </div>

                    <div class="col-md-12 text-center">
                        <div className="box1"  style={{ display: 'none'}}>
                          <Button className="outlineColor" onClick={() => this._onPress('list')} variant="outline-dark" block>View Stories</Button>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="box1"  style={{ display: 'none'}}>
                            <Button className="outlineColor" href="/lessons" variant="outline-dark" block> Book </Button>
                        </div>
                    </div>
                </div>
           );
    }

    _onPress = (text) => {
        const { onClick } = this.props;
        onClick(text)
    }

    _onRegistration = (text) => {
        this.props.history.push({
            pathname: '/demo',
          });
    }

    _onDemo = (text) => {
        this.props.history.push({
            pathname: '/demo',
          });
    }

    _onAbout = (text) => {
        
        this.props.history.push({
            pathname: '/about',
          });
    }

    _onContact = (text) => {
        this.props.history.push({
            pathname: '/contact-us',
          });
    }
}


export default Categories;
