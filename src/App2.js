import React, { useEffect, useState } from "react";
import "./styles.css";

function App2() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default App2;
