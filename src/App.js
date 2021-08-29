import react from 'react';
import Header from './components/Header'
import './App.css'
import Sidebar from './components/Sidebar'
import SearchPage from './components/SearchPage'
import RecomendedVideos from './components/RecomendedVideos'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
              <div className="app__main">
                <Sidebar/>
                <RecomendedVideos/>
              </div>
          </Route>
          <Route exact path="/search/:searchTerm">
              <div className="app__main">
                <Sidebar/>
                <SearchPage/>
              </div>
          </Route>
        </Switch>
        
      </Router>
     
        
      
    </div>
  );
}

export default App;
