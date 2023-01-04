import "./App.scss";
import { UidContext } from "./components/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUser } from "./actions/user.actions";
import Log from "./components/Log/Log";
import Dev from "./components/dev/Dev";
import DevHtmlCss from "./components/dev/DevHtmlCss";
import DevScss from "./components/dev/DevScss";
import DevJs from "./components/dev/DevJs";
import DevReact from "./components/dev/DevReact";
import DevLibrairie from "./components/dev/DevLibrairie";
import DevCybersecurite from "./components/dev/DevCybersecurite";
import Article from "./components/Viewarticle/Article";
import Gaming from "./components/gaming/Gaming";
import AddArticle from "./components/addArticle/AddArticle";
import DevOpenclassrooms from "./components/dev/DevOpenclassrooms";

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  //a chaque fois que app est appellé controle du token
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data)) //fait evoluer le uid
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]); //[uid] à chaque foit que uid evolue tu rejoue App

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<Log />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/dev/htmlcss" element={<DevHtmlCss />} />
          <Route path="/dev/scss" element={<DevScss />} />
          <Route path="/dev/js" element={<DevJs />} />
          <Route path="/dev/react" element={<DevReact />} />
          <Route path="/dev/librairie" element={<DevLibrairie />} />
          <Route path="/dev/cybersecurite" element={<DevCybersecurite />} />
          <Route
            path="/dev/cybersecurite/addarticle"
            element={<AddArticle />}
          />
          <Route path="/dev/openclassrooms" element={<DevOpenclassrooms />} />
          <Route
            path="/dev/openclassrooms/addarticle"
            element={<AddArticle />}
          />
          <Route path="/dev/cybersecurite/:titleid" element={<Article />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
}

export default App;
