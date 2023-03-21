import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ( { state } ) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={state.sidebar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<Profile profilePage={state.profilePage} />} />
            <Route path='/dialogs' element={<Dialogs dialogsPage={state.dialogsPage} />} />
            <Route path='/profile' element={<Profile profilePage={state.profilePage}/>} />
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
