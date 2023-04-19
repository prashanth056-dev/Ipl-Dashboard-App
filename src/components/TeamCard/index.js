import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {obj} = props
  const {id, name, url} = obj

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="list-elem">
        <img src={url} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
