import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNewPost() {
  const postContent = useRef();
  const navigate = useNavigate();

  let handleSendForm = (e) => {
    e.preventDefault();
    let newPost = {
      id: 0,
      content: postContent.current.value
    }

    fetch('http://localhost:7777/posts', {
      method: 'POST',
      body: JSON.stringify(newPost)
    }).then(res => {
      console.log(res)
      if (res.ok) {
        navigate('/');
      }
    })
  }

  return (
    <form className="mt-4" onSubmit={handleSendForm}>
      <p className="fs-1">Добавление новой записи</p>
      <textarea 
        rows="5" 
        className="form-control my-4" 
        required
        ref={postContent}
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary mx-3">Опубликовать</button>
        <Link to="/" className="btn btn-outline-danger">Отменить</Link>
      </div>
    </form>
  )
}