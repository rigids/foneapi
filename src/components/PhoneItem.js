import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux';

class PhoneItem extends Component{
  constructor(){
    super();
    this.state={
      saved:false
    }
  }
  

  render(){
    let { item } = this.props;
    return(
      <div className="phone__container">
        <div className="save-wrapper">
          <div className="save-button">
            <i className="fa fa-mobile"></i>
            <div className="info-save" >{item.Brand}</div>
          </div>
        </div>
        <div className="phone__row">
          <div className="phone__item">
            
            <div className="section--divider clearfix">
              <div className="section__index"><i className="fa fa-phone-square"></i></div>
              <div className="phone__handler">
                <div className="phone__name">{item.DeviceName}</div>
              </div>
            </div>
            <div className="info__text">
              {
               Object.keys(item).length>0 ?
               <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                  <th>Key</th>
                  <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(item).map(function(key) {
                      return <tr key={key}><td className="phone__key">{key}</td><td className="phone__detail">{item[key]}</td></tr>                
                    })
                  }
                  </tbody>
                </table>
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {mobiles: state.mobiles};
}

export default connect(mapStateToProps,null)(PhoneItem);