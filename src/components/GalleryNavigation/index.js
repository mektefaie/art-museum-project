import { NavLink } from 'react-router-dom'
import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <h1>Galleries</h1>
      <nav>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          exact
        >
          Home
        </NavLink>
        {galleries.map(gallery => (
          <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
            {gallery.name}
          </NavLink>
        ))}
      </nav>
    </nav>
  )
}
export default GalleryNavigation
