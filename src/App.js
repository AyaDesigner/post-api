/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

/**
 * TODO: Create a newsfeed with posts.
 * Use https://jsonplaceholder.typicode.com/
 * Each post should be searchable
 * Each post has comments, that are loaded on request
 * Each post has like button with counter
 * 
 * Task 2
 * Show post authors
 * Search by post authors
 * Use https://jsonplaceholder.typicode.com/users
 */

export default function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [inputBodySearch, setInputBodySearch] = useState("");

  const onSearchChange = (e) => {
    setInputSearch(e.target.value);
  };

  const onSearchBodyChange = (e) => {
    setInputBodySearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((array) => {
        setAllPosts(array);
      });
  }, []);

  /**
   * 1. Fetch data on page load
   * 2. Render data
   */

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.includes(inputSearch) && post.body.includes(inputBodySearch)
  );

  return (
    <div className="App">
      <input placeholder="title" onChange={onSearchChange}></input>
      <input placeholder="body" onChange={onSearchBodyChange}></input>
      <p>Total: {filteredPosts.length}</p>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}
