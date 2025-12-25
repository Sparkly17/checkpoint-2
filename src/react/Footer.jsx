import React from 'react';
import logo from "/src/images/icons/logo-big.svg"
import classNames from 'classnames';

class Header extends React.Component {
    render() {
        return (
            <footer className={classNames("footer block")}>
                <div className={classNames("footer-links first")}>
                    <a className={"sb20 m-b14"} href={'#/chapter'}>Жилье</a>
                    <p className={"sb20 m-b14"}>Финансы</p>
                    <p className={"sb20 m-b14"}>Документы</p>
                    <p className={"sb20 m-b14"}>Работа</p>
                    <p className={"sb20 m-b14"}>Учеба</p>
                    <p className={"sb20 m-b14"}>Социализация</p>
                    <p className={"sb20 m-b14"}><br/></p>
                    <a href={'#/styleguide'} className={"sb20 m-b14"}>Стайлгайд</a>
                </div>
                <div className={classNames("footer-links second")}>
                    <a href={'#/chapter-2'} className={"sb20 m-b14"}>Подборки</a>
                    <p className={"sb20 m-b14"}>Статьи</p>
                    <p className={"sb20 m-b14"}>Гайды</p>
                    <p className={"sb20 m-b14"}>Чек-листы</p>
                    <p className={"sb20 m-b14"}>Разбор кейсов</p>
                    <p className={"sb20 m-b14"}>Подкасты</p>
                    <p className={"sb20 m-b14"}>Интервью</p>
                    <p className={"sb20 m-b14"}>Спецпроекты</p>
                </div>
                <div className={classNames("footer-contacts")}>
                    <div className={classNames("footer-contact")}>
                        <h2 className={classNames("contact-title", "b32", "m-b20")}>Контакты</h2>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>chp@hse</p>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>8 952 812 00 00</p>
                    </div>
                    <div className={classNames("footer-contact", "b32")}>
                        <h2 className={classNames("contact-title", "m-b20")}>Соц. сети</h2>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>Telegram</p>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>RuTube</p>
                    </div>
                </div>
                <div className={classNames("footer-icon")}>
                    <img src={logo}/>
                </div>

            </footer>
        );
    }
}

export default Header;
