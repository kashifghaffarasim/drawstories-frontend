
import React from 'react';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from './../shared/header';
import Footer from './../shared/footer';
import "./Pages.css";

class Volunteer extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            img1: require('./../assets/img/v1.jpeg'),
            img2: require('./../assets/img/v2.jpeg'),
            img3: require('./../assets/img/v3.jpg'),
            img4: require('./../assets/img/v4.jpg'),
            img5: require('./../assets/img/v5.jpg'),
            img6: require('./../assets/img/v6.jpg'),
            img7: require('./../assets/img/v7.jpg'),
            img8: require('./../assets/img/v8.jpg'),

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
                                        <h2 className="ht"> Volunteer Activities </h2>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-cont">
                                    <div className="row">
                                        
                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img1} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img2} className="img img-responsive img-up" />
                                        </div>
                                        
                                        <div className="col-md-3 text-center">
                                             <img src={this.state.img3} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img4} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img5} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img6} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img7} className="img img-responsive img-up" />
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={this.state.img8} className="img img-responsive img-up" />
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

  
export default withRouter(Volunteer);

