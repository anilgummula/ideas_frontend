import React, { useEffect, useState } from "react";
import IdeaCard from "./IdeaCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/ideas/get");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-10">
      <div className="flex justify-center mx-auto md:text-2xl text-xl font-bold">
        Project Ideas
      </div>
      <div className="mt-10 space-y-6 px-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <IdeaCard key={post._id} name={post.name} idea={post.idea[0]?.text} />
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10">No ideas found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
