import React, { useEffect } from 'react';
import SketchField from './SketchField';
import './Header.css'


class LeftSide extends React.Component  {

    constructor(props) {
      super(props);
        this.state = {
          position: {left: -100, right: 50, top: 0, bottom: 0},
          img: null,
          is_selected: false,
          text: null
        }

   }

   componentDidMount(){

   }

   _removedItem = () => {
     this.props._isActive(this.props.index, 'remove')
   }

    render (){
      const { back , isRemoved} = this.props;

      return (
          <div className="row text-center top-mg">

              <div className="col-md-6 zero-left">
                  <SketchField back={back} img={this.state.img} ref={c => (this._sketch = c)} onRemoved = {() => this._removedItem()}/>
              </div>

              <div className="col-md-6 flex">
                  <div className="row" style={{ width: '100%'}}>
                    <div className="col-md-12">
                        {this._renderImages()}
                    </div>

                    <div className="col-md-12">
                      <form>
                            <div className="form-group ">
                              <label for="exampleFormControlTextarea1"></label>
                              <textarea onChange={(evt) => this.inputText(evt)} className="form-control bgs" placeholder="Write a Story" id="exampleFormControlTextarea1" rows="6" cols="12" ></textarea>
                            </div>
                        </form>
                      </div>
                    </div>
              </div>

          </div>
         );
    }

    inputText = (event) => {
      this.props.saveText(this.props.index, event.target.value)
    }


   _renderImages = () => {
        let  images = this.props.images;
        const imageClick = (i) => {
            let img = this.props.images[i]
            if(!img.is_active){
                this._sketch.clear()
                this._sketch._onObjectRemoved(this.props.back)

                if(img.image){
                     this.setState({img: img.image, index: i})
                     let position = { top:  50, left: 130, startPoint: i}
                     this._sketch.addImg(img.image, position)
                     this.props._isActive(this.props.index, i, 'active')
                  }
           } else {

              for(var j=0; j < images.length; j++){
                  if(this.props.index == img.index){
                      if(images[i].is_active){
                        this._sketch._removeObject()
                        this.props._isActive(this.props.index, i, 'unactive')
                      }
                  }
              }

            }

        }

    return(
      <div className="col-md-12 flex">
        { images.map(function(img, i){
             if(img.is_active){
                return(
                  <div className="zero img-box" key={i}>
                      <img className="img-size imgSelected" alt="Image" draggable="false"  src={img.image}  onClick={() => imageClick(i)} />
                  </div>
                )
              } else {
                return(
                  <div className="zero img-box" key={i}>
                      <img className="img-size" alt="Image" draggable="false"  src={img.image}  onClick={() => imageClick(i)} />
                  </div>
                )
              }
            })
          }
      </div>
    )
  }



}

export default LeftSide;
