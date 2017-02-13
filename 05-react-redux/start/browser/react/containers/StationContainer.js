import {connect} from 'react-redux';
import Station from '../components/Station';



const mapStateToProps = (state, ownProps) => {
  songs: state.songs.filter(song => (song.genre === ownProps.genreName)),
  isPlaying:
  currentSong:
  toggleOne:
  genreName: ownProps.genreName


}
