import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import { fetchNewReleases, fetchFeaturedPlayLists, fetchCategories } from '../api';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  async componentDidMount() {
    try {
      const [newReleases, playlists, categories] = await Promise.all([
        fetchNewReleases(),
        fetchFeaturedPlayLists(),
        fetchCategories(),
      ]);
      this.setState({ newReleases, playlists, categories });
    } catch (error) {
      alert(`${error.message} \n${error.data.error_description}`);
      console.error(error);
    }
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className='discover'>
        <DiscoverBlock text='RELEASED THIS WEEK' id='released' data={newReleases} />
        <DiscoverBlock text='FEATURED PLAYLISTS' id='featured' data={playlists} />
        <DiscoverBlock text='BROWSE' id='browse' data={categories} imagesKey='icons' />
      </div>
    );
  }
}
