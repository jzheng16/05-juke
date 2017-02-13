import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {loadAllSongs} from '../action-creators/playlists';



const mapStateToProps = state => {
  const genreArr = [];
  return {
  stations: state.songs.filter( (song) => {
    if (genreArr.includes(song.genre)) {return false;}
    else {
      genreArr.push(song.genre);
      return true;
    }
  })
  .map((song) => {
    return {name: song.genre}
  })
  }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
