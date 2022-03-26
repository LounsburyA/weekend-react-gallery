import { useState } from 'react';

function GalleryItem({ photo, updateItem}) {
  // const [count, setCount] = useState(0);
  const handleLike = () => {
   
   
    console.log('like like like');
   updateItem(photo);
  

}
  return (
    <div className='photoItem'>
    
      <img className="photos" src={photo.path} />
      <p> {photo.likes} People liked this</p>
      <button onClick={handleLike}>Like</button> 
   
   
    </div>
  )
}
export default GalleryItem;