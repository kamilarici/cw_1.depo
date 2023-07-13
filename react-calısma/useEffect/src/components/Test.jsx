import { useEffect, useState } from "react";

const Test = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log("component ilk yüklendiğinde");

    fetch(`https://jsonplaceholder.typicode.com/posts/todos/1`)
      .then((res) => res.json())
      .then((json) => console.log(json));
    let interval = setInterval(() => console.log("interval çalıştı"), 1000);
    return () => {
      console.log("component destoreyed");
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    console.log("component render oldu");
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <br />
      <button onClick={() => setPostId(postId + 1)}>artır</button>
      <h1>conponent gösterildi</h1>
    </div>
  );
};

export default Test;
