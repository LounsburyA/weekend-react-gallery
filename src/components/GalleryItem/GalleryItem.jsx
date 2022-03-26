function GalleryItem ({photo, updateItem}){
  const handleLike =()=>{

    console.log('like like like');
    updateItem();
  }
    return(
    <>
      <img className="photos" src={photo.path}/> 
      
      </>
    )}
    export default GalleryItem;