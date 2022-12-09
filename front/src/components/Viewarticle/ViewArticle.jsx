import React from "react";
import "./viewArticle.scss";

export default function ViewArticle({ post }) {
  return (
    <div id="ViewArticle" className="my-3">
      <p>title: {post.title}</p>
      <p>le :{post.updatedAt}</p>
      <p>{post.message}</p>
      {post.picture && (
        <div className="card-image">
          <img src={post.picture} alt="card-pic" className="card-pic" />
        </div>
      )}
    </div>
  );
}
