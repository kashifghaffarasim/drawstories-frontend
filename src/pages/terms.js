
import React from 'react';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from './../shared/header';
import Footer from './../shared/footer';
import "./Pages.css";

class Terms extends React.Component  {

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
                                        <h2 className="ht"> Terms & Condition  </h2>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-cont">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6> The use of this website of Gitanjali.org and is subject to the following Terms and Conditions:</h6>
                                            <p> 
                                                1.       Your use of the site constitutes acceptance of these Terms and Conditions.
                                            </p>

                                            <p> 
                                            2.       You agree to use this site only for lawful purposes, and in a manner which does not infringe the rights of Gitanjali.org or any third party (including but not limited to any Gitanjali.org sponsors or students).                                            </p>

                                            <p> 
                                            3.       Gitanjali.org shall in no event be liable for any damages including, without limitation, direct, indirect or consequential damages, whatsoever arising from or in connection with the use or loss of use of the website, or any content on the website.                                            </p>

                                            <p> 
                                            4.       Gitanjali.org can change these Terms and Conditions at any time by posting changes online under this section “Terms and Conditions”. Your continued use of this site after changes have been posted, constitutes your acceptance of the modified terms.                                            </p>

                                            <p> 
                                            5.       Gitanjali.org does not guarantee that the website’s facilities and functions will be free from error or interruption, or that the site or the server that makes it available to you are free of viruses or bugs, that defects will be corrected, or that the content on the website is accurate or complete.                                            </p>
                                           
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

  
export default withRouter(Terms);

