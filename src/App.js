import GalleryNavigation from './components/GalleryNavigation'
import GalleryView from './components/GalleryView'
import harvardArt from './data/harvardArt'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route
          path='/galleries/:galleryId'
          render={props => (
            <GalleryView {...props} galleries={harvardArt.records} />
          )}
        />
        {/* Optionally, you can add a route for the home page */}
        <Route path='/' exact>
          <h1>Welcome to the Gallery App</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
