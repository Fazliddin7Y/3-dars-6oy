// src/pages/Comments.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
