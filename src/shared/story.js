import React from 'react';
import './Header.css';

import DogStroy from './dog';
import ZoeStroy from './zoe';



class Story extends React.Component  {

  constructor(props) {
      super(props);
    
  }


  _submitForReview = () => {
    this.props.onSubmit(this.state.textArray)
  }

  render (){
    const { type } = this.props;
    return ( 
        <>
          <div className="container top-margin">
              {this._renderContent()}
          </div>
        </>
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
            <DogStroy onSubmit={(text) => this.props.onSubmit(text)}/>
          </>
        )
      }

  }

}

export default Story;
