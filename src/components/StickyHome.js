import React from 'react'
import { ThemeContext } from './Theme'

function StickyHome() {
    const { theme, toggle, dark } = React.useContext(ThemeContext)

    return (
        <div style={{ backgroundColor: dark ? 'black' : 'white' }} className='sticky-home'>
            <span >Home</span>
        </div>
    )
}

export default StickyHome
