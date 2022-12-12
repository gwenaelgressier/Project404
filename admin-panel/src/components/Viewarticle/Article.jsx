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
        <div className="text-center border border-danger">image 1</div>
        <div className="row border border-danger">
          <div className="col-4 border border-danger">image 2</div>
          <div className="col border border-danger">
            {post.data && post.data.acroche}
          </div>
          <div className="col-4 border border-danger">image 3</div>
        </div>
        <div className="border border-danger">
          <div className="text-center border border-danger">image 4</div>
          <div className="row border border-danger">
            <div className="col-4 border border-danger">image 5</div>
            <div
              className="col border border-danger"
              dangerouslySetInnerHTML={
                post.data && { __html: post.data.message }
              }
            ></div>
            <div className="col-4 border border-danger">image 6</div>
          </div>
        </div>
        <div className="border border-danger">
          <div className="text-center border border-danger">image 7</div>
          <div className="row border border-danger">
            <div className="col-4 border border-danger">image 8</div>
            <div
              className="col border border-danger"
              dangerouslySetInnerHTML={
                post.data && { __html: post.data.message2 }
              }
            ></div>
            <div className="col-4 border border-danger">image 9</div>
          </div>
        </div>
      </div>
    </div>
  );
}
