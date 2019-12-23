import React from 'react'

function Header () {
    return (
        <header style={HeaderStyle}>
            <h1>Text-To-Speech Conversion</h1>
        </header>
    )
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header