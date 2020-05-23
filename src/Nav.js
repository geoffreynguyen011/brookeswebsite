import React from 'react'
import './App.css';

function Nav() {
    return (
        <header>
            <div class='wrapper'>
                <nav class='header-nav' role='navigation' aria-label='Main'>
                    <ul>
                        <li>
                            <a href='/products'>Products</a>
                        </li>
                        <li>
                            <a href='/shoppolicies'>Shop policies</a>
                        </li>
                        <li>
                            <a href='/Contact'>Contact</a>
                        </li>
                        <li>
                            <a href='/Cart'>Cart</a>
                        </li>
                    </ul>
                </nav>
                <div class='brand'>
                    <a href='/' title='Home'>
                        <img class='store-logo' src='https://assets.bigcartel.com/theme_images/51714491/Untitled_Artwork_9.png?auto=format&fit=max&h=500&w=1800'></img>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Nav