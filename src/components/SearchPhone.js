import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux' ;
import { setPhone } from '../actions';
import { Link } from 'react-router-dom';
import { token } from '../actions/secrets';
import FormCode from './FormCode';

class SearchPhone extends Component{
  constructor(){
    super()
    this.state  = {
      device : '',
      completed : false,
      loading: false
    }
    
    this.search = this.search.bind(this)
  }
  submit(values) {
    alert("submitted");
    console.log(values);
  }
  
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search();
    }
  }
  search(values){
    let device  = values.device;
    this.setState({'loading':true});
    let url = `https://fonoapi.freshpixl.com/v1/getdevice?device=${device}&token=${token}`;
    console.log(url);
    fetch(url,{
      method: "GET"
    }).then(response=>response.json())
    .then(json=> { 
    console.log('ddd');
        this.props.setPhone(json, device);
        this.setState({'loading':false});
        this.setState({'completed':true});
    })
  }
  render(){
    return(
      <div className="container">
        <div className={ "form--wrapper " + (this.state.completed === true? ' results__loaded' : '')}>
          <h2>Find a Phone</h2>
          <div className="form-inline">
            <FormCode onSubmit={this.search} />
          </div>
          {
            (this.state.loading === true)?
            <div className="loading-image"></div>
            :
            <div className="loading-hidden"></div>
          }
        </div>
      </div>
    );
  }
}

export default connect(null,{setPhone})(SearchPhone);