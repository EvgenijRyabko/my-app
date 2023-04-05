import "./App.css";
import Header from "./Header/Header";
import NavbarContainer from "./Navbar/NavbarContainer";
import Profile from "./Profile/Profile";
import DialogsContainer from "./Dialogs/DialogsContainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
