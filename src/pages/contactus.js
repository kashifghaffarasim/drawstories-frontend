
import React from 'react';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from './../shared/header';
import Footer from './../shared/footer';
import "./Pages.css";

class ContactUs extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
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
                                        <h2 className="ht"> Contact Us </h2>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-cont">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6> Contact us regarding your queries?</h6>
                                            <p> If we are unable to receive your call, we will call you back soon.</p>
                                            <h6>
                                            The best way to reach us is via Email: 
                                            <a href="mailto:info@gitanjali.org" 
                                                style={{ color: "blue"}}> info@gitanjali.org  </a>
                                            </h6>

                                            <p>
                                                PH: 1800-xxx-xxxx (option x) (to be updated soon)
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <p> 
                                                <span style={{ fontWeight: 800}}>All other queries, </span> the best way to reach us is via Email: <a href="mailto:info@gitanjali.org" 
                                                style={{ color: "blue"}}> info@gitanjali.org  </a>
                                            </p>
                                            <div> 
                                                <p>
                                                    <h6> Our Offices:</h6>
                                                </p>
                                                <div>
                                                    <h6> Office 1: </h6>
                                                    <p style={{ marginBottom: 4}}> 
                                                        VRQUIN LLP,
                                                        #218,3rd Floor,27th
                                                        Main, 21st Cross Rd, Opposite Andhra Bank, Sector 2, HSR Layout, Bengaluru, Karnataka
                                                        560102, India.                                      
                                                    </p>
                                                    <p>
                                                        Ph: (to be updated soon)
                                                    </p>
                                                    
                                                </div>

                                                <div>
                                                    <h6> Office 2: </h6>
                                                    <p style={{ marginBottom: 4}}>
                                                        SCOPE <br>
                                                        </br>
                                                        (Part of Sachdeva Group of Institutions)<br>
                                                        </br>
                                                        B 85 defence colony, New Delhi 110024, India.
                                                    </p>
                                                    <p>
                                                        Ph: 01125848070
                                                    </p>
                                                </div>
                                            </div>
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

  
export default withRouter(ContactUs);

