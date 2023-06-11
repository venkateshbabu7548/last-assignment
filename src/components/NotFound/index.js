import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

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
  NotFoundImg,
  NotFoundHead,
  NotFoundDes,
} from './styledComponents'

const NotFound = () => {
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
      <RightCon bgColor="#1e293b">
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
          alt="not found"
        />
        <NotFoundHead color="white">Page Not Found</NotFoundHead>
        <NotFoundDes color="#475569">
          We are sorry,the page you requested could not be found
        </NotFoundDes>
      </RightCon>
    </Down>
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
      <RightCon bgColor="#ebebeb">
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHead color="black">Page Not Found</NotFoundHead>
        <NotFoundDes color="#475569">
          We are sorry,the page you requested could not be found
        </NotFoundDes>
      </RightCon>
    </Down>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
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
export default NotFound
