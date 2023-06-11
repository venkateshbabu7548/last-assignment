import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginResp,
  LoginLogo,
  FormCon,
  EachField,
  Label,
  InputField,
  CheckBoxCon,
  LoginButton,
  CheckBox,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',

    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/home')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderDarkMode = () => {
    const {username, showErrorMsg, password, errorMsg} = this.state
    return (
      <LoginContainer bgColor="#1e293b">
        <LoginResp bgColor="#0f0f0f">
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="website logo"
          />
          <FormCon onSubmit={this.submitForm}>
            <EachField>
              <Label htmlFor="username" color="white">
                USERNAME
              </Label>
              <InputField
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </EachField>
            <EachField>
              <Label htmlFor="password" color="white">
                PASSWORD
              </Label>
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
                id="password"
              />
            </EachField>
            <CheckBoxCon>
              <CheckBox type="checkbox" id="checkbox" />
              <Label htmlFor="checkbox" color="white">
                Show Password
              </Label>
            </CheckBoxCon>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <Error>*{errorMsg}</Error>}
          </FormCon>
        </LoginResp>
      </LoginContainer>
    )
  }

  renderLightMode = () => {
    const {username, showErrorMsg, password, errorMsg} = this.state
    return (
      <LoginContainer bgColor="white">
        <LoginResp bgColor="white">
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormCon onSubmit={this.submitForm}>
            <EachField>
              <Label htmlFor="username" color="#475569">
                USERNAME
              </Label>
              <InputField
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </EachField>
            <EachField>
              <Label htmlFor="password" color="#475569">
                PASSWORD
              </Label>
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
                id="password"
              />
            </EachField>
            <CheckBoxCon>
              <CheckBox type="checkbox" id="checkbox" />
              <Label htmlFor="checkbox" color="#475569">
                Show Password
              </Label>
            </CheckBoxCon>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <Error>*{errorMsg}</Error>}
          </FormCon>
        </LoginResp>
      </LoginContainer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      ;<Redirect to="/home" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <div>
              {isDarkModeOn ? this.renderDarkMode() : this.renderLightMode()}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
