import React from 'react'
import { useParams } from 'react-router-dom'

const GalleryView = ({ galleries }) => {
  // Extract galleryId from URL parameters
  const { galleryId } = useParams()

  // Convert galleryId to a number for comparison
  const id = parseInt(galleryId, 10)

  // Find the gallery with the matching ID
  const gallery = galleries.find(g => g.id === id)

  // Print the gallery to the console for confirmation
  console.log('Selected Gallery:', gallery)

  if (!gallery) {
    return <h2>Gallery not found</h2> // Handle case where gallery is not found
  }

  return (
    <div>
      <h2>{gallery.name}</h2>
      {/* Render additional gallery details here */}
    </div>
  )
}

export default GalleryView
