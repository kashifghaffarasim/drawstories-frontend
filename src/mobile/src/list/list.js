import React from 'react';
import './List.css'
import Detail from './detail';

class List extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            zeoImages: [
                {is_active: false, image: require('./../../../assets/zoe/01.png'), index: null},
                {is_active: false, image: require('./../../../assets/zoe/02.png'), index: null},
                {is_active: false, image: require('./../../../assets/zoe/03.png'), index: null},
                {is_active: false, image: require('./../../../assets/zoe/04.png'), index: null},
                {is_active: false, image: require('./../../../assets/zoe/05.png'), index: null},
            ],
            dgimages: [
                     {is_active: false, image: require('./../../../assets/img/01.png'), index: null},
                     {is_active: false, image: require('./../../../assets/img/02.png'), index: null},
                     {is_active: false, image: require('./../../../assets/img/03.png'), index: null},
                     {is_active: false, image: require('./../../../assets/img/04.png'), index: null},
                     {is_active: false, image: require('./../../../assets/img/05.png'), index: null},
            ],
            dgbg: [ {"img": require('./../../../assets/img/canvas-1.jpg'), is_active: true}],
            zoebg: [ {"img": require('./../../../assets/zoe/canvas-1.jpg'), is_active: true}]
        }
    }
  
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render (){
    
        const { list } = this.props;
        let content = []
        for(var i =0 ; i < list.length; i++){
            if(list[i]){
                content.push(<Detail name={list[i].name} text={list[i].text} type={list[i].type}/>)
            }
        }
        
      return (
          <div>
              <div class="col-md-12  text-center">
                    <h6> View stories here </h6>
              </div>
               <div className="col-md-12 mb-bottom text-center" style={{ marginBottom: 100, width: '100%'}}>
                     {content}
                </div>
          </div>
         
         );
    }


}

export default List;