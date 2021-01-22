import React from 'react';

import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useRouteMatch , withRouter} from "react-router-dom";

import Header from './../shared/header';
import Footer from './../shared/footer';

import "./Header.css";
import URL from './../utils';

class School extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            cbse_schools: [],
            ksee_schools: [],
            isLoading: false,
            pendings: []
        }
    }


    async componentDidMount() {
        this.setState({isLoading: true})
        let urla = URL + "/v1/schools";
        let a =  await fetch(urla)
        const data = await a.json();
        if(data){ 
            this.setState({  cbse_schools: data.cbse_schools, 
                             pendings: data.schools_pending, 
                             ksee_schools:  data.ksee_schools, 
                             isLoading: false})
        }
    }
      
    _menuSelect = (text) => {

    }

    _getClasses = async(school_id) => {
        
        localStorage.setItem('school_id', school_id);
        
        let code = 'eac001'
        let path = '/school/'+ school_id + '/classes';
        this.props.history.push({
            pathname: path,
            params: {id:  school_id}
        });

    }

    render (){
        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                        <div className="container"> 
                            <div className="row">
                                <div className="text-center" style={{ width: '100%', padding: 20}} > 
                                    * Please click on your school (If your school does not appear then  please select <a href=""> “Gitanjali.org School” </a>)
                                </div>
                            </div>
                            
                            <div className="row">
                                {this._renderKseeSchools()}
                            </div>

                            <div className="row">
                                {this._renderCbseSchools()}
                            </div>

                            <div className="">
                                {this._renderPendingSchools()}
                            </div>
                        </div>
                    <Footer />
                </div>
          );
    }


    _renderCbseSchools = () => {
        if(this.state.cbse_schools.length > 0){
            return(
                <>
                    <div className="text-center border-pending" > 
                        <h2> CBSE Schools </h2>
                    </div>

                    {this.state.cbse_schools.map( (school, i) => (
                        <div  className="col-md-4">
                         <div style={{  marginTop: 30}} key={i}>
                                <Button onClick={() => this._getClasses(school.id)} className="outlineColor" style={{ height: 80, fontSize: 20}}  variant="primary" block >
                                   {school.name}
                                </Button>
                        </div>
                        </div>
                    )
                    )} 
                </>
            )
        }
    }

    _renderKseeSchools = () => {
        if(this.state.ksee_schools.length > 0){
            return(
                <>
                    <div className="text-center border-pending" > 
                        <h2> KSEE Schools </h2>
                    </div>


                    {this.state.ksee_schools.map( (school, i) => (
                        <div  className="col-md-4">
                         <div style={{  marginTop: 30}} key={i}>
                                <Button onClick={() => this._getClasses(school.id)} className="outlineColor" style={{ height: 80, fontSize: 20}}  variant="primary" block >
                                   {school.name}
                                </Button>
                        </div>
                        </div>
                    )
                    )} 
                </>
            )
        }
    }

    _renderPendingSchools = () => {
        if(this.state.pendings.length > 0){

            return(
                <>
                    <div className="text-center border-pending" > 
                        <h2> Recently Added schools </h2>
                    </div>

                    <div className="row"> 
                        {this.state.pendings.map( (school, i) => (
                            <div  className="col-md-4" >
                                <div style={{  marginTop: 30}}  key={i}>
                                        <Button onClick={() => this._getClasses(school.id)} className="outlineColor" style={{ height: 80, fontSize: 20}}  variant="primary" block >
                                            {school.name}
                                        </Button>
                                </div>
                            </div>
                        )
                        )} 
                    </div>
                </>
            )
        }
    }

 

}

  
export default withRouter(School);

