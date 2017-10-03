import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar({ user }) {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span  className="mdc-toolbar__title ">News Tracker</span>
                </section>
                
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <nav className="mdc-tab-bar">
                        <NavLink exact to="/" className="mdc-tab" activeClassName='mdc-tab--active'>Главная</NavLink>

                        <NavLink to="/news" className="mdc-tab" activeClassName='mdc-tab--active'>News</NavLink>
                        {user ?
                            <NavLink to="/logout" className="mdc-tab" activeClassName='mdc-tab--active'>Выйти</NavLink>
                            :
                            <NavLink to="/login" className="mdc-tab" activeClassName='mdc-tab--active'>Войти</NavLink>
                        }
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Toolbar;