import PostItem from "../PostItem";

export default function PostsList({ posts }) {

  let postsView;

  if (posts.length) {
    postsView = posts.map(post => (
      <PostItem key={post.id} data={post} />
    ))
  } else {
    postsView = <p className="fs-1">Записей пока нет</p>
  }

  return (
    <div className="post-list">
      {postsView}
    </div>
  ) 
}