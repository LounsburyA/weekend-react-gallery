import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  let [galleryList, setGalleryList] = useState([])

  useEffect(() => {
    getGallery();
}, []);
  const getGallery = () => {
    
  axios.get('/gallery').then(response =>{

    setGalleryList(response.data);
  })
  .catch (err=>{
    console.log('error in Get app side', err);
  })

  }

  const updateItem = (itemToUpdate) => {
    console.log('Update from App.jsx');
    axios.put(`/list/${itemToUpdate.id}`)
        .then(response => {
            //retrieves updated item list:
            getItems();
            console.log('Updated', itemToUpdate)
        }).catch(err => {
            console.log('Error in update', err);
        })

}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList galleryList={galleryList}/>
      </div>
    );
}

export default App;
