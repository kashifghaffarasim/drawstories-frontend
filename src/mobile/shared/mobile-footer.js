import React from 'react';
import './Header.css'

class MobileFooter extends React.Component  {

  constructor(props) {
      super(props);
      this.state = { }
  }


  render (){
    return (
        <div className="mb-foot" style={{ width: '100%'}}>
            <div className="row text-center">
              <div className="col-md-12">
                <p></p>
              </div>
            </div>
        </div>
       );
  }

}

export default MobileFooter;
