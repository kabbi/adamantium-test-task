import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Header from '../components/Header'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
}