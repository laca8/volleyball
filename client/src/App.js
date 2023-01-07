import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/features/Header";
import Add from "./pages/game/Add";
import Match from "./pages/game/Match";
import Video from "./pages/video/Video";
import Report from "./pages/report/Report";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import { useSelector } from "react-redux";
import AddUser from "./pages/admin/AddUser";
import AddPlayer from "./pages/admin/AddPlayer";
function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={userInfo?.user?.name ? <Add /> : <Login />} />
        <Route
          path="/match"
          element={userInfo?.user?.name ? <Match /> : <Login />}
        />
        <Route
          path="/video"
          element={userInfo?.user?.name ? <Video /> : <Login />}
        />
        <Route
          path="/report"
          element={userInfo?.user?.name ? <Report /> : <Login />}
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={userInfo?.user?.isAdmin ? <AddUser /> : <Add />}
        />
        <Route
          path="/players"
          element={userInfo?.user?.isAdmin ? <AddPlayer /> : <Add />}
        />
      </Routes>
    </Router>
  );
}

export default App;
