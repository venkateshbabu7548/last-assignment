import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import NavBar from '../NavBar'
import GamingVideoItem from '../GamingVideoItem'

import {
  Container,
  LeftCon,
  BottomSec,
  BottomHead,
  MenuBarCon,
  BottomIcons,
  BottomText,
  Icon,
  Icons,
  EachBar,
  Link,
  Down,
  RightCon,
  Top,
  TrendingImg,
  TrendingHead,
  VideosCon,
  FailureCon,
  FailureImg,
  FailureHead,
  FailureDes,
  RetryBtn,
  SuccessViewCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onSubmitSuccess = videos => {
    const fetchedData = videos.map(data => ({
      id: data.id,

      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      viewCount: data.view_count,
    }))
    this.setState({
      videosList: fetchedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <FailureCon>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailureDes>
        We are having some trouble to complete your request. Please try again.
      </FailureDes>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </FailureCon>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <SuccessViewCon>
        {videosList.map(each => (
          <GamingVideoItem key={each.id} details={each} />
        ))}
      </SuccessViewCon>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderDarkView = () => (
    <Down color="#0f0f0f" data-testid="gaming">
      <LeftCon bgColor="#231f20">
        <MenuBarCon>
          <EachBar>
            <Icon color="#475569">
              <AiFillHome fontSize={30} />
            </Icon>

            <Link href="/" color="white">
              Home
            </Link>
          </EachBar>
          <EachBar color="white">
            <Icon color="#475569">
              <HiFire fontSize={30} />
            </Icon>

            <Link href="/trending" color="white">
              Trending
            </Link>
          </EachBar>

          <EachBar bgColor="#475569" selected color="white">
            <Icon color="#475569" selected>
              <SiYoutubegaming fontSize={30} />
            </Icon>

            <Link href="/gaming" color="white" selected>
              Gaming
            </Link>
          </EachBar>
          <EachBar color="white">
            <Icon color="#475569">
              <RiMenuAddLine fontSize={30} />
            </Icon>

            <Link href="/saved-videos" color="white">
              Saved videos
            </Link>
          </EachBar>
        </MenuBarCon>
        <BottomSec>
          <BottomHead color="white">CONTACT US</BottomHead>
          <BottomIcons>
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </BottomIcons>
          <BottomText color="white">
            Enjoy! Now to see your channels and recommendations!
          </BottomText>
        </BottomSec>
      </LeftCon>
      <RightCon>
        <Top bgColor="#231f20">
          <TrendingImg bgColor="#313131">
            <SiYoutubegaming fontSize={32} color="#ff0000" />
          </TrendingImg>
          <TrendingHead color="white">Gaming</TrendingHead>
        </Top>
        <VideosCon bgColor="#0f0f0f">{this.renderVideos()}</VideosCon>
      </RightCon>
    </Down>
  )

  renderLightView = () => (
    <Down color="#f9f9f9" data-testid="gaming">
      <LeftCon bgColor="#f9f9f9">
        <MenuBarCon>
          <EachBar color="#475569">
            <Icon>
              <AiFillHome fontSize={30} />
            </Icon>

            <Link href="/">Home</Link>
          </EachBar>
          <EachBar color="#475569">
            <Icon>
              <HiFire fontSize={30} />
            </Icon>

            <Link href="/trending" color="black">
              Trending
            </Link>
          </EachBar>

          <EachBar bgColor="#ebebeb" selected>
            <Icon selected>
              <SiYoutubegaming fontSize={30} />
            </Icon>

            <Link href="/gaming" selected color="#475569">
              Gaming
            </Link>
          </EachBar>
          <EachBar color="#475569">
            <Icon>
              <RiMenuAddLine fontSize={30} />
            </Icon>

            <Link href="/saved-videos" color="#475569">
              Saved videos
            </Link>
          </EachBar>
        </MenuBarCon>
        <BottomSec>
          <BottomHead color="#313131">CONTACT US</BottomHead>
          <BottomIcons>
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <Icons
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </BottomIcons>
          <BottomText color="#313131">
            Enjoy! Now to see your channels and recommendations!
          </BottomText>
        </BottomSec>
      </LeftCon>
      <RightCon>
        <Top bgColor="#d7dfe9">
          <TrendingImg bgColor="#e2e8f0">
            <SiYoutubegaming fontSize={32} color="#ff0000" />
          </TrendingImg>
          <TrendingHead color="black">Gaming</TrendingHead>
        </Top>
        <VideosCon bgColor="#f4f4f4">{this.renderVideos()}</VideosCon>
      </RightCon>
    </Down>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <Container data-testid="trending">
              <NavBar />
              <div>
                {isDarkModeOn ? this.renderDarkView() : this.renderLightView()}
              </div>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
