import React from 'react';
import {Link} from 'react-router';
const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
      <Link to="/albums">
        <h4 className="menu-item active">
          <a href="#" onClick={deselectAlbum}>ALBUMS</a>
        </h4>
      </Link>
      </section>
    </sidebar>
  );
}

export default Sidebar;