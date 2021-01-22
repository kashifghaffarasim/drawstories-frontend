import React, { useEffect } from 'react';
import SketchField from './SketchField';
import Detail from './detail';


class ListComponent extends React.Component  {

    constructor(props) {
      super(props);
        this.state = {
        }
   }

   componentDidMount(){

   }

    render (){
      const { array } = this.props;
      let content = []
      for(var i =0 ; i < array.length; i++){
        if(array[i]){
          content.push(<Detail name={array[i].name} text={array[i].text} type={array[i].type}/>)
        }
      }
      return (
        <div className="container">
          <hr />
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="h2"> Top Stories </h2>
              </div>
            </div>
            <>
              {content}
            </>
        </div>
         );
    }

}

export default ListComponent;
