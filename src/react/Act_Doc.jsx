import React from 'react';
import act from "/src/images/other/act.png"

class Banner extends React.Component {
    render() {
        return (
            <section className='actdoc block'>
                <img src={act}/>
                <div className={'actdoc-point point1'}>
                    <p className={'s17'}>Полное и точное описание квартиры. Оно должно полностью совпадать с тем, что
                        написано в свидетельстве о регистрации права собственности или в выписке из ЕГРН</p>
                </div>
                <div className={'actdoc-point point2'}>
                    <p className={'s17'}>Укажите сколько экземпляров ключей от квартиры вы получили от хозяина.</p>
                </div>
                <div className={'actdoc-point point3'}>
                    <p className={'s17'}>Проверьте дату акта. Это точка отсчета платы за квартиру</p>
                </div>
                <div className={'actdoc-point point4'}>
                    <p className={'s17'}>Опишите все вещи хозяина, которые остаются в квартире. Вы отвечаете за всё, что будет
                        описано в акте.</p>
                </div>
                <div className={'actdoc-point point5'}>
                    <p className={'s17'}>Перечислите все найденные недостатки квартиры — протекающие трубы, отбитый угол стены, треснувшую стену на кухне. Если недостатки  не обнаружились, пишите,  что претензий к состоянию квартиры не имеете</p>
                </div>

            </section>
        );
    }
}

export default Banner;
