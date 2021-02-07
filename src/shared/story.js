import React from 'react';
import { withRouter} from "react-router-dom";
import Header from './header';
import Footer from './footer';
import DogStroy from './dog';
import ZoeStroy from './zoe';

class Story extends React.Component  {

  constructor(props) {
      super(props);
    
  }

  _submitForReview = () => {
    // this.props.onSubmit(this.state.textArray)
    this.props.history.push({
      pathname: '/school',
    });

  }

  render (){
    const { type } = this.props;
    return ( 
        <div>
            <Header onSelect={(text) => this._menuSelect(text) }/>
              <div className="container top-margin">
                  {this._renderContent()}
              </div>
            <Footer />
        </div>
       );
  }

  _renderContent = () => {
    const { type } = this.props;
    if(type == "Zoe"){
      return(
        <>
          <ZoeStroy onSubmit={(text) => this.props.onSubmit(text)}/>
        </>
      )
    } else {
        return(
          <>
            <DogStroy onSubmit={(text) => this._submitForReview(text)}/>
          </>
        )
      }

  }

}

export default Story;
