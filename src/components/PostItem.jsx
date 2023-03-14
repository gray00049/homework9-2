import { Link } from "react-router-dom";

export default function PostItem({ data }) {
  let timeLost = (Date.now() - data.created) / 1000;
  let timeLostText;


  if ((timeLost / 60) < 1) {
    timeLostText = `${timeLost.toFixed(0)} сек. назад.`
  } else if ((timeLost / 60) < 60) {
    timeLostText = `${(timeLost / 60).toFixed(0)} мин. назад.`
  } else if ((timeLost / 3600) < 24) {
    timeLostText = `${(timeLost / 3600).toFixed(0)} час. назад.`
  } else {
    timeLostText = `${(timeLost / 86400).toFixed(0)} дн. назад.`
  }

  return (
    <Link 
      to={'posts/' + data.id} 
      className="mb-3 p-3 border rounded d-block text-dark text-decoration-none"
    >
      <div className="row flex-nowrap">
        <img 
          className="rounded-circle" 
          src='https://i.pravatar.cc/50' 
          alt="user-avatar" 
          style={{ width: 75 + 'px' }}
        />
        <div>
          <p className="fw-bold mb-0">Carrie Wyman</p>
          <p className="mb-0 text-muted">
            {data.changed ? "Изменил(-а) " : "Написал(-а) "}
            {timeLostText}
          </p>
        </div>
      </div>
      <p className="mt-3 fs-3">{data.content}</p>
    </Link>
  )
}