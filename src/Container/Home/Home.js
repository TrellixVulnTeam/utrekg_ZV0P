import React, { Component } from 'react';

import Navigation from '../../Component/Navigation';
import List from '../../Component/List/List';
import Detail from '../../Component/Detail/Detail';

//import logo from './logo.svg';
import './Home.css';

class HomePage extends Component {
  
  render() {
    return (
      <div className="container">
        <Navigation fb={this.props.fb}/>
        {
          (this.props.match.params.page === 'list' || this.props.match.params.page === 'home')? ( 
            <div>
              <div className="pageTitle">
                <h3 className={'teal-text'}>
                  Listado de usuarios
                </h3>
              </div>
              <List fb={this.props.fb}/>
            </div>
          ) : (this.props.match.params.page === 'detail') ? (
            <div>
              <div className="pageTitle">
                <h3 className={'teal-text'}>
                  Editar usuario
                </h3>
              </div>
              <Detail fb={this.props.fb} exists="true" id={this.props.match.params.id}/>
            </div>
          ) : (
            <div>
              <div className="pageTitle">
                <h3 className={'teal-text'}>
                  Nuevo usuario
                </h3>
              </div>
              <Detail fb={this.props.fb} exists="false"/>
            </div>
          )
        }
      </div>
    );
  }
}

export default HomePage;
