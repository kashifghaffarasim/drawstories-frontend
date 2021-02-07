import React from 'react';
import './story.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import axios from 'axios';


import Form from './form';

import DogStroy from './dog/write-dog';
import ZoeStroy from './zoe/write-zoe';


class Story extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        index: 0,
        isOpen: false,
        isSubmit: false,
        isOpenDog: false,
        nameArray: ['Terrific Twain', 'Dauntless Dickens',
                    'Sensible Shakespeare', 'Awesome Orwell', 'Captivating Cervantes',
                    'Enthusiastic Eliot', 'Wonderful Wilde',
                    'Cute Chekov', 'Tiny Tagore', 'Majestic Manto', 
                    'Soulful Soyinka', 'Knowledgeable Kawabata',
                    'Hearty Hemingway', 'Humorous Hugo', 'Tantalizing Tolkien', 'Accurate Austen', 'Amazing Allen Poe', 'Sarcastic Steinbeck',
                    'Fiery Fitzgerald', 'Lexical Lewis', 'Natty Nietzsche', 'Personable Plato', 'Daredevil Doyle', 'Gorgeous Grimm', 'Ardent Andersen',
                    'Dazzling Dahl', 'Sassy Stevenson', 'Majestic Melville', 'Farcical Faulkner', 'Warm-hearted Wells',
                    'Kind Kafka', 'Benevolent Bradbury', 'Humorous Hesse', 'Waxy Woolf', 'Galland Goethe', 'Sassy Seuss',
                    'Brainy Borges','Suave Swift','Delightful Dumas','Articulate Assimov','Famous Frost',
                    'Gesticulating Gogol','Challenging Conrad','Magnetic Milton','Sententious Salinger',
                    'Phenomenal Pushkin', 'Smart Stoker'],
        curntOpt: null

      }
  }

  componentDidMount(){
      let selName = this.state.nameArray[Math.floor(Math.random() * this.state.nameArray.length)];
      this.setState({ name: selName})
  }


  _openModal = () => {
    const { type } = this.props;
    if(type === 'Zoe'){
      this.setState({isOpen: true})
    } else {
      this.setState({isOpenDog: true})
    }
  }

  _handleClose = () => {
     this.setState({isOpen: false, isSubmit: false, isOpenDog: false})
  }


  _onSubmit = (textArray) => {
    let content =  null
    for(let i =0 ; i < textArray.length; i++){
        if(textArray[i]){
          if(content){
            content = content + "\n" + textArray[i].text
          } else {
            content = textArray[i].text
          }
        }
    }
    if(content){
      this.setState({ isSubmit: true, text: content})
    }
  }

  _onSave = async(email, name) => {
      const { type } = this.props;
   
      let selName = this.state.nameArray[Math.floor(Math.random() * this.state.nameArray.length)];
      let array = this.state.array;
      if(!name){
        name = selName
      }
      this.setState({ isSubmit: false})
      let opt = { name: name, text: this.state.text, type: type}
      this.props.saveStory(opt)
      const  requestOptions = {username: name, content: this.state.text, email: this.state.email, category: type}
      const response =  await axios.post("https://sketch-story.herokuapp.com/api/v1/stories", requestOptions)
      if(response.data){

      }
  }

  render (){
    const { type } = this.props;
    return ( 
        <>
          <div className="container top-margin">
              {this._renderContent()}
              {this._renderModal()}
              {this._renderDogModal()}
              {this._renderForm()}
          </div>
        </>
       );
  }


  _renderContent = () => {
    const { type } = this.props;
    if(type == "Zoe"){
      return(
        <>
            {this._renderTop("Write Zoe's fluffiest bunnies Story")}
            <div className="col-md-12">
               <ZoeStroy  onSubmit={(text) => this._onSubmit(text)}/>
            </div>
        </>
      )
    } else {
        return(
          <>
              {this._renderTop('Write Dog Story')}
              <div className="col-md-12">
                <DogStroy  onSubmit={(text) => this._onSubmit(text)}/>
              </div>
          </>
        )
      }

  }


  _renderTop = (title) => {
      return(
          <div className="row " style={{ paddingLeft: 10, paddingRight: 10}}>
              <div style={{ width: '25%'}} > 
                <div className="half">
                    <Button className="" variant="primary" onClick={() => this.props.goHome()}> Back </Button>
                </div>
              </div>
              <div style={{ width: '50%'}} > 
                <div className="text-center" style={{ marginTop: 10}}>
                  <h6> {title} </h6>
                </div>
              </div>
              <div style={{ width: '25%'}} > 
                <div className="half-right text-right">
                    <Button className="" variant="danger" onClick={() => this._openModal()}>  Credits  </Button>
                </div>
              </div>
          </div>
      )
  }

  _renderModal = () => {
      return(
        <>
            <Modal show={this.state.isOpen} onHide={() => this._handleClose()} dialogClassName="main1">
                <Modal.Header closeButton className="color2">   </Modal.Header>
                <Modal.Body className="color2 top-body" style={{ borderRadius: 3}}>
                      <div className="row">

                    
                          <div className="col-md-12 text-center">
                            <h3 style={{ color: '#fff'}}> Artist Name: <span style={{ marginLeft: 20}}>  Zoe C </span> </h3> 
                          </div>

                          <div className="col-md-12 text-center" style={{ marginTop: 40, marginBottom: 10}}>
                            <button className="btn btn-danger" style={{ width: '40%'}} onClick={() => this._openVist('https://zoecontrerasbeary.wixsite.com/mysite-4')}> Visit US </button>
                          </div>
                          <div className="col-md-12 text-center" style={{ marginTop: 10, marginBottom: 30}}>
                            <button className="btn btn-primary" style={{ width: '40%'}} onClick={() => this._openVist('https://www.instagram.com/zoezoe94/')}> Instagram </button>
                          </div>

                      </div>
                  
                </Modal.Body>
            </Modal>
        </>
      )
    
  }

  _renderDogModal = () => {
    return(
      <>
          <Modal show={this.state.isOpenDog} onHide={() => this._handleClose()} dialogClassName="main1">
              <Modal.Header closeButton className="color2">   </Modal.Header>
              <Modal.Body className="color2 top-body" style={{ borderRadius: 3}}>
                    <div className="row">

                  
                        <div className="col-md-12 text-center">
                          <h3 style={{ color: '#fff'}}> Artist Name: <span style={{ marginLeft: 20}}> Tejal Mistry </span> </h3> 
                        </div>

                        <div className="col-md-12 text-center" style={{ marginTop: 40, marginBottom: 10}}>
                          <button className="btn btn-danger" style={{ width: '40%'}} onClick={() => this._openVist('http://ttejalmistry.com/')}> Visit US </button>
                        </div>
                    </div>
              </Modal.Body>
          </Modal>
      </>
    )
  }

  _renderForm = () => {
    if(this.state.isSubmit){
      return(
          <>

           <Modal show={this.state.isSubmit} onHide={() => this.handleClose()} dialogClassName="main1">
              <Modal.Header closeButton className="color2">   </Modal.Header>
              <Modal.Body className="color2 top-body">
                 <Form save={(name, email) => this._onSave(name, email) } name={this.state.name}/>
              </Modal.Body>
            </Modal>
          
          </>
      )
    }
  }

  _openVist = (link) => {
    window.open(link, "_blank")
  }

}

export default Story;
