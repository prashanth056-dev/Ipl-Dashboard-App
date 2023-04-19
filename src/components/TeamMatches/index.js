import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {recentList: [], latestList: [], url: '', id: '', isLoading: true}

  componentDidMount() {
    this.getList()
  }

  convertDetails = obj => ({
    opTeam: obj.competing_team,
    opTeamLogo: obj.competing_team_logo,
    date: obj.date,
    firstInn: obj.first_innings,
    id: obj.id,
    manOfMatch: obj.man_of_the_match,
    matchStatus: obj.match_status,
    result: obj.result,
    secondInn: obj.second_innings,
    umpires: obj.umpires,
    venue: obj.venue,
  })

  getList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatData = Object.values(data)
    const imageUrl = formatData[0]
    const latestMatch = formatData[1]
    const recentMatch = formatData[2]
    this.setState({
      url: imageUrl,
      latestList: this.convertDetails(latestMatch),
      recentList: recentMatch,
      id,
      isLoading: false,
    })
  }

  render() {
    const {url, latestList, recentList, id, isLoading} = this.state
    console.log(id)
    const formatList = recentList.map(each => this.convertDetails(each))

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className={`mainBg ${id}`}>
            <img src={url} alt="team banner" className="cover-image" />
            <h1 className="matches">Latest Matches</h1>
            <li className="margin">
              <LatestMatch key={latestList.id} obj={latestList} />
            </li>
            <li className="match-container">
              {formatList.map(each => (
                <MatchCard key={each.id} obj={each} />
              ))}
            </li>
          </ul>
        )}
      </div>
    )
  }
}
export default TeamMatches
