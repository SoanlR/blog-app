import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get(`${BACKEND_URL}favorites`);
      setFavorites(response.data);
    };
    fetchFavorites();
  }, []);

  const removeFavorite = async (id) => {
    await axios.delete(`${BACKEND_URL}favorites/${id}`);
    setFavorites(favorites.filter(fav => fav.id !== id));
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Posts</h1>
      <Link className="px-4 py-2 rounded bg-slate-600 text-white hover:underline mt-24 mb-28" to="/">Back to Posts</Link>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite posts found.</p>
      ) : (
        <ul className="bg-white shadow-md rounded-lg mt-8">
          {favorites.map(fav => (
            <li key={fav.id} className="flex justify-between items-center p-4 border-b last:border-b-0">
              <Link className="text-blue-500 hover:underline" to={`/post/${fav.id}`}>{fav.title}</Link>
              <button 
                onClick={() => removeFavorite(fav.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;