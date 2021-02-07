import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter} from "react-router-dom";
import Header from './../shared/header';

import "./Header.css";
import URL from './../utils';


class SchoolSection extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            classSections: []
        }
    }


    async componentDidMount() {
   
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let id = this.props.match.params.id
            let urla = URL + "/v1/class_sections?id=" + id;
            let a =  await fetch(urla)
            const data = await a.json();
            if(data){
                this.setState({ classSections: data.class_sections})
            }
        }
    }
      
    _menuSelect = (text) => {

    }

    _getClasses = async(sec_id) => {
        
        localStorage.setItem('class_section_id', sec_id);
        let path =  '/school/classes/sections/' + sec_id + '/book';
        this.props.history.push({
            pathname: path,
            params: {id:  sec_id}
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
        if(this.state.classSections.length > 0){
            return(
                <>
                    {this.state.classSections.map( (cls, i) => (
                         <div style={{  marginTop: 30}} key={i}>
                                <Button onClick={() => this._getClasses(cls.id)} className="outlineColor" style={{ height: 80, fontSize: 20}}  variant="primary" block >
                                   {cls.name}
                                </Button>
                            </div>
                    )
                    )} 
                </>
            )
        }
    }
   

}

  
export default withRouter(SchoolSection);

