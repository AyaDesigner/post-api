/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import Post from './Post';

/**
 * TODO: Create a newsfeed with posts.
 * Use https://jsonplaceholder.typicode.com/
 * Each post should be searchable
 * Each post has comments, that are loaded on request
 * Each post has like button with counter
 */

export default function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [inputSearch, setInputSearch] = useState('');





  const searchPost = () => {
    const resultsOfSearch = allPosts.filter(post => post.title.includes(inputSearch));
    setAllPosts(resultsOfSearch);
  }



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
  return (
    <div className="App">
      <input onChange={(e) => setInputSearch(e.target.value)}></input>
      <button onClick={searchPost}>Search by title</button>
      {allPosts.map((post) => (
        <div key={post.id}>
          <Post post={post} />

        </div>
      ))}
    </div>
  );
}
