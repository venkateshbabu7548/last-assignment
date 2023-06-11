import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import NavBar from '../NavBar'
import TrendingVideoItem from '../TrendingVideoItem'

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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onSubmitSuccess = videos => {
    const fetchedData = videos.map(data => ({
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
      },
      id: data.id,
      publishedAt: data.published_at,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      viewCount: data.view_count,
    }))
    this.setState({
      videosList: fetchedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
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
    this.getTrendingVideos()
  }

  renderFailureView = () => (
    <FailureCon>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure-image"
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
          <TrendingVideoItem key={each.id} details={each} />
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
    <Down color="#0f0f0f">
      <LeftCon bgColor="#231f20">
        <MenuBarCon>
          <EachBar>
            <Icon color="#475569">
              <AiFillHome fontSize={30} />
            </Icon>

            <Link href="/home" color="white">
              Home
            </Link>
          </EachBar>
          <EachBar selected bgColor="#475569" color="white">
            <Icon selected color="#475569">
              <HiFire fontSize={30} />
            </Icon>

            <Link href="/trending" color="white" selected>
              Trending
            </Link>
          </EachBar>

          <EachBar color="white">
            <Icon color="#475569">
              <SiYoutubegaming fontSize={30} />
            </Icon>

            <Link href="/gaming" color="white">
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
            <HiFire fontSize={32} color="#ff0000" />
          </TrendingImg>
          <TrendingHead color="white">Trending</TrendingHead>
        </Top>
        <VideosCon bgColor="#0f0f0f">{this.renderVideos()}</VideosCon>
      </RightCon>
    </Down>
  )

  renderLightView = () => (
    <Down color="#f9f9f9">
      <LeftCon bgColor="#f9f9f9">
        <MenuBarCon>
          <EachBar color="#475569">
            <Icon>
              <AiFillHome fontSize={30} />
            </Icon>

            <Link href="/home">Home</Link>
          </EachBar>
          <EachBar bgColor="#ebebeb" selected>
            <Icon selected>
              <HiFire fontSize={30} />
            </Icon>

            <Link href="/trending" color="black" selected>
              Trending
            </Link>
          </EachBar>

          <EachBar color="#475569">
            <Icon>
              <SiYoutubegaming fontSize={30} />
            </Icon>

            <Link href="/gaming" color="#475569">
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
            <HiFire fontSize={32} color="#ff0000" />
          </TrendingImg>
          <TrendingHead color="black">Trending</TrendingHead>
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
export default Trending
