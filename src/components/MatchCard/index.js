import './index.css'

const MatchCard = props => {
  const {obj} = props
  const {opTeam, opTeamLogo, matchStatus, result} = obj

  const clsName = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <div className="card-item">
      <img
        src={opTeamLogo}
        alt={`competing team ${opTeam}`}
        className="inner-img"
      />
      <p className="head">{opTeam}</p>
      <p className="info">{result}</p>
      <p className={`info ${clsName}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
