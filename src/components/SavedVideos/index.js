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
  SuccessViewCon,
  NoVideosCon,
  NoVideosImg,
  NoVideosTitle,
  NoVideosDes,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeOn, savedVideos} = value
      console.log(isDarkModeOn)

      const renderVideosLight = () => (
        <SuccessViewCon>
          {savedVideos.map(each => (
            <TrendingVideoItem key={each.id} details={each} />
          ))}
        </SuccessViewCon>
      )

      const noSavedVideosLight = () => (
        <NoVideosCon>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosTitle color="black">No saved videos found</NoVideosTitle>
          <NoVideosDes>
            You can save your videos while watching them.
          </NoVideosDes>
        </NoVideosCon>
      )

      const noSavedVideosDark = () => (
        <NoVideosCon>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosTitle color="white">No saved videos found</NoVideosTitle>
          <NoVideosDes>
            You can save your videos while watching them.
          </NoVideosDes>
        </NoVideosCon>
      )

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

                <Link href="/trending">Trending</Link>
              </EachBar>

              <EachBar color="#475569">
                <Icon>
                  <SiYoutubegaming fontSize={30} />
                </Icon>

                <Link href="/gaming" color="#475569">
                  Gaming
                </Link>
              </EachBar>
              <EachBar bgColor="#ebebeb" selected>
                <Icon selected>
                  <RiMenuAddLine fontSize={30} />
                </Icon>

                <Link href="/saved-videos" color="black" selected>
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
              <TrendingHead color="black">Saved Videos</TrendingHead>
            </Top>
            <VideosCon bgColor="#f4f4f4">
              {savedVideos.length > 0
                ? renderVideosLight()
                : noSavedVideosLight()}
            </VideosCon>
          </RightCon>
        </Down>
      )
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
              <EachBar>
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
              <EachBar color="white" bgColor="#475569" selected>
                <Icon selected>
                  <RiMenuAddLine fontSize={30} />
                </Icon>

                <Link
                  href="/saved-videos"
                  selected
                  bgColor="#475569"
                  color="white"
                >
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
              <TrendingHead color="white">Saved Videos</TrendingHead>
            </Top>
            <VideosCon bgColor="#0f0f0f">
              {savedVideos.length > 0
                ? renderVideosLight()
                : noSavedVideosDark()}
            </VideosCon>
          </RightCon>
        </Down>
      )
      return (
        <Container data-testid="saved-videos">
          <NavBar />
          <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
