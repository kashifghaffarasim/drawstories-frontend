import React from 'react';
import './App.css';

import { Modal } from 'react-bootstrap';
import Header from './shared/header';
import Footer from './shared/footer';
import Story from './shared/story';
import Form from './shared/form';
import axios from 'axios';

import ListComponent from './shared/listcomponet';
import CategoryList from './shared/category/list';
import { useRouteMatch , withRouter} from "react-router-dom";

  

class WebApp extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          is_submit: false,
          text: "",
          array: [],
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
          isLoaded: false,
          name: null,
          isShow: false,
          value: "Dog"
        }
    }
  
    async componentDidMount() {
      this.props.history.push({
        pathname: '/school',
      });

      let a =  await fetch("https://sketch-story.herokuapp.com/api/v1/stories")
      const data = await a.json();
      if(data){
        this.setState({array: data.stories})
      }
        let selName = this.state.nameArray[Math.floor(Math.random() * this.state.nameArray.length)];
        this.setState({ name: selName})
    }
  
    onSubmit = (textArray) => {
  
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
          this.setState({ is_submit: true, text: content})
        }
    }
  
    onSave = async(email, name) => {
        let selName = this.state.nameArray[Math.floor(Math.random() * this.state.nameArray.length)];
        let array = this.state.array;
        if(!name){
          name = selName
        }
  
        this.setState({ is_submit: false, isShow: true})
        array.unshift({ name: name, text: this.state.text, type: this.state.value})
        const  requestOptions = {username: name, content: this.state.text, email: this.state.email, category: this.state.value}
  
        const response =  await axios.post("https://sketch-story.herokuapp.com/api/v1/stories", requestOptions)
        if(response.data){
  
        }
  
    }
  
    _menuSelect = (text) => {
       this.setState({value: text})
    } 
  
  
    render (){
        return (
            <div className="App">
                <Header onSelect={(text) => this._menuSelect(text) }/>
                  {this._renderView()}
                <Footer />
            </div>
          );
    }
  
  
    _renderView = () => {
  
      if(this.state.value == 'more'){
        return(
          <>
            <CategoryList onSelect={(text) => this._menuSelect(text)} />
          </>
        )
      } else {
        let content = null
        if(this.state.is_submit){
          content =   <Form save={(name, email) => this.onSave(name, email) } name={this.state.name}/>
        } else {
          content =   <Story  onSubmit={(text) => this.onSubmit(text)} type={this.state.value}/>
        }
  
        return(
          <>
              {this._renderContent(content)}
              {this._toastAlert()}
              <ListComponent array={this.state.array} />
          </>
        )
      }
    }
  
    _renderContent = (content) => {
      if(this.state.is_submit){
        return(
          <>
            {this._formModal(content)}
          </>
        )
      } else {
        return(
          <>
            {content}
          </>
        )
      }
    }
  
     _formModal = (content) => {
       return(
       <>
            <Modal show={this.state.is_submit} onHide={() => this.handleClose()} dialogClassName="main1">
              <Modal.Header closeButton className="color2">   </Modal.Header>
              <Modal.Body className="color2 top-body">
                    {content}
              </Modal.Body>
            </Modal>
        </>
      )
     }
  
    _toastAlert = () => {
      let message = " That's a great story!!"
      let msg2 = "Thank you very much for writting such a nice story"
      if(this.state.isShow){
        return(
          <>
               <Modal show={this.state.isShow} onHide={() => this.handleClose()} dialogClassName="main">
                 <Modal.Header closeButton className="color">   </Modal.Header>
                 <Modal.Body className="color">
                        <div className= "text-center custom1">
                           { message }
                        </div>
                        <div className= "text-center custom1">
                           { msg2 }
                        </div>
                 </Modal.Body>
               </Modal>
          </>
        )
      }
    }
  
    handleClose = () =>{
      this.setState({ isShow: false, is_submit: false})
    }
  
  }
  
  export default withRouter(WebApp);
  