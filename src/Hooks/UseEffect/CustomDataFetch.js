import React, { useEffect, useState } from "react";
import axios from "axios";

function CustomDataFetch() {
  const [feeds, setFeed] = useState([]);
  const [postid, setPostid] = useState(1);
  const [postidbtn, setPostidbtn] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
      .then((response) => setFeed(response.data))
      .catch((err) => console.error(err));
  }, [postidbtn]);

  const handleChange = (e) => {
    setPostid(e.target.value);
  };
  const handleClick = () => {
    setPostidbtn(postid);
  };

  return (
    <div>
      <input type="text" value={postid} onChange={handleChange} />
      <button onClick={handleClick}>Fetch Data</button>
      <h3>{feeds.title} </h3>
    </div>
  );
}

export default CustomDataFetch;
