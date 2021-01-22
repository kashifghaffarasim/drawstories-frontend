import React from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import MobileHeader from './shared/header';
import MobileFooter from './shared/footer';
import CategoryList from './mobile/shared/types';
import List from './mobile/src/list/list';
import Story from './mobile/src/stories/stories';
import { useRouteMatch , withRouter} from "react-router-dom";


class mobileApp extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          value: "Dog",
          array: [],
          selected: null
        }
    }

    async componentDidMount() {
        let a =  await fetch("https://sketch-story.herokuapp.com/api/v1/stories")
        const data = await a.json();
        if(data){
          this.setState({array: data.stories})
        }
    }

    onClick  = (text) => {
        if(text === 'school'){
            this.props.history.push({
                pathname: '/school',
              });
        
        } else if(text === 'demo'){
            this.props.history.push({
                pathname: '/demo',
              });
        } else if(text === 'reg'){
            this.props.history.push({
                pathname: '/register',
              });
        } else if(text == 'contact-us'){
            this.props.history.push({
                pathname: '/contact-us',
            });
        } else if(text == 'about'){
            this.props.history.push({
                pathname: '/about',
              });
        } else {
            if(text === 'list'){
                this.setState({  selected: 2})
            } else {
                this.setState({ value: text, selected: 1})
            }
        }
    }

    _goHome = () => {
        this.setState({selected: null, value: 'Dog'})
    }

    onSave = (opt) => {
        let array = this.state.array
        array.unshift(opt)
        this.setState({selected: 2})
    }

    render (){
        if(this.state.selected === 1){
            return(
                <div>
                   <MobileHeader goHome={() => this._goHome()}> </MobileHeader>
                     <Story type={this.state.value} saveStory={(opt)=> this.onSave(opt)} goHome={() => this._goHome()}/>
                   <MobileFooter></MobileFooter>
                </div>
            )
        } else if(this.state.selected === 2) {
            return(
                <div >
                    <MobileHeader  goHome={() => this._goHome()}/>
                    <div className="mb-top" style={{ marginTop: 10}}> 
                        <div className="col-md-12">
                            <Button className="" variant="primary" onClick={() => this._goHome()}> Back </Button>
                        </div>
                        <div className="col-md-12 text-center" style={{ marginTop: 0}}>
                            <List list = { this.state.array }/>
                        </div>
                    </div>     
                    <MobileFooter />
                </div>
            )

        } else {
            return (
                <div>
                    <MobileHeader  goHome={() => this._goHome()}/>
                        <CategoryList onClick={(text) => this.onClick(text) }/>
                    <MobileFooter />
                </div>
                );
        }   
    }


  

}

export default withRouter(mobileApp);