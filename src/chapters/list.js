import React from 'react';
import {Form , Button, Modal} from 'react-bootstrap';


import Header from './../shared/header';
import ReactWebMediaPlayer from 'react-web-media-player';
import ReactAudioPlayer from 'react-audio-player';

import URL from '../utils';


class Chapter extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          name: null,
          chappter: false,
          img: require('./../assets/img/canvas-1.jpg'),
          audio: null,
          chappters: [],
          files: [],
          openForm: true,
          fullname: "",
          email: "",
          phone: "",
          answers: [],
          classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"]
        }
    }


    async componentDidMount() {
        this.setState({isLoading: true})
    
        // Start: Getting All Chapters Data 
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let url = URL + "/v1/chapters?id=" + this.props.match.params.id
            let chapper = await fetch(url)
            const ch_data = await chapper.json()
            if(ch_data){
                console.log(ch_data)
                this.setState({isLoading: false, chappters: ch_data.chapters})   
            }
        } else {
            this.setState({isLoading: false})
        }
        // End: Getting All Chapters Data 
    }
      
    _menuSelect = (text) => {

    }

    _onPress = async(id, index, name) => {

            if(this.state.chappters[index]){
                let files = this.state.chappters[index].files;
                let url = URL +  "/v1/sections?id=" + id;
                // Start: Getting Sections of Contents
                let a =  await fetch(url)
                const data = await a.json();
                if(data){
                    let text  = ""
                    if(data.sections){
                        for(let i = 0; i < data.sections.length; i++){
                            text = text + "\n" + data.sections[i].text
                        }
                    }
                    this.setState({ chappter: true, text: text,  answers: [], chap: this.state.chappters[index], 
                            name: name, files: files, questions: data.questions})
                }
            }
            // End: Getting Section of Contents
    }

    onHandleClose = () => {
        this.setState({submit: false})
        this.props.history.push({
            pathname: '/school',
        });
    }

    handleSubmit=(event) => {
      
        event.preventDefault();
        if(this.state.fullname && this.state.email && this.state.phone){
            let user = { name: this.state.fullname, email: this.state.email, phone: this.state.phone}
            let url = URL + 'v1/answers';
          

            let school_id = localStorage.getItem('school_id');
            let class_section_id = localStorage.getItem('class_section_id')
            console.log(school_id)
            console.log(class_section_id)
            
            let opts = {user: user, school_id: school_id, section_id: class_section_id, answers: this.state.answers}
         
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(opts)
            };
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

            this.setState({isFormSubmit: true })
            
            event.preventDefault();
        }
        event.preventDefault();
    }
    

    render (){
        return (
                <div>
                    <Header onSelect={(text) => this._menuSelect(text) }/>
                        {this._renderContent()}
                </div>
          );
    }

    _renderContent = () => {
        if(this.state.chappter){
            return(
                <>
                    <div className="container">
                        <div className="col-md-12 text-center">
                           {this._renderTitle(this.state.name)}
                        </div>
                    </div>

                    {this._renderAnswers()}
                    {this._renderPopup()}
                </>
            )
        } else {
            if(this.state.chappters && this.state.chappters.length > 0){
                return(
                    <>
                        <div  className="container" style={{ height: 400, marginTop: 40}}>
                            {this._renderLoader()}
                            <div className="text-center">
                                
                                {this.state.chappters.map( (chap, i) => (
                                    <div className="row" key={chap.id} style={{ marginBottom: 20}}>
                                        <div className="col-md-4">  </div>
                                        <div className="col-md-4"> 
                                            <Button className="outlineColor" onClick={() => this._onPress(chap.id, i, chap.name)} variant="outline-primary" block >
                                                {chap.name}
                                            </Button>
                                        </div>
                                        <div className="col-md-4">  </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            } else {
                return(
                    <>
                        <div style={{ height: 500 }}> 
                            <p>  </p>
                        </div>
                    </>
                )
            }
        }
    }

    _renderLoader = () => {
        if(this.state.isLoading){
            return(
                <>
                   Loading
                </>
            )
        }
    }


    _renderTitle = (text) => {
        return(
            <>
                 <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 text-center" style={{ marginTop: 50, paddingLeft: 0, paddingRight: 0}}>
                            <h2> {this.state.name} </h2>

                            <div style={{ width: '100%'}}>
                                <div  style={{ width: '100%'}}>
                                    <div  style={{ width: '100%'}}>
                                         <form>
                                            <div className="form-group ">
                                                <label ></label>
                                                <textarea  value={this.state.text} className="form-control bgs" readOnly  rows="18"  ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                          {this._renderAudio()}
                    </div>
                </div>
            </>
        )
    }

    _renderAudio = () => {
        if(this.state.files && this.state.files.length > 0 ){
            return(
                <div className="col-md-12 text-center" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="row text-center"> 
                    { this.state.files.map( (file, index) => {
                             let media =  null
                            try {
                                
                                    if (process.env.NODE_ENV !== 'production') {
                                        media =   require('/home/kk/projects/React/websites/drawstories_files/' + file.board_name + "/" + file.clsname + "/" + file.chp_folder + "/" + file.language + "/" +  file.voice_position + "/" + file.file_name)
                                        console.log('development')
                                    } else if(process.env.NODE_ENV == 'production'){
                                        console.log('production')
                                    }

                               
                            } catch(err){
                                
                            }
                            return(
                                    <div className="col-md-12 text-center" key={file.id}>
                                        <div className="audio-box text-center">
                                            <div className="box-title">
                                                <h4 className="box-title"> Audio From: {file.title}</h4>
                                            </div>

                                            <div className="lang">
                                                {file.language}
                                            </div>

                                            <div className="audio-file">
                                                <ReactAudioPlayer
                                                    src={media}
                                                    controls
                                                />
                                            </div>

                                            <div className="description">
                                                {file.description}
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    )}
                    </div>
                </div>
            )
        } 
    }

    _renderAnswers = () => {
          if(this.state.questions){
            return(
                <>
                    <div className="container tow-boder" >
                        <div className="row"> 
                            <div className="col-md-12 text-center">
                            <h2> Question and Answers </h2> 
                            </div>
                        </div>

                        {this.state.questions.map( (qes, i) => (
                            <div className="row" key={i}> 
                                <div className="col-md-12 text-center">
                                    <h4> {qes.question} </h4>
                                </div>

                                <div className="col-md-12">
                                    <form>
                                        <div className="form-group ">
                                            <label ></label>
                                            <textarea placeholder="Type your answer" onChange={(text) => this._studendAnswers(text, i)} className="form-control bgs"  rows="4" cols="24" ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ))}

                        <div className="row"> 
                            <div className="col-md-9"></div>
                            <div className="col-md-3 text-right">
                                <Button className="outlineColor" onClick={() => this._saveItem()}  variant="primary">Submit</Button>
                            </div>
                        </div>

                    
                    </div>
                </>
            )
        }

    }

    _renderPopup = () => {
   
        if(this.state.submit) {
            return(
                <>
                    {this._renderModalContent()}  
                </>
            )
        }
    }


    _renderModalContent = () => {
        if(this.state.isFormSubmit){
            return(
                <Modal show={this.state.submit} onHide={() => this.onHandleClose()} dialogClassName="main">
                        <Modal.Header closeButton className="color">   </Modal.Header>
                            <Modal.Body className="color">
                                    <div className= "text-center custom1">
                                        Thank you, your answers have been submitted to the database. Your answers will be sent to the teacher assigned for this course, at the end of the day.
                                    </div>
                                    <div className= "text-center custom1">
                                    
                                    </div>
                            </Modal.Body>
                </Modal>
            )
        } else {
            return(
                <Modal show={this.state.submit} onHide={() => this.onHandleClose()} dialogClassName="main">
                    <Modal.Header closeButton className="color" >   </Modal.Header>
                    <Modal.Body className="color">
                        <div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <Form  onSubmit={(event)=> this.handleSubmit(event)}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="white">Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" value={this.state.fullname} require="true"  onChange={(text) => this._fullName(text)}/>
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="white">Guardian Email</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Guardian Email (Gmail Only)" value={this.state.email} require="true"  onChange={(text) => this._email(text)}/>
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="white"> Guardian Phone Number </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Phone Number" value={this.state.phone} require="true"  onChange={(text) => this._phone(text)}/>
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Form.Group>

                                        <div className="col-md-12 text-right" style={{  marginBottom: 26, marginTop: 26}}>
                                            <Button variant="primary" type="submit" style={{ width: '30%'}} >
                                                Save
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )
        }
    }
 
   
    _studendAnswers = (text, index) => {
        let answers = this.state.answers;

        if(this.state.chappters[index]){
            let chap_id = null
            if(this.state.chap){
                chap_id = this.state.chap.id
            }
            let ques_id = this.state.questions[index].id
            let answer =  text.target.value
            let hash = {answer: answer, chapter_id: chap_id, question_id: ques_id}
            if(answers.length == 0){
                answers.push(hash)
            } else {
                let find = false 
                for(var i = 0;  i < answers.length ; i++){
                  
                    if(answers[i]["question_id"]  == ques_id){
                        find = true
                        answers[i].answer = answer
                    } 
                }

                if(find){
                } else {
                    answers.push(hash)
                }
            }
          
        }
        this.setState({answers: answers})
    }

    _saveItem = () => {
        console.log('ssssssssssssssssss heres')
        this.setState({ submit: true})
    }

    _fullName = (event) => {
        this.setState({ fullname: event.target.value})
    }

    _email = (event) => {
        this.setState({ email: event.target.value})
    }

    _phone = (event) => {
        this.setState({ phone: event.target.value})
    }
    


}

  
export default Chapter;

