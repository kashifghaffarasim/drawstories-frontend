import React from 'react';
import { withRouter} from "react-router-dom";
import YouTube from 'react-youtube';

import Header from './../shared/header';
import Footer from './../shared/footer';

class DemoVideo extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
        }
    }

    async componentDidMount() {
     
    }
      
    render (){
        const opts = {
            height: '500',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          };

        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                        <div className="container" style={{ padding: 20}}>
                            <div className="row"> 
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <div className="title-header text-center" style={{ margin: 20}}>
                                        <h2> Tutorial </h2>
                                    </div>
                                    <YouTube videoId="vr3VShtI0ps" opts={opts}  />
                                </div>
                            </div>
                        </div>
                     <Footer />
                </div>
          );
    }

}

  
export default withRouter(DemoVideo);

