import Log from "./components/Log/Log";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUser } from "./actions/user.actions";
import { UidContext } from "./components/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import Dev from "./components/dev/Dev";
import DevCybersecurite from "./components/dev/DevCybersecurite";
import DevHtmlCss from "./components/dev/DevHtmlCss";
import DevJs from "./components/dev/DevJs";
import DevLibrairie from "./components/dev/DevLibrairie";
import DevReact from "./components/dev/DevReact";
import DevSass from "./components/dev/DevSass";
import Gaming from "./components/gaming/Gaming";
import AddArticle from "./components/addArticle/AddArticle";

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
          {!userData.isAdmin && <Route path="/" element={<Log />} />}
          {userData.isAdmin && (
            <>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/dashboard/dev" element={<Dev />} />
              <Route path="/dashboard/dev/htmlcss" element={<DevHtmlCss />} />
              <Route path="/dashboard/dev/sass" element={<DevSass />} />
              <Route path="/dashboard/dev/js" element={<DevJs />} />
              <Route path="/dashboard/dev/react" element={<DevReact />} />
              <Route
                path="/dashboard/dev/librairie"
                element={<DevLibrairie />}
              />
              <Route
                path="/dashboard/dev/cybersecurite"
                element={<DevCybersecurite />}
              />
              <Route
                path="/dashboard/dev/cybersecurite/addarticle"
                element={<AddArticle />}
              />
              <Route path="/dashboard/gaming" element={<Gaming />} />
            </>
          )}

          {!userData.isAdmin && <Route path="*" element={<Log />} />}
          {userData.isAdmin && <Route path="*" element={<AdminDashboard />} />}
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
}

export default App;
