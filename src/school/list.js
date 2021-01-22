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
<<<<<<< HEAD
=======
            cbse_schools: [],
            ksee_schools: [],
>>>>>>> eb2008966bd6db688f6c7b5b28a84fda9f2232de
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
<<<<<<< HEAD
            console.log(data)
            this.setState({schools: data.schools, pendings: data.schools_pending, isLoading: false})
            
=======
            this.setState({  cbse_schools: data.cbse_schools, 
                             pendings: data.schools_pending, 
                             ksee_schools:  data.ksee_schools, 
                             isLoading: false})
>>>>>>> eb2008966bd6db688f6c7b5b28a84fda9f2232de
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
<<<<<<< HEAD
                             {this._renderSchools()}
                        </div>
=======
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

>>>>>>> eb2008966bd6db688f6c7b5b28a84fda9f2232de
                        <div className="">
                            {this._renderPendingSchools()}
                        </div>
                    </div>
                    <Footer />
                </div>
          );
    }

<<<<<<< HEAD
    _renderSchools = () => {
        if(this.state.schools.length > 0){
            return(
                <>
                    <div className="text-center" style={{ width: '100%', padding: 20}} > 
                      * Please click on your school
(If your school does not appear then  please select <a href=""> “Gitanjali.org School” </a>)
                    </div>

                    {this.state.schools.map( (school, i) => (
=======
    _renderCbseSchools = () => {
        if(this.state.cbse_schools.length > 0){
            return(
                <>
                    <div className="text-center border-pending" > 
                        <h2> CBSE Schools </h2>
                    </div>

                    {this.state.cbse_schools.map( (school, i) => (
>>>>>>> eb2008966bd6db688f6c7b5b28a84fda9f2232de
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

<<<<<<< HEAD

    _renderPendingSchools = () => {
        if(this.state.schools.length > 0){
=======
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
>>>>>>> eb2008966bd6db688f6c7b5b28a84fda9f2232de
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

