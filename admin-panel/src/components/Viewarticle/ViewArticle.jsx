import React from "react";
import "./viewArticle.scss";
import { Plus } from "../media/svg/Plus";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

export default function ViewArticle({ post }) {
  const dispatch = useDispatch();
  const deletePostDispatch = () => dispatch(deletePost(post._id));

  const erasePost = async () => {
    try {
      await deletePostDispatch();
      dispatch(deletePost(post));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="ViewArticle" className="my-3 d-flex p-3">
      {post.picture && (
        <div className="card-image col-4">
          <img src={post.picture} alt="card-pic" className="card-pic" />
        </div>
      )}
      <div className="d-flex justify-content-between w-100">
        <div className="ms-3 ">
          <p>title: {post.title}</p>
          <p>le :{post.updatedAt}</p>
          <p>{post.message}</p>
        </div>
        <div>
          <Plus
            width="12px"
            cursor="pointer"
            className="plus"
            onClick={erasePost}
          />
        </div>
      </div>
    </div>
  );
}