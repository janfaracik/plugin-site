import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

function Carousel({title}) {
    const description = 'Discover the 1900+ community contributed Jenkins plugins to support building, deploying and automating any project';
    const carousel = [
        {
            tags: ['Hey'],
            title: 'Welcome to the new Jenkins plugins site 🚀',
            description: description
        },
        {
            tags: ['Trending', '250k downloads'],
            title: 'Timestamper',
            description: 'Add timestamps to the console output of your Jenkins jobs'
        },
        {
            tags: ['Trending', '250k downloads'],
            title: 'Timestamper',
            description: 'Add timestamps to the console output of your Jenkins jobs'
        },
        {
            tags: ['Trending', '250k downloads'],
            title: 'Timestamper',
            description: 'Add timestamps to the console output of your Jenkins jobs'
        }
    ];

    return (
        <div className={'app-plugin-manager-carousel'}>
            {carousel.map(item => (
                <div key={'banan'}>
                    <div className={'app-aurora'} style={{opacity: 0.75}}/>
                    <div className={'carousel-tags'}>
                        {item.tags.map(tag => (
                            <h1 key={'h1'}>{tag}</h1>
                        ))}
                    </div>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                </div>
            ))}
            <button className="app-button app-button--tertiary left">
                <ion-icon name="chevron-back-outline" />
            </button>
            <button className="app-button app-button--tertiary right">
                <ion-icon name="chevron-forward-outline" />
            </button>
        </div>
    );
}

Carousel.propTypes = {
    title: PropTypes.any.isRequired
};

export default Carousel;
