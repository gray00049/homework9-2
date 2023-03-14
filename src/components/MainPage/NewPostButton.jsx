import { Link } from "react-router-dom"

export default function NewPostButton() {
  return (
    <div className="my-4 text-center">
      <Link to="posts/new" className="btn btn-outline-primary">Добавить новый пост</Link>
    </div>
  )
}