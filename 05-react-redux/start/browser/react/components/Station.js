import React from 'react';

import Songs from './Songs'

export default function (props) {

const songs = props.songs;
const currentSong = props.currentSong;
const isPlaying = props.isPlaying;
const toggle = props.toggleOne;
const genre = props.genreName;


  return (

    <div>
      <h3>{genre} Station </h3>

      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggle}
      />
    </div>

      )
}
