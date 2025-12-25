import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/main.scss'
import Tag from "./react/Tag.jsx";
import Card from "./react/Card.jsx";
import main from "/src/images/other/main.png"
import cat from "/src/images/other/cat.png"
import clean from "/src/images/other/clean.png"
import goto from "/src/images/icons/goto.svg"
import search from "/src/images/other/search.png"
import msearch from "/src/images/other/msearch.png"
import searchIcon from "/src/images/icons/search.svg"

import mmain from "/src/images/other/mmain.png"
import mcat from "/src/images/other/mcat.png"
import mclean from "/src/images/other/mclean.png"

import docs from "/src/images/themes/docsT.png"
import finance from "/src/images/themes/financeT.png"
import house from "/src/images/themes/houseT.png"
import learn from "/src/images/themes/learnT.png"
import soc from "/src/images/themes/socT.png"
import work from "/src/images/themes/workT.png"

import arrow from "/src/images/icons/arrow-right.svg"
import arrowDoc from "/src/images/icons/arrow-right-doc.svg"
import arrowWork from "/src/images/icons/arrow-right-work.svg"
import arrowBlack from "/src/images/icons/arrow-right-black.svg"

import sections from "/src/images/main/sections.png";
import msections from "/src/images/main/msections.png";

import card_3 from "/src/images/cards/img3.png";
import card_8 from "/src/images/cards/img8.png";
import card_10 from "/src/images/cards/img10.png";
import mcard_3 from "/src/images/cards/mimg3.png";
import mcard_8 from "/src/images/cards/mimg8.png";
import mcard_10 from "/src/images/cards/mimg10.png";

import card1 from "/src/images/main/img1.png";
import card2 from "/src/images/main/img2.png";
import card3 from "/src/images/main/img3.png";
import mcard1 from "/src/images/main/mimg1.png";
import mcard2 from "/src/images/main/mimg2.png";
import mcard3 from "/src/images/main/mimg3.png";
import card_4 from "/src/images/cards/img4.png";
import card4 from "/src/images/main/img4.png";
import card5 from "/src/images/main/img5.png";
import mcard_4 from "/src/images/main/mimg_4.png";
import mcard4 from "/src/images/main/mimg4.png";
import mcard5 from "/src/images/main/mimg5.png";
import card6 from "/src/images/main/img6.png";
import card7 from "/src/images/main/img7.png";
import mcard6 from "/src/images/main/mimg6.png";
import mcard7 from "/src/images/main/mimg7.png";
import card8 from "/src/images/main/img8.png";
import card9 from "/src/images/main/img9.png";
import card10 from "/src/images/main/img10.png";
import card11 from "/src/images/main/img11.png";
import card12 from "/src/images/main/img12.png";
import mcard8 from "/src/images/main/mimg8.png";
import mcard9 from "/src/images/main/mimg9.png";
import mcard10 from "/src/images/main/mimg10.png";
import mcard11 from "/src/images/main/mimg11.png";
import mcard12 from "/src/images/main/mimg12.png";
import card_13 from "/src/images/main/img_13.png";
import card13 from "/src/images/main/img13.png";
import card14 from "/src/images/main/img14.png";
import card15 from "/src/images/main/img15.png";
import card16 from "/src/images/main/img16.png";
import card17 from "/src/images/main/img17.png";
import mcard13 from "/src/images/main/mimg13.png";
import mcard14 from "/src/images/main/mimg14.png";
import mcard15 from "/src/images/main/mimg15.png";
import mcard16 from "/src/images/main/mimg16.png";

import blue from "/src/images/main/blue.svg";
import mblue from "/src/images/main/mblue.svg";
import pink from "/src/images/main/pink.svg";
import mpink from "/src/images/main/mpink.svg";
import yellow from "/src/images/main/yellow.svg";
import myellow from "/src/images/main/myellow.svg";

