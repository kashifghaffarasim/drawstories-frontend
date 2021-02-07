import React from 'react';
import Button from 'react-bootstrap/Button';

import { withRouter} from "react-router-dom";
import Header from './../shared/header';
import "./Header.css";

import URL from './../utils';


class Book extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          img: require('./../assets/img/canvas-1.jpg'),
        }
    }


    async componentDidMount() {
        this.setState({isLoading: true})
        // Start getting all books
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let id = this.props.match.params.id
            let urla = URL + "/v1/books/?id=" + id;
            let a =  await fetch(urla)
            const data = await a.json();
            if(data){
               this.setState({ books: data.books, isLoading: false})
            }
        } else {
            this.setState({isLoading: false})
        }
        // End 
    }
      
    _menuSelect = (text) => {

    }

    _onPress = async(id) => {
        let path = '/school/classes/sections/book/' + id + '/chapters';
        this.props.history.push({
            pathname: path,
            params: {id:  id}
        });
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

            if(this.state.books.length > 0){

                return(
                    <>
                        <div  className="container" style={{ height: 400, marginTop: 40}}>
                            {this._renderLoader()}
                            <div className="text-center">
                                
                                {this.state.books.map( (chap, i) => (
                                    <div className="row" key={chap.id} style={{ marginBottom: 20}}>
                                        <div className="col-md-4">  </div>
                                        <div className="col-md-4"> 
                                            <Button className="outlineColor" onClick={() => this._onPress(chap.id)} variant="outline-primary" block >
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

    _renderLoader = () => {
        if(this.state.isLoading){
            return(
                <>
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
                    </div>
                     
                </div>
            </>
        )
    }
}

  
export default withRouter(Book);

