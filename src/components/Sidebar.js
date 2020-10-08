import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>Podes hacer esto</h3>
          <a href="#" className="btn btn-success">
            Crear artículo
          </a>
        </div>
        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encontra el articulo</p>
          <form>
            <input type="text" name="search" placeholder="Articulo a buscar" />
            <input type="submit" name="submit" value="BUSCAR" className="" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