class Main extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <img className='desktop arrow-blue' src={blue}/>
                <img className='desktop arrow-pink' src={pink}/>
                <img className='desktop arrow-yellow' src={yellow}/>
                <img className='mobile arrow-blue' src={mblue}/>
                <img className='mobile arrow-pink' src={mpink}/>
                <img className='mobile arrow-yellow' src={myellow}/>
                <section className={'top'}>
                        <div className={'top-left'}>
                            <a href={'#/checklist'}>
                                <img className={'left-img desktop'} src={main}/>
                                <img className={'left-img mobile'} src={mmain}/>
                                <h1 className={'left-title b48-48 m-b24'}>Как найти хорошее объявление о сдаче жилья</h1>
                                <div className={'left-tags'}>
                                    <Tag tag={'Чек-лист'}/>
                                    <Tag tag={'Жилье'}/>
                                </div>
                            </a>
                        </div>

                    <div className={'friend'}>
                        <a href={'#/about'}>
                            <h2 className={'b40 m-b32'}>Чекпоинт — лучший друг зумера. Давай знакомиться!</h2>
                            <img className={'friend-icon'} src={goto}/>
                        </a>
                    </div>
                    <Card fonts={'b24-24 m-b16'} image={cat} mimage={mcat} title={'Как найти работу и не сойти с ума'} tags={['Статья', 'Работа']}/>
                    <Card fonts={'b24-24 m-b16'} image={clean} mimage={clean} title={'Статья для тех, у кого нет времени на уборку'}
                          tags={['Статья', 'Жилье']}/>
                </section>
                <section className={'solve'}>
                    <h2 className={'solve-title b48-48 m-b24'}>Решения твоих проблем <br/>от зумеров для зумеров</h2>
                    <div className={'solve-search'}>
                        <input className={'solve-input m-n16'} placeholder={'Как снять квартиру...'}/>
                        <img className={'solve-icon'} src={searchIcon}/>
                    </div>
                    <img className={'solve-search-back desktop'} src={search}/>
                    <img className={'solve-search-back mobile'} src={msearch}/>
                    <div className={'solve-chapters'}>
                        <img className={'desktop'} src={sections}/>
                        <img className={'mobile'} src={msections}/>
                    </div>

                    <section className={'chapter house'}>
                        <div className={'chapter-top'}>
                            <h2 className={'chapter-top-title sb32 m-sb24'}>Жилье</h2>
                            <p className={'chapter-top-link n20 m-n20'}>В раздел <img src={arrow}/></p>
                        </div>
                        <div className={'chapter-items'}>
                            <a href={'#/article'}>
                                <Card mimage={mcard_8} image={card_8} title={'Что проверить до приезда хозяина квартиры'} tags={['Статья', 'Жилье']}/>
                            </a>
                            <Card mimage={mcard_3} image={card_3} title={'Переехал в Москву и остался без денег'} type={'lower white-text'} tags={['Разбор-кейса', 'Жилье']}/>
                            <Card mimage={mcard_10} image={card_10} title={'Как распределить бытовые задачи с соседом в общаге'} tags={['Статья', 'Жилье']}/>
                        </div>
                    </section>

                    <section className={'chapter work'}>
                        <div className={'chapter-top'}>
                            <h2 className={'chapter-top-title sb32 m-sb24'}>Работа</h2>
                            <p className={'chapter-top-link n20 m-n20'}>В раздел <img src={arrowWork}/></p>
                        </div>
                        <div className={'chapter-items'}>
                            <Card mimage={mcard1} image={card1} title={'Как вести себя на собеседовании'} tags={['Лонгрид', 'Работа']}/>
                            <Card mimage={mcard2} image={card2} title={'Меняю работу раз в год, мои советы'} type={'lower white-text'} tags={['Подкаст', 'Работа']}/>
                            <Card mimage={mcard3} image={card3} title={'Как найти работу и не сойти с ума'} tags={['Статья', 'Работа']}/>
                        </div>
                    </section>

                    <section className={'chapter doc'}>
                        <div className={'chapter-top'}>
                            <h2 className={'chapter-top-title sb32 m-sb24'}>Документы</h2>
                            <p className={'chapter-top-link n20 m-n20'}>В раздел <img src={arrowDoc}/></p>
                        </div>
                        <div className={'chapter-items'}>
                            <a href={'#/template'}>
                                <Card mimage={mcard_4} image={card_4} type={'black-text'} title={'Акт приема-передачи квартиры: шаблон'} tags={['Статья', 'Работа']}/>
                            </a>
                            <Card mimage={mcard4} image={card4} title={'Как не потонуть в документах'} tags={['Статья', 'Работа']}/>
                            <Card mimage={mcard5} image={card5} title={'Правильно читаем договоры'} tags={['Статья', 'Работа']}/>
                        </div>
                    </section>

                </section>
                <section className={'chapter collection block'}>
                    <div className={'chapter-top'}>
                        <h2 className={'chapter-top-title sb32 m-sb24'}>Сборники чек-листов и шаблонов</h2>
                        <p className={'chapter-top-link n20 m-n20'}>Все подборки <img src={arrowBlack}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <a href={'#/collection'}>
                            <Card fonts={'b40 m-b24'} mimage={mcard6} image={card6} title={'Набор выживания для переезда: самые важные шпаргалки'} tags={['Жилье', 'Документы', 'Финансы']}/>
                        </a>
                        <Card fonts={'b40 m-b24'} mimage={mcard7} image={card7} title={'Подборка «Финансовая грамотность»'} tags={['Документы', 'Финансы']}/>
                    </div>
                </section>

                <section className={'chapter video block'}>
                    <div className={'chapter-top'}>
                        <h2 className={'chapter-top-title sb32 m-sb24'}>Видео и подкасты</h2>
                        <p className={'chapter-top-link n20 m-n20'}>В раздел <img src={arrowBlack}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <div className={'big'}>
                            <Card mimage={mcard8} image={card8} title={'Как снять квартиру и не стать обманутым'} type={'lower'} tags={['Разбор кейса', 'Жилье']}/>
                        </div>
                        <Card mimage={mcard9} image={card9} title={'Первое собеседование: как не растеряться'} type={'lower'} tags={['Подкаст', 'Работа']}/>
                        <Card mimage={mcard10} image={card10} title={'Меняю работу раз  в год, мои советы'} type={'lower'} tags={['Интервью', 'Работа']}/>
                        <Card mimage={mcard11} image={card11} title={'Основные правила работы  с документами'} type={'lower'} tags={['Подкаст', 'Работа']}/>
                        <Card mimage={mcard12} image={card12} title={'Переехал в Москву и остался без денег'} type={'lower'} tags={['Разбор кейса', 'Работа']}/>
                    </div>
                </section>

                <section className={'chapter checks block'}>
                    <div className={'chapter-top'}>
                        <h2 className={'chapter-top-title sb32 m-sb24'}>Чек-листы и шаблоны</h2>
                        <p className={'chapter-top-link n20 m-n20'}>В раздел <img src={arrowBlack}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <a href={'#/template'}>
                            <Card mimage={mcard13} image={card_13} title={'Акт приема-передачи квартиры'} type={'black-text'} tags={['Шаблон', 'Документы']}/>
                        </a>
                        <Card mimage={mcard14} image={card13} title={'Как все успевать по учебе'} type={'black-text'} tags={['Чек-лист', 'Учеба']}/>
                        <div className={'big-top'}>
                            <Card mimage={mcard13} image={card14} title={'Что не забыть при оформлении ИП'} type={'black-text'} tags={['Чек-лист', 'Документы']}/>
                        </div>
                        <div className={'big-bot'}>
                            <Card mimage={mcard15} image={card15} title={'Снимаем показания счетчиков правильно'} type={'black-text'} tags={['Чек-лист', 'Жилье']}/>
                        </div>
                        <Card mimage={mcard16} image={card16} title={'Как найти хорошего работодателя'} type={'black-text'} tags={['Чек-лист', 'Работа']}/>
                        <Card mimage={mcard15} image={card17} title={'Что не забыть при переезде'} type={'black-text'} tags={['Чек-лист', 'Жилье']}/>
                    </div>
                </section>

                <Footer/>
            </>
        );
    }
}

export default Main;
