import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withRouter} from "react-router-dom";

import Header from './../shared/header';

import "./Header.css";
import URL from './../utils';


class SchoolClass extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            listClasses: []
        }
    }


    async componentDidMount() {
   
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let id = this.props.match.params.id
            let urla = URL + "/v1/school_classes?id=" + id;
            let a =  await fetch(urla)
            const data = await a.json();
            if(data){
                this.setState({ listClasses: data.school_classes})
            }
        }
    }
      
    _menuSelect = (text) => {

    }

    _getClasses = async(class_id) => {
        let path =  '/school/classes/' + class_id + '/sections';
        this.props.history.push({
            pathname: path,
            params: {id:  class_id}
        });
    }

    render (){
        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                    <div className="container">
                     <div className="row">
                         <div className="col-md-4"></div>
                         <div className="col-md-4 text-center">
                            {this._renderClass()}
                         </div>

                         <div className="col-md-4"></div>
                     </div>
                    </div>
                    <br />
                </div>
          );
    }

    _renderClass = () => {
        if(this.state.listClasses.length > 0){
            return(
                <>
                    {this.state.listClasses.map( (cls, i) => {
                            return (
                                    <div style={{  marginTop: 30}} key={i}>
                                            <Button onClick={() => this._getClasses(cls.id)} className="outlineColor" style={{ height: 80, fontSize: 20}}  variant="primary" block >
                                            {cls.name}
                                            </Button>
                                    </div>
                                )
                      }
                    )} 
                </>
            )
        }
    }
   

}

  
export default withRouter(SchoolClass);

