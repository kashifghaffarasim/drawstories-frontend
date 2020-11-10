import React from 'react';
import {Form , Button} from 'react-bootstrap';

class User extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        username: "",
        array: []
      }
  }


  componentDidMount(){
    const { name } = this.props;
    this.setState({ username: name})
  }
  _emailEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  _userName = (event) => {
    this.setState({ username: event.target.value})
  }

  handleSubmit=(event) => {
    this.props.save(this.state.email, this.state.username)
    event.preventDefault();
  }

  render (){

    return (
        <>
          <div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="h2 white"> Save your Story </h2>
                </div>
              </div>

              <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                    <Form  onSubmit={(event)=> this.handleSubmit(event)}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="white">User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" value={this.state.username} require="true"  onChange={(text) => this._userName(text)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                          </Form.Group>
                          <div className="col-md-12 text-right" style={{  marginBottom: 26, marginTop: 26}}>
                            <Button variant="primary" type="submit" style={{ width: '30%'}} >
                                Save
                            </Button>
                          </div>
                    </Form>
                  </div>
              </div>
          </div>
        </>
       );
  }


}

export default User;
