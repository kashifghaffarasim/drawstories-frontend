import React from 'react';
import './Header.css';

import LeftSide from './left-side';
import RightSide from './right-side';


class Story extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
             bg:[ {"img": require('./../assets/img/canvas-1.jpg'), is_active: true},
                  {"img": require('./../assets/img/canvas-2.jpg'), is_active: true},
                  {"img": require('./../assets/img/canvas-3.jpg'), is_active: true},
                  {"img": require('./../assets/img/canvas-4.jpg'), is_active: true},
                  {"img": require('./../assets/img/canvas-5.jpg'), is_active: true},
             ],
             images: [
                      {is_active: false, image: require('./../assets/img/01.png'), index: null},
                      {is_active: false, image: require('./../assets/img/02.png'), index: null},
                      {is_active: false, image: require('./../assets/img/03.png'), index: null},
                      {is_active: false, image: require('./../assets/img/04.png'), index: null},
                      {is_active: false, image: require('./../assets/img/05.png'), index: null},
             ],
             isLoaded: false,
             textArray: []
      }

  }

  _isActive = (index, imgIndex, type) => {

    if(type == 'unactive'){
      let isRemoved = false
      let images = this.state.images;
      for(var i=0; i < images.length; i++){
          if(images[i].index == index){
              images[i].index = null;
              images[i].is_active = false;
          }
      }


      this.setState({images: images, isRemoved: isRemoved})
    } else {
      let images = this.state.images;

      for(var i=0; i < images.length; i++){
          if(images[i].index == index){
            images[i].index = null;
            images[i].is_active = false
          }
      }

      if(!images[imgIndex].index){
        images[imgIndex].index = index
        images[imgIndex].is_active = true
      }
      this.setState({images: images, isRemoved: false})
    }


  }

  saveText = (index, text) =>{
    let item =  this.state.textArray
    if(text){
      if(item.length > 0){
        let isInsert = false
        for(var i=0; i < item.length; i++){
          if(item[i].index == index){
            item[i].text = text
            isInsert = true
          }
        }
        if(!isInsert){
          let hash = {index: index, text: text}
          item.push(hash)
        }


      } else {
        let hash = {index: index, text: text}
        item.push(hash)
      }

        console.log('here we are now 1')
        this.setState({ textArray: item})
      }
  }

  _submitForReview = () => {
    this.props.onSubmit(this.state.textArray)
  }

  render (){
    return (
        <>
          <div className="container top-margin">
          <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="h2"> Write Dog Story </h2>
              </div>
          </div>

              {this._renderContent()}
          </div>
        </>
       );
  }


  _renderContent = () => {
        return(
          <>
            <LeftSide  back={this.state.bg[0]}  is_active={this.state.bg[0].is_active} index={0} _isActive={(index, img, status) => this._isActive(index, img, status)} images={this.state.images} saveText={(index,text) => this.saveText(index, text)} isRemoved={this.state.isRemoved}/>
            <RightSide back ={this.state.bg[1]} is_active={this.state.bg[1].is_active} index={1} _isActive={(index, img, status) => this._isActive(index, img, status)} images={this.state.images} saveText={(index,text) => this.saveText(index, text)} isRemoved={this.state.isRemoved}/>
            <LeftSide  back={this.state.bg[2]}  is_active={this.state.bg[2].is_active} index={2} _isActive={(index, img, status) => this._isActive(index, img, status)} images={this.state.images} saveText={(index,text) => this.saveText(index, text)} isRemoved={this.state.isRemoved}/>
            <RightSide back ={this.state.bg[3]} is_active={this.state.bg[3].is_active} index={3} _isActive={(index, img, status) => this._isActive(index, img, status)} images={this.state.images} saveText={(index,text) => this.saveText(index, text)} isRemoved={this.state.isRemoved}/>
            <LeftSide  back={this.state.bg[4]}  is_active={this.state.bg[4].is_active} index={4} _isActive={(index, img, status) => this._isActive(index, img, status)} images={this.state.images} saveText={(index,text) => this.saveText(index, text)} isRemoved={this.state.isRemoved}/>
            <div className="row" style={{ margin: '30px'}}>
              <div className="col-md-12 text-right">
                <button className="btn btn-primary" style={{ width: '20%'}} onClick={() => this._submitForReview()}> Submit </button>
              </div>
            </div>
          </>
        )


  }

}

export default Story;
