import './index.css'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const filteredData = teams.map(each => ({
      id: each.id,
      name: each.name,
      url: each.team_image_url,
    }))
    this.setState({list: filteredData, isLoading: false})
    console.log(filteredData)
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div className="mainBgg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <Link to="/" className="mainBgg">
            <div className="row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="dashboard">IPL Dashboard</h1>
            </div>
            <ul className="teamsContainer">
              {list.map(each => (
                <TeamCard key={each.id} obj={each} />
              ))}
            </ul>
          </Link>
        )}
      </div>
    )
  }
}
export default Home
