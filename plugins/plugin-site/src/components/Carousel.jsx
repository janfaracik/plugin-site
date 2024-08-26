import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

function Carousel({data}) {
    return (
        <div style={{position: 'relative'}}>
            <div className={'app-plugin-manager-carousel'}>
                {data.map(item => (
                    <a key={'banan'} href={item.url}>
                        <div className={'app-aurora'} style={{opacity: 0.75}}/>
                        <div className={'carousel-tags'}>
                            {item.tags.map(tag => (
                                <h1 key={'h1'}>{tag}</h1>
                            ))}
                        </div>
                        <p>{item.title}</p>
                        {
                            item.description && (
                                <span>{item.description}</span>
                            )
                        }
                    </a>
                ))}
                <button className="app-button app-button--tertiary left">
                    <ion-icon name="chevron-back-outline"/>
                </button>
                <button className="app-button app-button--tertiary right">
                    <ion-icon name="chevron-forward-outline"/>
                </button>
            </div>
            <div className="lightyears">
                {data.map(item => (
                    <button key={item.title} />
                ))}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    data: PropTypes.arrayOf({
        item: PropTypes.shape({
            url: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
        }).isRequired
    }).isRequired
};

export default Carousel;
