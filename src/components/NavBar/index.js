import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
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
  PopupCon,
  PopupDes,
  PopupBtnCon,
  PopupBtn,
} from './styledComponents'

const NavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeOn, changeTheme} = value
      const changeMode = () => {
        changeTheme()
      }

      const confirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderDarkView = () => (
        <NavbarCon color="#181818">
          <Navbar>
            <Link to="/">
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            </Link>
            <OptionsCon>
              <EachItem>
                <ChangeBtn
                  type="button"
                  onClick={changeMode}
                  data-testid="theme"
                >
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
                <Popup
                  modal
                  trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                >
                  {close => (
                    <PopupCon>
                      <PopupDes>Are you sure, ypu want to logout?</PopupDes>
                      <PopupBtnCon>
                        <PopupBtn
                          type="button"
                          color="#cccccc"
                          bgColor="transparent"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupBtn>
                        <PopupBtn
                          type="button"
                          color="#ffffff"
                          bgColor="#3b82f6"
                          onClick={confirmLogout}
                        >
                          Confirm
                        </PopupBtn>
                      </PopupBtnCon>
                    </PopupCon>
                  )}
                </Popup>
              </EachItem>
            </OptionsCon>
          </Navbar>
        </NavbarCon>
      )

      const renderLightView = () => (
        <NavbarCon color="#f9f9f9">
          <Navbar>
            <Link to="/">
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </Link>
            <OptionsCon>
              <EachItem>
                <ChangeBtn
                  type="button"
                  onClick={changeMode}
                  data-testid="theme"
                >
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
                <Popup
                  modal
                  trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                >
                  {close => (
                    <PopupCon>
                      <PopupDes>Are you sure, ypu want to logout</PopupDes>
                      <PopupBtnCon>
                        <PopupBtn
                          type="button"
                          color="#cccccc"
                          bgColor="transparent"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupBtn>
                        <PopupBtn
                          type="button"
                          color="#ffffff"
                          bgColor="#3b82f6"
                          onClick={confirmLogout}
                        >
                          Confirm
                        </PopupBtn>
                      </PopupBtnCon>
                    </PopupCon>
                  )}
                </Popup>
              </EachItem>
            </OptionsCon>
          </Navbar>
        </NavbarCon>
      )
      return <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
