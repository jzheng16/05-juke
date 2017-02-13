import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

const mapStateToProps = (state) => {
  console.log(state);
  return {albums: state.albums.list}
}

export default connect(mapStateToProps)(Albums);
