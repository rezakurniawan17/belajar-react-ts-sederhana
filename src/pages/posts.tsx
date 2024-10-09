import { useState, useEffect } from "react";
import CardPost from "../components/cardPost";
import { IPost } from "../types";
import { getPosts } from "../hooks/getPosts";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.posts);
    });
  });
  return (
    <div className="my-10">
      <Link to="/">
        <span className="text-slate-500 hover:text-red-500 text-lg inline-flex items-center gap-0.5">
          <ArrowLeft size="18" />
          Back
        </span>
      </Link>
      <h1 className="mt-3 text-5xl font-bold">All Posts</h1>
      <div className="grid grid-cols-1 gap-4 mt-6 xl:grid-cols-4 lg:grid-cols-3">
        {posts ? (
          posts.map((post: IPost) => <CardPost post={post} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
