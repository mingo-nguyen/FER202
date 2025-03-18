import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>

    </Router>

  );
}

export default App;
