import React from 'react'
import bs from 'react-bootstrap'
import nav from 'react-router-bootstrap'

export default React.createClass({
  render() {
    return (
      <bs.Navbar fixedTop brand='Instagram trends'>
        <bs.Nav right>
          <bs.NavItem eventKey={2} href="#">Sign in with Instagram</bs.NavItem>
        </bs.Nav>
      </bs.Navbar>
    )
  }
})
