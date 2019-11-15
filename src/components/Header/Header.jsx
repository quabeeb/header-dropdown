import React, {useState} from 'react'
import { HamburgerVortex } from 'react-animated-burgers'

import './Header.css'

export default function Header() {

    const [buttonState, setButtonState] = useState(false);

    const toggleButton = () => {
        setButtonState(!buttonState);
    }

    const listItems = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

    const headerListItems = listItems.map(item => 
        <li className='header-item-horizontal'>{item}</li>
    );

    return(
        <div>
            <HamburgerVortex isActive={buttonState} toggleButton={toggleButton}/>
            <ul className='header-list-items-horizontal'>
                {headerListItems}
			</ul>
        </div>
    )
}
