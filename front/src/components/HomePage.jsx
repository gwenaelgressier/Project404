import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import ViewArticle from "../components/Viewarticle/ViewArticle";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import { isEmpty } from "./Utils.jsx";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  const loadMore = () => {
    //si on arivent en bas de la scroll barre alor on r'affiche les 5 prochains posts
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true); //on affiche les 5 prochains posts
    }
  };

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts(count)); //recupere les 5 prochains posts
      setLoadPost(false); //passe a false pour ne pas charger de nouveaux posts
      setCount(count + 5); //incremente le nombre de posts a recuperer
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, dispatch, count]);

  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <p className="mt-5 text-center">Cybersecurite</p>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/cybersecurite/addarticle"
        >
          <p className="mt-4 text-center">ajouter un nouvelle article</p>
        </NavLink>
        <div className="thread-container">
          <ul>
            {!isEmpty(posts[0]) &&
              posts.map((post) => {
                return <ViewArticle post={post} key={post._id} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
