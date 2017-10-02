import React, { Component } from 'react'
import { Menu, Search, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Container>
          <Menu pointing>
            <Link to='/'>
              <Menu.Item name='home' active={this.activeItem('/')} />
            </Link>
            <Link to='/beers'>
              <Menu.Item name='beers' active={this.activeItem('/api/beers')} />
            </Link>
            <Link to='/breweries'>
              <Menu.Item name='breweries' active={this.activeItem('/breweries')} />
            </Link>
            <Link to='/random'>
              <Menu.Item name='random' active={this.activeItem('/random')} />
            </Link>
            <Menu.Menu position='right'>
              <Search />
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    )
  }
}

export default withRouter(NavBar);
