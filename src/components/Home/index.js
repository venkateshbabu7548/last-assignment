import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillHome, AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import NavBar from '../NavBar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  LeftCon,
  BottomSec,
  BottomHead,
  MenuBarCon,
  BottomIcons,
  BottomText,
  VideosSec,
  Icons,
  EachBar,
  Icon,
  Link,
  Down,
  Content,
  Banner,
  Logo,
  BannerHeading,
  BannerTop,
  SearchSec,
  CancelBtn,
  GetItBtn,
  Search,
  SearchBtn,
  NoSearchResultsCon,
  VideosCon,
  FailureCon,
  FailureHead,
  FailureDes,
  FailureImg,
  NoResultsImg,
  RetryBtn,
  SuccessViewCon,
  SuccessVideosCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
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

  getHomeVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
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

  toggleBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <Banner>
      <BannerTop>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <CancelBtn type="button" onClick={this.toggleBanner}>
          <AiOutlineClose font-size={20} />
        </CancelBtn>
      </BannerTop>
      <BannerHeading>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerHeading>
      <GetItBtn type="button">GET IT NOW</GetItBtn>
    </Banner>
  )

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    this.getHomeVideos()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getHomeVideos()
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

  noSearchResultsView = () => (
    <NoSearchResultsCon>
      <NoResultsImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHead>No Search results found</FailureHead>
      <FailureDes>Try different key words or remove search filter</FailureDes>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </NoSearchResultsCon>
  )

  renderSuccessVideos = () => {
    const {videosList} = this.state
    return (
      <SuccessVideosCon>
        {videosList.map(each => (
          <VideoItem key={each.id} details={each} />
        ))}
      </SuccessVideosCon>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <SuccessViewCon>
        {videosList.length > 0
          ? this.renderSuccessVideos()
          : this.noSearchResultsView()}
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

  renderLightView = () => {
    const {showBanner, searchInput} = this.state
    return (
      <Down color="#f9f9f9">
        <LeftCon bgColor="#f9f9f9">
          <MenuBarCon>
            <EachBar selected bgColor="#ebebeb" color="black">
              <Icon selected>
                <AiFillHome fontSize={30} />
              </Icon>

              <Link href="/home" color="black" selected>
                Home
              </Link>
            </EachBar>
            <EachBar color="#231f20">
              <Icon>
                <HiFire fontSize={30} />
              </Icon>

              <Link href="/trending" color="#231f20">
                Trending
              </Link>
            </EachBar>

            <EachBar color="#231f20">
              <Icon>
                <SiYoutubegaming fontSize={30} />
              </Icon>

              <Link href="/gaming" color="#231f20">
                Gaming
              </Link>
            </EachBar>
            <EachBar color="#231f20">
              <Icon>
                <RiMenuAddLine fontSize={30} />
              </Icon>

              <Link href="/saved-videos" color="#231f20">
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
        <Content>
          <div>{showBanner && this.renderBanner()}</div>
          <VideosSec>
            <SearchSec border="#909090">
              <Search
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearch}
              />
              <SearchBtn
                type="button"
                onClick={this.onSearch}
                bgColor="#909090"
              >
                <AiOutlineSearch />
              </SearchBtn>
            </SearchSec>
            <VideosCon>{this.renderVideos()}</VideosCon>
          </VideosSec>
        </Content>
      </Down>
    )
  }

  renderDarkView = () => {
    const {showBanner, searchInput} = this.state
    return (
      <Down color="#181818">
        <LeftCon bgColor="#231f20">
          <MenuBarCon>
            <EachBar selected bgColor="#475569">
              <Icon selected>
                <AiFillHome fontSize={30} />
              </Icon>

              <Link href="/home" color="white" selected>
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
        <Content>
          <div>{showBanner && this.renderBanner()}</div>
          <VideosSec>
            <SearchSec border="#424242">
              <Search
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearch}
                bgColor="#424242"
              />
              <SearchBtn
                type="button"
                onClick={this.onSearch}
                bgColor="#424242"
              >
                <AiOutlineSearch />
              </SearchBtn>
            </SearchSec>
            <VideosCon>{this.renderVideos()}</VideosCon>
          </VideosSec>
        </Content>
      </Down>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <Container data-testid="home">
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
export default Home
