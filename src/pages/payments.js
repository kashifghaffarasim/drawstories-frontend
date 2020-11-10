
import React from 'react';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from './../shared/header';
import Footer from './../shared/footer';
import "./Pages.css";

class Payment extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            donate: require('./../assets/img/donate.gif')
        }
    }


    async componentDidMount() {
      
    }
      
    

    render (){
        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                    <div className="container"> 
                            <div className="row top-margin">
                                <div>
                                    <div className="btm-border"> 
                                        <h2 className="ht"> Donate </h2>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-cont">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p> 
                                            Gitanjali.org is India's first non-profit website which focusses on eLearning for all students free of charge. Please contact us for details about donations - <a style={{ color: 'blue'}}> admin@gitanjali.org </a>
                                            </p>
                                            <br />
                                            <br />
                                            <br />
                                        </div>

                                        <div className="col-md-6 text-center">
                                        <img src={this.state.donate} />
                                        </div>

                                        <div className="col-md-6 text-center">
                                            <img src={this.state.donate} />
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                    </div>
                    <Footer />
                </div>
          );
    }


}

  
export default withRouter(Payment);

