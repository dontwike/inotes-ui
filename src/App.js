import NotePage from "./Components/NotePage";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import UpdatePost from "./Components/UpdatePost";
import ReadPost from "./Components/ReadPost";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/createnotes" element={<CreatePost title='Create Post'/>}/>
          <Route path="/updateNotes/:id" element={<UpdatePost/>}/>
          <Route path="/read/:id" element={<ReadPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
