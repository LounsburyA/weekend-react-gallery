import { useState, useEffect } from 'react';

function GalleryItem({ photo, updateItem }) {
  const [isShowing, setIsShowing] = useState(false);
  const handleLike = () => {
    console.log('like like like');
    updateItem(photo);
  }

  const handleShow = () => {

    console.log('clicked photo');
    setIsShowing(!isShowing)
  }
  return (
    <div className='container'>
      <div onClick={handleShow}>
        {isShowing ? <p>{photo.description}</p> : <img className="photos" src={photo.path} />}
      </div>

      <div>
        <button onClick={handleLike}>Like</button>
      </div>

      <div className='container'>
        <p> {photo.likes} People liked this</p>
      </div>

    </div>
  )
}
export default GalleryItem;

//{isShowing ?<p>{photo.description}</p> : 