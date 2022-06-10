import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='header'>
            <nav>
                <Link to="/">Categories </Link>
                <Link to="/ItemsList">ItemsList </Link>
                <Link to="/ShowItem">ShowItem</Link>
            </nav>
        </header>
    )
}