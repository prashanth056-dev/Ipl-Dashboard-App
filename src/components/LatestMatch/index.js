import './index.css'

const LatestMatch = props => {
  const {obj} = props
  console.log(obj)
  const {
    opTeam,
    opTeamLogo,
    date,
    firstInn,
    manOfMatch,
    result,
    secondInn,
    umpires,
    venue,
  } = obj
  return (
    <li className="card">
      <div>
        <p className="head">{opTeam}</p>
        <p className="info">{date}</p>
        <p className="info">{venue}</p>
        <p className="info">{result}</p>
      </div>
      <img src={opTeamLogo} alt={`latest match ${opTeam}`} className="imagg" />

      <div>
        <h1 className="head">First Innings</h1>
        <p className="info">{firstInn}</p>
        <h1 className="head">Second Innings</h1>
        <p className="info">{secondInn}</p>
        <h1 className="head">Man of the MAtch</h1>
        <p className="info">{manOfMatch}</p>
        <h1 className="head">Umpires</h1>
        <p className="info">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
