import React, { useEffect } from 'react';
import SketchField from './SketchField';


class Detail extends React.Component  {

    constructor(props) {
      super(props);
        this.state = {
          zeoImages: [
              {is_active: false, image: require('./../assets/zoe/01.png'), index: null},
              {is_active: false, image: require('./../assets/zoe/02.png'), index: null},
              {is_active: false, image: require('./../assets/zoe/03.png'), index: null},
              {is_active: false, image: require('./../assets/zoe/04.png'), index: null},
              {is_active: false, image: require('./../assets/zoe/05.png'), index: null},
          ],
          dgimages: [
                   {is_active: false, image: require('./../assets/img/01.png'), index: null},
                   {is_active: false, image: require('./../assets/img/02.png'), index: null},
                   {is_active: false, image: require('./../assets/img/03.png'), index: null},
                   {is_active: false, image: require('./../assets/img/04.png'), index: null},
                   {is_active: false, image: require('./../assets/img/05.png'), index: null},
          ],
          dgbg: [ {"img": require('./../assets/img/canvas-1.jpg'), is_active: true}],
          zoebg: [ {"img": require('./../assets/zoe/canvas-1.jpg'), is_active: true}]
        }

   }

   componentDidMount(){
      let position = { top:  50, left: 130, startPoint: 0}
      let rand = Math.round( Math.random() * (4 - 0))

      if(this.props.type == 'Zoe'){
        this._sketch.addImg(this.state.zeoImages[rand].image , position)
      } else {
        this._sketch.addImg(this.state.dgimages[rand].image , position)
      }
   }

    render (){
      const { name } = this.props;
      return (
          <div className="row text-center top-mg" >
                <div className="col-md-12 text-left">
                  <h2 className="h2"> { name } </h2>
                </div>

              <div className="col-md-6 zero-left">
                {this._renderSketch()}
              </div>

              <div className="col-md-6 flex">
                  <div className="row" style={{ width: '100%'}}>
                    <div className="col-md-12">
                      <form>
                            <div className="form-group ">
                              <label for="exampleFormControlTextarea1"></label>
                              <textarea value={this.props.text} className="form-control bgs" placeholder="Write a Story" id="exampleFormControlTextarea1" rows="10" cols="12" ></textarea>
                            </div>
                        </form>
                    </div>
                  </div>
             </div>
          </div>
         );
    }

    _renderSketch = () => {
      const { type } = this.props;
      if(type == "Zoe"){
        return(
          <SketchField back={this.state.zoebg[0]}  ref={c => (this._sketch = c)} />
        )
      } else {
        return(
          <SketchField back={this.state.dgbg[0]}  ref={c => (this._sketch = c)} />
          )
      }
    }

   _renderImages = () => {
        let  images = this.state.images;
        return(
          <div className="col-md-12 flex">
            { images.map(function(img, i){
                  return(
                    <div className="zero img-box">
                        <img className="img-size" alt="Image"  src={img.image} />
                    </div>
                  )
                })
              }
          </div>
        )
  }


}

export default Detail;
