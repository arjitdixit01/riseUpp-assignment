import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';
import Loader from './Loader';
import './App.css';

import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('nature'); // Default query is 'nature'

  const API_KEY = 'yykDbFpPRLMbtxvjmzPxtfAOwcn6oCXsYchEQYQAW0Y';
  const API_URL = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=10&client_id=${API_KEY}`;

  useEffect(() => {
    fetchImages();
  }, [searchQuery]); // Trigger fetchImages() whenever the searchQuery changes

  const fetchImages = async () => {
    try {
      setLoading(true); // Show loader while fetching images
      const response = await axios.get(API_URL);
      setImages(response.data.results);
      setLoading(false); // Hide loader after images are fetched
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false); // Hide loader on error
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <Search setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery to Search component */}
      {loading ? (
        <Loader />
      ) : (
        <div className="image-container">
          {images.map((image) => (
            <ImageItem key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
