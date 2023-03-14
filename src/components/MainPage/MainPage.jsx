import { useState, useEffect } from "react";
import NewPostButton from "./NewPostButton";
import PostsList from "./PostsList";

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  let getPosts = () => {
    fetch('http://localhost:7777/posts')
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => {
          if (a.created < b.created) return 1
          if (a.created == b.created) return 0
          if (a.created > b.created) return -1
        })
        setPosts(data);
      })
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <NewPostButton />
      <PostsList posts={posts} />
    </div>
  )
}