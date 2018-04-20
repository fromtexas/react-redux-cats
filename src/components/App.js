import React, {Component} from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CatImg from './CatImg';
import Footer from './Footer';
import CategoriesList from './CategoriesLIst';



class App extends Component {
  //pass props to route render={(props) => <HomePage cats = {this.props.cats} {...props}/>}
  render() {
    const activeStyle = { color: '#e73d13', fontWeight: 'bold' };
    return (
      <div>
        <div className = 'navigation'>
          <a>Cats Gallery</a>
          <NavLink  exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <CategoriesList/>
        <main className='container'>
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/about" component={AboutPage} />
          <Route path="/:id" component={CatImg} />
        </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}


export default App; 
