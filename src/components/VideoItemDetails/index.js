import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {BiDislike, BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  Down,
  LeftCon,
  MenuBarCon,
  EachBar,
  Icon,
  BottomHead,
  BottomIcons,
  BottomSec,
  BottomText,
  Icons,
  Link,
  RightCon,
  VideoCon,
  Title,
  SecCon,
  ViewCon,
  TimeCon,
  LikesCon,
  LikeCon,
  Like,
  Time,
  Views,
  Tag,
  Caution,
  Des,
  Line,
  ChannelCon,
  ChannelLogo,
  ChannelTitle,
  ChannelRightCon,
  ChannelSub,
  Description,
  FailureCon,
  FailureImg,
} from './styledComponents'
import {RetryBtn} from '../Home/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    console.log(data)
    const fetchedData = {
      channel: {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      },
      description: data.video_details.description,
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }
    console.log(fetchedData)
    this.setState({
      apiStatus: apiStatusConstants.success,
      videoDetails: fetchedData,
    })
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  OnToggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  OnToggleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderFailureLight = () => (
    <FailureCon>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <Caution color="black">Opps! Something Went Wrong</Caution>
      <Des color="#64748b">
        We are having some trouble to complete your request. Please try again.
      </Des>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </FailureCon>
  )

  renderFailureDark = () => (
    <FailureCon>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure"
      />
      <Caution color="white">Opps! Something Went Wrong</Caution>
      <Des color="#64748b">
        We are having some trouble to complete your request. Please try again.
      </Des>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </FailureCon>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn, onAddVideo} = value

          const onClickSave = () => {
            const {videoDetails} = this.state
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
            onAddVideo(videoDetails)
          }
          const renderSuccessLight = () => {
            const {videoDetails, isLiked, isDisliked, isSaved} = this.state
            const {
              channel,
              videoUrl,
              title,
              viewCount,
              publishedAt,
              description,
            } = videoDetails
            const {name, profileImageUrl, subscriberCount} = channel
            const time = formatDistanceToNow(new Date(publishedAt))
            return (
              <VideoCon>
                <ReactPlayer url={videoUrl} width="100%" height="500px" />
                <Title color="#1e293b">{title}</Title>
                <SecCon color="#475569">
                  <ViewCon>
                    <Views>{`${viewCount} views`}</Views>
                    <TimeCon>
                      <Time>{time}</Time>
                    </TimeCon>
                  </ViewCon>
                  <LikesCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={this.OnToggleLike}
                        like={isLiked}
                        color="black"
                      >
                        <BiLike fontSize="25" />
                        <Tag>Like</Tag>
                      </Like>
                    </LikeCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={this.OnToggleDislike}
                        like={isDisliked}
                        color="black"
                      >
                        <BiDislike fontSize="25" />
                        <Tag>Dislike</Tag>
                      </Like>
                    </LikeCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={onClickSave}
                        like={isSaved}
                        color="black"
                      >
                        <MdPlaylistAdd fontSize="25" />
                        <Tag>Save</Tag>
                      </Like>
                    </LikeCon>
                  </LikesCon>
                </SecCon>
                <Line color="#cbd5e1" />
                <ChannelCon>
                  <ChannelLogo src={profileImageUrl} alt="channel" />
                  <ChannelRightCon>
                    <ChannelTitle color="black">{name}</ChannelTitle>
                    <ChannelSub color="#7e858e">{`${subscriberCount} subscribers`}</ChannelSub>
                  </ChannelRightCon>
                </ChannelCon>
                <Description color="#64748b">{description}</Description>
              </VideoCon>
            )
          }
          const renderSuccessDark = () => {
            const {videoDetails, isLiked, isDisliked, isSaved} = this.state
            const {
              channel,
              videoUrl,
              title,
              viewCount,
              publishedAt,
              description,
            } = videoDetails
            const {name, profileImageUrl, subscriberCount} = channel
            const time = formatDistanceToNow(new Date(publishedAt))
            return (
              <VideoCon>
                <ReactPlayer url={videoUrl} width="100%" height="500px" />
                <Title color="white">{title}</Title>
                <SecCon color="#475569">
                  <ViewCon>
                    <Views>{`${viewCount} views`}</Views>
                    <TimeCon>
                      <Time>{time}</Time>
                    </TimeCon>
                  </ViewCon>
                  <LikesCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={this.OnToggleLike}
                        like={isLiked}
                        color="#cccccc"
                      >
                        <BiLike fontSize="25" />
                        <Tag>Like</Tag>
                      </Like>
                    </LikeCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={this.OnToggleDislike}
                        like={isDisliked}
                        color="#cccccc"
                      >
                        <BiDislike fontSize="25" />
                        <Tag>Dislike</Tag>
                      </Like>
                    </LikeCon>
                    <LikeCon>
                      <Like
                        type="button"
                        onClick={onClickSave}
                        like={isSaved}
                        color="#cccccc"
                      >
                        <MdPlaylistAdd fontSize="25" />
                        <Tag>Save</Tag>
                      </Like>
                    </LikeCon>
                  </LikesCon>
                </SecCon>
                <Line color="#313131" />
                <ChannelCon>
                  <ChannelLogo src={profileImageUrl} alt="channel" />
                  <ChannelRightCon>
                    <ChannelTitle color="white">{name}</ChannelTitle>
                    <ChannelSub color="#7e858e">{`${subscriberCount} subscribers`}</ChannelSub>
                  </ChannelRightCon>
                </ChannelCon>
                <Description color="white">{description}</Description>
              </VideoCon>
            )
          }
          const renderVideoLight = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case 'IN_PROGRESS':
                return this.renderLoader()
              case 'SUCCESS':
                return renderSuccessLight()
              case 'FAILURE':
                return this.renderFailureLight()
              default:
                return null
            }
          }
          const renderLightView = () => (
            <Down color="#f9f9f9">
              <LeftCon bgColor="#f9f9f9">
                <MenuBarCon>
                  <EachBar color="#475569">
                    <Icon>
                      <AiFillHome fontSize={30} />
                    </Icon>

                    <Link href="/home">Home</Link>
                  </EachBar>
                  <EachBar color="#475569">
                    <Icon>
                      <HiFire fontSize={30} />
                    </Icon>

                    <Link href="/trending" color="#475569">
                      Trending
                    </Link>
                  </EachBar>

                  <EachBar color="#475569" bgColor="#ebebeb">
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
              <RightCon bgColor="white">{renderVideoLight()}</RightCon>
            </Down>
          )
          const renderVideoDark = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case 'IN_PROGRESS':
                return this.renderLoader()
              case 'SUCCESS':
                return renderSuccessDark()
              case 'FAILURE':
                return this.renderFailureDark()
              default:
                return null
            }
          }
          const renderDarkView = () => (
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
                  <EachBar color="white">
                    <Icon color="#475569">
                      <HiFire fontSize={30} />
                    </Icon>

                    <Link href="/trending" color="white">
                      Trending
                    </Link>
                  </EachBar>

                  <EachBar bgColor="#475569" color="white">
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
              <RightCon bgColor="#0f0f0f ">{renderVideoDark()}</RightCon>
            </Down>
          )
          return (
            <Container>
              <NavBar />
              <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
