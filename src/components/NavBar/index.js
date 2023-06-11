import {Link} from 'react-router-dom'
import {HiMoon} from 'react-icons/hi'
import {BiSun} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import {
  NavbarCon,
  Navbar,
  Logo,
  OptionsCon,
  Profile,
  EachItem,
  LogoutBtn,
  ChangeBtn,
} from './styledComponents'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeOn, changeTheme} = value
      const changeMode = () => {
        changeTheme()
      }

      const renderDarkView = () => (
        <NavbarCon color="#181818">
          <Navbar>
            <Link to="/home">
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            </Link>
            <OptionsCon>
              <EachItem>
                <ChangeBtn type="button" onClick={changeMode}>
                  <BiSun font-size={35} color="white" />
                </ChangeBtn>
              </EachItem>
              <EachItem>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </EachItem>
              <EachItem>
                <LogoutBtn>Logout</LogoutBtn>
              </EachItem>
            </OptionsCon>
          </Navbar>
        </NavbarCon>
      )

      const renderLightView = () => (
        <NavbarCon color="#f9f9f9">
          <Navbar>
            <Link to="/home">
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </Link>
            <OptionsCon>
              <EachItem>
                <ChangeBtn type="button" onClick={changeMode}>
                  <HiMoon font-size={35} />
                </ChangeBtn>
              </EachItem>
              <EachItem>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </EachItem>
              <EachItem>
                <LogoutBtn>Logout</LogoutBtn>
              </EachItem>
            </OptionsCon>
          </Navbar>
        </NavbarCon>
      )
      return <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
    }}
  </ThemeContext.Consumer>
)

export default NavBar
