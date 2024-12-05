import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Posts</h1>
        <Link
          to="/favorites"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
        >
          View Favorites
        </Link>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <Link to={`/post/${post.id}`} className="block">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2 hover:underline">
                {post.title}
              </h3>
              <p className="text-gray-600 text-base">
                {post.body.substring(0, 100)}...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
