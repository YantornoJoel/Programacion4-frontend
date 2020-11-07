import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";





// Importar componentes

import Header from "./components/Header";
import Blog from './components/Blog';
import Footer from "./components/Footer";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Home from './components/Home';
import Formulario from './components/Formulario';
import Search from "./components/Search";
import Article from './components/Article';




class Router extends Component {
  render() {

    return (
      <BrowserRouter>
        <Header />





        {/* Configurar rutas y paginas */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/articulo/:id" component={Article} />
          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route exact path="/redirect/:search" render={
            (props) => {
              var search = props.match.params.search;
              return (<Redirect to={'/blog/busqueda/' + search} />)
            }
          } />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route component={Error} />
        </Switch>




        <div className="clearfix"></div>


        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
