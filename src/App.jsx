import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AddNewPost from './components/AddNewPost';
import EditPostPage from './components/EditPostPage/EditPostPage';
import './App.css';


export default function App() {

  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/new" element={<AddNewPost />} />
        <Route path="/posts/:id" element={<EditPostPage />} />
      </Routes>
    </div>
  )
}