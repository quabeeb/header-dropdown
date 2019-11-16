import React, { useState } from 'react'
import { HamburgerVortex } from 'react-animated-burgers'

import './Header.css'

export default function Header() {
  const MINIMUM_WINDOW_WIDTH = 700;

  const [buttonState, setButtonState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => {
    if (window.innerWidth < MINIMUM_WINDOW_WIDTH) {
      setButtonState(false);
    }
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWindowWidth);

  const toggleButton = () => {
    setButtonState(!buttonState);
  }

  const listItems = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

  const displayNavigationBar = () => {
    return (
      <ul className='header-list-items-horizontal'>
        {listItems.map(item => <li key={item} className='header-item-horizontal'>{item}</li>)}
      </ul>
    )
  };

  const displayHamburger = () => {
    return (
      <HamburgerVortex isActive={buttonState} toggleButton={toggleButton} />
    )
  }

  const displayHamburgerMenu = () => {
    return (
      <ul className='header-list-items-vertical'>
        {listItems.map(item => <li key={item} className='header-item-vertical'>{item}</li>)}
      </ul>
    )
  };

  return (
    <div>
      {windowWidth < MINIMUM_WINDOW_WIDTH ? displayHamburger() : displayNavigationBar()}
      {buttonState ? displayHamburgerMenu() : null}
    </div>
  )
}
