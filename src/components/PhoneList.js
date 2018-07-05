import React, { Component } from 'react';
import { connect } from 'react-redux' ;

import PhoneItem from './PhoneItem';

class PhoneList extends Component{

render(){
    var newArr = [];
    var result = this.props;
    console.log(result.mobiles);
    
    return(
      <div className="container">
        
        {
          (result.mobiles.hasOwnProperty('items')?
          
          (
            result.mobiles.items.length>0?
            <div className="row">
              <div className="col-xs-12 col-lg-12">
                <div className="result-container">
                  <div className="result-text">We Found { result.mobiles.items.length } mobile phone's with the term '{ result.mobiles.device }'</div>
                  {/* As Items are floated create 3 items per row */}
                 
                    {
                       result.mobiles.items.map((obj,index)=>{
                        return(
                          <div className="additional-item" key ={index}><PhoneItem  key ={index} item={obj} /></div>
                        )
                      })
                    }
                      
                </div> {/*  mobiles-container */}
              </div> {/* col-xs-12 */}
            </div>
            :
            <div className="result-not-loaded">{ result.mobiles.items.message }</div>
          )
          :
          ''
          )
        }
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    mobiles:state.mobiles
  };
}

export default connect(mapStateToProps, null)(PhoneList);