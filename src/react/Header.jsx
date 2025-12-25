import React from 'react';
import logo from "/src/images/icons/logo.svg"
import mLogo from "/src/images/icons/m-logo.svg"
import search from "/src/images/icons/search.svg"
import arrow from "/src/images/icons/chevron-down.svg"
import classNames from 'classnames';

class Header extends React.Component {
    render() {
        return (
            <header className={classNames("header")}>
                <a href={'#/'}><img className={'desktop'} src={logo}/></a>
                <a href={'#/'}><img className={'mobile'} src={mLogo}/></a>
                <nav className={classNames("nav")}>
                    <a className={classNames("nav-link", "n16", "m-n14")} href={'#/about'}>О нас</a>
                    <a className={classNames("nav-link", "n16", "m-n14")}>
                        Тематики
                        <img className={'desktop'} src={arrow}/>
                    </a>
                    <a className={classNames("nav-link", "n16", "m-n14")}>
                        Форматы
                        <img className={'desktop'} src={arrow}/>
                    </a>
                </nav>
                <div className={classNames("search")}>
                    <input className={classNames("search-input", "desktop")} placeholder={'Поищем что-нибудь?'}/>
                    <img className={classNames("search-icon")} src={search}/>
                </div>
            </header>
        );
    }
}

export default Header;
