import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

export default function EditPostPage() {
  const [postData, setPostData] = useState([]);
  const [postContent, setPostContent] = useState();
  const {id} = useParams();
  const navigate = useNavigate();

  let getPostData = (id) => {
    fetch('http://localhost:7777/posts')
      .then(res => res.json())
      .then(data => {
        setPostData(data.find(item => item.id == id));
      })
  }

  useEffect(() => {
    getPostData(id);
  }, []);


  useEffect(() => {
    setPostContent(postData.content);
  }, [postData]);

  let changePost = (e) => {
    e.preventDefault();
    let newPost = {
      id: postData.id,
      content: postContent
    }

    fetch('http://localhost:7777/posts', {
      method: 'POST',
      body: JSON.stringify(newPost)
    }).then(res => {
      if (res.ok) {
        navigate('/');
      }
    })
  }

  let deletePost = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        navigate('/');
      }
    })
  }

  let handleEnterText = (e) => {
    setPostContent(e.target.value);
  }

  return (
    <form className="mt-4">
      <p className="fs-1">Редактирование записи</p>
      <textarea 
        rows="5" 
        className="form-control my-4" 
        required
        value={postContent}
        onInput={handleEnterText}
      ></textarea>
      <div className="text-end">
        <button className="btn btn-success" onClick={changePost}>Изменить</button>
        <button className="btn btn-danger mx-2" onClick={deletePost}>Удалить</button>
        <Link to="/" className="btn btn-outline-secondary">Назад</Link>
      </div>
    </form>
  )
}