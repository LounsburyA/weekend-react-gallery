import { useState, useEffect } from 'react';

function GalleryItem({ photo, updateItem }) {
  const [showDescription, setShowDescription] = useState(false);
  const handleLike = () => {
    console.log('like like like');
    updateItem(photo);
  }

  const handleRotate = () =>{


  }
  return (
    <div className='photoItem'>
<div> </div>
      <img className="photos" src={photo.path} />
      <p> {photo.likes} People liked this</p>
      <button onClick={handleLike}>Like</button>


    </div>
  )
}
export default GalleryItem;