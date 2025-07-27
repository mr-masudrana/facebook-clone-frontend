// facebook-clone-frontend/src/pages/Home.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setPosts(res.data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Feed</h1>
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 mb-4 rounded shadow">
          <p>{post.content}</p>
          <p className="text-sm text-gray-500 mt-2">Likes: {post.likes.length}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
