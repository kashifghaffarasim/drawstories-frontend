
import React from 'react';
import { useRouteMatch , withRouter} from "react-router-dom";
import Header from './../shared/header';
import Footer from './../shared/footer';
import "./Pages.css";

class AboutUS extends React.Component  {

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
                                        <h2 className="ht"> About Us </h2>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-cont">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>
                                                Gitanjali.org is a non-profit initiative of SCOPE (part of Sachdeva Group of Institutions, a well known educational foundation) and powered by VRQUIN LLP (Leaders of Virtual Reality technology in India).     
                                            </p>
                                            <br />
                                            <p>
                                                <h4> Our story - </h4>
                                                Gitanjali.org is formed on a shared vision of SCOPE (part of Sachdeva Group of Institutions, a well known educational foundation) and VRQUIN LLP (Leaders of Virtual Reality technology in India) to improve the access to good quality education for all students in India and to use technology to create such solutions
                                            </p>
                                            <br />
                                            <p>
                                                <h4> The journey -  </h4>
                                                SCOPE (part of Sachdeva Group of Institutions, a well known educational foundation) has the wisdom of years of teaching and training in India. VRQUIN LLP is a young enthusiastic startup which leads the technology race in manufacturing and deployment of Virtual Reality devices. Both of these businesses have come together, to take up the challenge of educating students which has become difficult due to COVID. An e-learning software, which can be used remotely by all students in India, is the solution that this collaborative work is trying to create and promote. 
                                            </p>

                                            <br />
                                            <p>
                                                <h4> Empowering teachers - </h4>
                                                One of the aims of this software is also to empower teachers with the best set of e-learning tools possible. The future of education lies in elearning as it can effectively solve the various problems of long travel times of students in remote areas and also address the linguistic diversity of the country.
                                            </p>
                                                                                   
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

  
export default withRouter(AboutUS);

