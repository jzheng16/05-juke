import {connect} from 'react-redux';
import Station from '../components/Station';
import {setCurrentSong, toggleSong} from '../action-creators/player';
import {convertSong} from '../utils';

const mapStateToProps = (state, ownProps) => {

  return {
  songs: state.songs.filter(song => (song.genre === ownProps.params.genreName))
                    .map(song => convertSong(song)),
  genreName: ownProps.params.genreName,
  isPlaying: state.player.isPlaying,
  currentSong: state.player.currentSong
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({

  toggleOne: (song, list) => dispatch(toggleSong(song, list))

});

export default connect(mapStateToProps, mapDispatchToProps)(Station);
