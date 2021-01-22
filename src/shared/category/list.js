
import React from 'react';
import './list.css';
import {Button,  Card} from 'react-bootstrap';

class List extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
            
      }

  }


  _submitForReview = () => {
    this.props.onSubmit(this.state.textArray)
  }

  render (){
    return (
        <>
          <div className="container listmargin">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="col-md-12 text-center margin" >
                    <h2 className="h2 top-story"> Select Story </h2>
                    </div>          
                    </div>

                    <div className="row text-center" style={{ width: '98%'}}> 
                    <div className="col-md-3 text-center"></div>
                    <div className="col-md-3 text-center">
                        <Card style={{ background: '#031a4a', height: 230}}>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="h2 white">  Dog Story </h2>
                                </Card.Title>
                                <div className="btnbottom"> 
                                 <Button variant="info" onClick={() => this._selectStory("Dog")} style={{ marginTop: 30, width: 120}}>  Write </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 text-center">
                        <Card style={{ background: '#373940', height: 230}}>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="h2 white">  Zoe's fluffiest bunnies Story </h2>
                                </Card.Title>
                                <div className="btnbottom"> 
                                    <Button onClick={() => this._selectStory("Zoe")} variant="primary" style={{ marginTop: 30, width: 120}}>  Write </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>         
                    <div className="col-md-3 text-center"></div>
                </div>

            </div>
          </div>
        </>
       );
  }


  _selectStory = (name) => {

    this.props.onSelect(name)
  }


}

export default List;
