import React from 'react';
import classNames from 'classnames';
import download from "/src/images/icons/download-circle.svg"
import Tag from "./Tag.jsx";

class Banner extends React.Component {
    render() {
        const { title, image, tags, } = this.props;
        return (
            <section className='banner-top'>
                <div className='banner-top-header block'>
                    <h1 className={'b80-80 banner-top-title'}>{title}</h1>
                    <img className='banner-top-header-img' src={download}/>
                </div>
                <div className='banner-top-bottom'>
                    <img src={image}/>
                    <div className={'banner-top-info'}>
                        <p className={'sb16'}>Автор: Иван Иванов</p>
                        <p className={'sb16'}>10.10.2024</p>
                    </div>
                    <div className={'card-tags'}>
                        {tags.map(tag => <Tag tag={tag}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
