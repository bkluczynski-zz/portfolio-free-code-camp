import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Header, Table, Rating, Item, Menu, Input, Segment, Icon } from 'semantic-ui-react'


 class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
          <Menu secondary>
            <Menu.Item
              id='item'
              active={activeItem === 'home'}
              position='left' name='home'
              onClick={this.handleItemClick}>
            <Icon name='home' circular/>
            Home
          </Menu.Item>
            <Menu.Item position='right' name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
            <Icon name='lab' circular />
            Projects
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Icon name='address card outline' circular/>
            About
            </Menu.Item>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
            <Icon name='envelope' circular />
            Contact
            </Menu.Item>
          </Menu>
        <div>
          {activeItem === 'home' && 'hello it is mr home here'}
          {activeItem === 'projects' && 'wer are messages'}
          {activeItem === 'about' && 'wer are friends'}
          {activeItem === 'contact' && 'contact me'}
        </div>
      </div>


    )
  }
}

export default MenuBar
