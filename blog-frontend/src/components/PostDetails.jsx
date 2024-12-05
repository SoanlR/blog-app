import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(postResponse.data);

      const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(commentsResponse.data);
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const checkFavorite = async () => {
      const response = await axios.get(`${BACKEND_URL}favorites`);
      const favorites = response.data;
      setIsFavorite(favorites.some(fav => fav.id === parseInt(id)));
    };
    checkFavorite();
  }, [id]);

  const addFavorite = async () => {
    const favoritePost = { id: post.id, title: post.title };
    await axios.post(`${BACKEND_URL}favorites`, favoritePost);
    setIsFavorite(true);
  };

  const removeFavorite = async () => {
    await axios.delete(`${BACKEND_URL}/favorites/${id}`);
    setIsFavorite(false);
  };

  if (!post) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.body}</p>
      <button 
        onClick={isFavorite ? removeFavorite : addFavorite} 
        className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Link className={`px-4 py-2 rounded ml-8 bg-slate-600 text-white`} to="/favorites">Back to Favorites</Link>
      <h2 className="text-2xl font-bold mt-6 mb-2">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-600">No comments available.</p>
      ) : (
        <ul className="bg-white shadow-md rounded-lg mt-4">
          {comments.map(comment => (
            <li key={comment.id} className="p-4 border-b last:border-b-0">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-600">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostDetails;