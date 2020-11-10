import React from 'react';
import './Header.css';
const fabric = require('fabric').fabric;



class SketchField extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        action: true
      }
  }

  componentDidMount = () => {
      let { back , img} = this.props;

      let canvas = this._fc = new fabric.Canvas(this._canvas);

      if(img){
        this.addImg(img)
      }
      // canvas.on('object:selected', e => this.callEvent(e, this._onObjectRemoved));

      this.setBackgroundFromDataUrl(back.img)
      this._resize()

  }

  componentDidUpdate = (prevProps, prevState) => {
      if (this.state.parentWidth !== prevState.parentWidth
        || this.props.width !== prevProps.width
        || this.props.height !== prevProps.height) {

         this._resize()
        //this.draw();
      }
  }

  callEvent = (e, eventFunction) => {
      eventFunction(e)
  }

  addImg = (dataUrl, position, options = {}) => {
        let canvas = this._fc;
        //Start:  Top , left and right move process
        let leftMove = 0
        let rightMove = 400
        let topMove =  0
        //Start:  Top , left and right move process

        fabric.Image.fromURL(dataUrl, (oImg) => {
          let opts = {
            left: position.left,
            top: position.top,
            hasControls: false
          };

          Object.assign(opts, options);

          oImg.scale(0.7, 0.7);

          oImg.set({
              'left': opts.left,
              'top': opts.top,
              'selectable': false
          });

          // Start Movenmet

            // Start Top to Bottom
            function animateTop(){
                if(topMove === 160){
                  topMove = -50
                } else {
                  topMove = topMove + 10;
                }

               oImg.animate('top', topMove, {
                    duration: 1000,
                    onChange: canvas.renderAll.bind(canvas),
                    onComplete: function() {

                    }
                });
            }
            // End Top to Bottom

            let leftActive = false
            function animateLeft(){
              if(leftActive){
                leftMove = leftMove - 30
                if(leftMove == -30){
                  leftActive = false
                }
              } else {
                leftMove = leftMove + 30
                if(leftMove == 450){
                  leftActive = true
                }
              }
             oImg.animate('left', leftMove, {
                  duration: 1500,
                  onChange: canvas.renderAll.bind(canvas)
              });
            }

            function animateRandom(){
                  var randomX = Math.round(Math.random()* 200);
                  var randomY = Math.round(Math.random()* 160);

                    oImg.animate({left: randomX, top: randomY}, {
                       duration: 1000,
                       onChange: canvas.renderAll.bind(canvas),
                       easing: fabric.util.ease.easeOutExpo
                   })
             }

             let right = 420
             let isRight = true
            function animateRightLeft(){
                  if(isRight){
                    right = right - 30
                    if(right == -30){
                        isRight = false
                    }
                  } else {
                      right = right + 30
                      if(!isRight){
                        if(right == 360){
                            isRight = true
                        }
                      }
                  }
                  console.log(right)
                  oImg.animate('left', right, {
                       duration: 1500,
                       onChange: canvas.renderAll.bind(canvas),
                       onComplete: function() {

                       }
                   });
              }

              if(position.startPoint !== 0 ){
                if(position.startPoint == 1){
                  setInterval(animateRightLeft, 1000);
                } else if (position.startPoint == 2){
                  setInterval(animateRandom, 1000);
                } else if(position.startPoint == 3){
                  setInterval(animateLeft, 1000);
                } else if(position.startPoint == 4){
                  setInterval(animateTop, 1000)
                }
              }
              canvas.add(oImg);
         });
  };

  _resize = (e, canvasWidth = null, canvasHeight = null) => {
      if (e) e.preventDefault();

      let canvas = this._fc;
      const view = this.refs.view;
      const ratio = window.devicePixelRatio || 1;
      const width = (view.clientWidth * ratio) | 0;
      const height = (view.clientHeight * ratio) | 0;

      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.renderAll();
      canvas.calcOffset();
   };



 setBackgroundFromDataUrl = (dataUrl, options = {}) => {
    let canvas = this._fc;
    const view = this.refs.view;
    const ratio = window.devicePixelRatio || 1;
    const width = (view.clientWidth * ratio) | 0;
    const height = (view.clientHeight * ratio) | 0;

    let img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => canvas.setBackgroundImage(new fabric.Image(img),
      () => canvas.renderAll(), {
        scaleX:  width / img.width,
        scaleY: height / img.height
      });
    img.src = dataUrl
  };

  clear = (propertiesToInclude) => {
      this._fc.clear();
  };

  _onObjectRemoved = (back) => {
       let canvas = this._fc;
       this.setBackgroundFromDataUrl(back.img)
  };

  _removeObject = () => {
    let canvas = this._fc
    if(canvas._objects){
      canvas.remove(canvas._objects[0]);
    }
  }

  render (){
    const canvas = this.state ? (
			<canvas
				ref={(c) => this._canvas = c}
				width={this.state.width}
				height={this.state.height}
				style={{
					width: '100%',
					height: '100%',
				}} />
		) : null;
    return (
      <div className="box" ref="view" >
          {canvas}
      </div>
       );
  }

}

export default SketchField;
