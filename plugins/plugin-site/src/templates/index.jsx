import React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';

import Layout from '../layout';

import SeoHeader from '../components/SeoHeader';
// import Footer from '../components/Footer';
// import SearchBox from '../components/SearchBox';
// import JenkinsVoltron from '../components/JenkinsVoltron';

import './index.css';
import SearchBox from '../components/SearchBox';
import SearchPage from './search';


function IndexPage() {
    const [query, setQuery] = React.useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate(`/ui/search?${new URLSearchParams({query})}`);
    };
    // const pageTitle = 'Plugins Index';
    const description = 'Discover the 1900+ community contributed Jenkins plugins to support building, deploying and automating any project';
    const indexPage = 'plugins/plugin-site/src/templates/index.jsx';
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
    const data = useStaticQuery(graphql`
      query {
        categories: allJenkinsPluginCategory {
          edges {
            node {
              id
              title
            }
          }
        }
        newly: allJenkinsPlugin(sort: {firstRelease: DESC}, limit: 10, filter: {firstRelease: {ne: null}}) {
          edges {
            node {
              title
              name
              firstRelease
            }
          }
        }
        updated: allJenkinsPlugin(sort: {releaseTimestamp: DESC}, limit: 10, filter: {releaseTimestamp: { ne: null }}) {
          edges {
            node {
              title
              name
              firstRelease
            }
          }
        }
        trend: allJenkinsPlugin(sort: {stats: {trend: DESC}}, limit: 10) {
          edges {
            node {
              title
              name
              firstRelease
            }
          }
        }
      }
  `);

    return (
        <SearchPage location={{search: 'dark theme'}} />
    );
}

export default IndexPage;
