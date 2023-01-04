import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/post.actions";
import Navbar from "../navbar/Navbar";

export default function Article() {
  const post = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  var urlCourante = document.location.href;
  const splitUrlCourante = urlCourante.split("-");
  const postId = splitUrlCourante.slice(-1).pop();

  useEffect(() => {
    if (postId) {
      dispatch(getPost(postId));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* getPost */}
      <p className="mt-5 text-center">title {post.data && post.data.title}</p>
      <div className="border border-danger">
        <div className="row border border-danger">
          <div className="col border border-danger">
            {post.data && post.data.acroche}
          </div>
          <div className="col-4 border border-danger">
            <img
              src={post.data && post.data.picture}
              alt="card-pic"
              className="card-pic w-100"
            />
          </div>
        </div>
        <div className="border border-danger">
          <div className="row border border-danger">
            <div
              className="col border border-danger"
              dangerouslySetInnerHTML={
                post.data && { __html: post.data.message }
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
