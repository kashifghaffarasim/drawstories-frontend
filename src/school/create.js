import React from 'react';

import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from '../shared/header';
import "./Header.css";
import URL from '../utils';


class CreateSchool extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            isLoading: false,
            agent: null,
            principle_name: null,
            school_email: null,
            school_phone: null, 
            name: null, 
            city: null,
            address: null,
            isFormSubmit: false
        }
    }


    async componentDidMount() {

    }
      
    _menuSelect = (text) => {

    }

    _getClasses = async(school_id) => {
        
        let code = 'eac001'
        let path = '/school/'+ school_id + '/classes';
        this.props.history.push({
            pathname: path,
            params: {id:  school_id}
        });

    }


    handleSubmit = (event) => {
        event.preventDefault();
        let svar = {  agent: this.state.agent,
                        principle_name: this.state.principle_name, 
                        school_email: this.state.school_email,
                        school_phone: this.state.school_phone,
                        name: this.state.name, 
                        city: this.state.city,
                        address: this.state.address
                    }

                
        let url = URL + 'v1/schools';

        let opts = {school: svar}
            console.log('updated')
                    console.log(opts)
                    console.log('ssssssssssssssssssssssss')
         const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(opts)
            };
            
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        this.setState({isFormSubmit: true })
        
    }

    onHandleClose = () => {
        this.setState({submit: false})
        this.props.history.push({
            pathname: '/school',
        });
    }

    render (){
        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                    <div className="container"> 
                        <div className="row">
                            {this._renderPopUP()}
                            <div style={{ padding: 10, margin: 20, background: "rgb(245 245 245)", width: '100%', borderRadius: 10, border: 1, borderColor: '#ccc'}}>  
                                <div className="col-md-12 text-center" style={{ padding: 20}}>
                                    <h2> Instant Registration of School</h2>
                                </div>
                                
                                <form style={{ padding: 30}} onSubmit={this.handleSubmit}> 
                                    
                                    <div className="row">
                                        <div className="col-md-6"> 
                                            <label role="name"> Marketing Volunteer Name</label>
                                            <input type="text" placeholder="Enter Marketing volunteer name" onChange={(event) => this.setState({ agent: event.target.value})} className="form-control" required/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label role="name"> Marketing Volunteer Phone</label>
                                            <input type="text" placeholder="Marketing Volunteer Phone number" onChange={(event) => this.setState({ agent_phone: event.target.value})} className="form-control" required/>
                                        </div>
                                    </div>

                                    <div className="row" style={{ marginTop: 20}}>
                                        <div className="col-md-6"> 
                                            <label role="name"> School Name</label>
                                            <input type="text" placeholder="Enter School Name" onChange={(event) => this.setState({ name: event.target.value})} className="form-control" required/>
                                        </div>

                                        <div className="col-md-6"> 
                                            <label role="name"> City/Town</label>
                                            <input type="text" placeholder="Enter City" className="form-control" onChange={(event) => this.setState({ city: event.target.value})}  required/>
                                        </div>
                                    </div>

                                    <div className="row" style={{ marginTop: 20}}>
                                        <div className="col-md-6"> 
                                            <label role="name"> Address</label>
                                            <input type="text" placeholder="Enter Address" className="form-control" onChange={(event) => this.setState({ address: event.target.value})} required/>
                                        </div>
                                    </div>


                                    <div className="row" style={{ marginTop: 20}}>
                                        <div className="col-md-6">
                                            <label role="name"> Principal Name (or Manager/Coordinator) </label>
                                            <input type="text" placeholder="Enter Principal Name (or Manager/Coordinator)" onChange={(event) => this.setState({ principle_name: event.target.value})} className="form-control" required/>
                                        </div>

                                        <div className="col-md-6"> 
                                            <label role="name"> Principal Phone ( or Manager/Coordinator Phone) </label>
                                            <input type="text" placeholder="Enter Principal Phone ( or Manager/Coordinator Phone)" onChange={(event) => this.setState({ school_phone: event.target.value})} className="form-control" required/>
                                        </div>
                                    </div>    

                                    <div className="row" style={{ marginTop: 20}}>
                                        <div className="col-md-6"> 
                                                <label role="name"> Principal Email</label>
                                                <input type="text" placeholder="Enter Principal Email" onChange={(event) => this.setState({ school_email: event.target.value})} className="form-control" required/>
                                        </div>
                                    </div>                                                      

                                    <div className="row"  style={{ marginTop: 20}}>
                                        <div className="col-md-12 border"></div>
                                    </div>



                                    <div className="row"  style={{ marginTop: 20, display: 'none'}}>
                                        <div className="col-md-12 text-center">
                                           <h4> Teacher Information  </h4> 
                                        </div>
                                    </div>
                                    
                                    <div className="row"  style={{ marginTop: 20, display: 'none'}}>
                                        <div className="col-md-6 box-border" >
                                            <div className="row text-center"> 
                                                <div className="col-md-12 text-center"> 
                                                    <h6> English 1</h6> 
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}} > 
                                                <div className="col-md-12"> 
                                                    <label role="name">  Teacher Name</label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-6 box-border">
                                            <div className="row text-center"> 
                                                <div className="col-md-12 text-center"> 
                                                    <h6> English 2</h6> 
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}} > 
                                                <div className="col-md-12"> 
                                                    <label role="name">  Teacher Name</label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 box-border">
                                            <div className="row text-center"> 
                                                <div className="col-md-12 text-center"> 
                                                    <h6> Science</h6> 
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}} > 
                                                <div className="col-md-12"> 
                                                    <label role="name">  Teacher Name</label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 box-border">
                                            <div className="row text-center"> 
                                                <div className="col-md-12 text-center"> 
                                                    <h6> Social Science </h6> 
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}} > 
                                                <div className="col-md-12"> 
                                                    <label role="name">  Teacher Name</label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ marginTop: 20}}> 
                                                <div className="col-md-12"> 
                                                    <label role="name"> Teacher Email </label>
                                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                                </div>
                                            </div>

                                           
                                        </div>

                                    </div>

                                    <div className="row text-left" style={{ marginTop: 20}}> 
                                        <div className="col-md-12 text-right"> 
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>       
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
          );
    }

 
    _renderPopUP = () => {
        if(this.state.isFormSubmit){
            return(
                <Modal show={this.state.isFormSubmit} onHide={() => this.onHandleClose()} dialogClassName="main">
                        <Modal.Header closeButton className="color">   </Modal.Header>
                            <Modal.Body className="color">
                                    <div className= "text-center custom1">
                                        Congratulations!! Your school has been registered. Please refresh the home page and check under the section “Recently Added schools”. All the online content will be available now for your school. After verification of the school, it will be added to the main section.
                                    </div>
                            </Modal.Body>
                </Modal>
            )
        }
    }

}

  
export default withRouter(CreateSchool);

