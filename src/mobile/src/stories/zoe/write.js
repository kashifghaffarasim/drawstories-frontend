
import React, { useEffect } from 'react';
import SketchField from './SketchField';
import './zoe.css'


class Write extends React.Component  {

  constructor(props) {
    super(props);
      this.state = {
        position: {left: -100, right: 0, top: 0, bottom: 0},
        img: null,
        is_selected: false
      }
  }

   componentDidMount(){

   }

   _removedItem = () => {
     this.props._isActive(this.props.index, 'remove')
   }


  render (){
    const { back } = this.props;
    return (
        <div className="top-mg" style={{ width: '100%', marginBottom: 40, marginTop: 40 }}>

            <div className="title">
              {this._renderTitle()}
            </div>
            <div className="col-md-12 flex">
              {this._renderImages()}
            </div>

            <div  style={{ alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center'}}>
                <SketchField back={back} img={this.state.img}   ref={c => (this._sketch = c)}/>
            </div>

            <div style={{ width: '100%', marginTop: -10}}>
                    <form>
                          <div className="form-group ">
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea  onChange={(evt) => this.inputText(evt)} className="form-control mb-bgs" placeholder="Write a Story" id="exampleFormControlTextarea1" rows="4" cols="12"></textarea>
                          </div>
                      </form>
            </div>
        </div>
       );
  }

  _renderTitle = () => {
    const { index } = this.props;
    let title = "Lets start writing the story here"
    if(index === 1 ){
       title = "And lets add some more here"
    } else if(index ===  2){
       title = "And let us add some more"
    } else if(index ===  3){
       title = "Some more here"
    } else if(index ===  4){
       title = "And this is the final one"
    } else {
       title = "Lets start writing the story here"
    }
    return(
      <h2 class="font-size">
        {title}
      </h2>
    ) 
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
               let position = { top:  50, left: 100, startPoint: i}
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
    <div className="flex mb-top">
      { images.map(function(img, i){
        if(img.is_active){
           return(
             <div className="zero mb-img-box" key={i}>
                 <img className="mb-img-size imgSelected" alt="Image" draggable="false"  src={img.image}  onClick={() => imageClick(i)} />
             </div>
           )
         } else {
           return(
             <div className="zero mb-img-box" key={i}>
                 <img className="mb-img-size" alt="Image" draggable="false"  src={img.image}  onClick={() => imageClick(i)} />
             </div>
           )
         }
          })
        }
    </div>
  )

}

}

export default Write;
