import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const MenuBarCon = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: 10px;

  display: flex;
  flex-direction: column;

  width: 25vw;
`
export const LeftCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => props.bgColor};
`
export const BottomHead = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
`
export const BottomSec = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 25vw;
`
export const BottomIcons = styled.div`
  display: flex;
`
export const Icons = styled.img`
  margin: 15px;
  border-radius: 50px;
  height: 50px;
  width: 50px;
`
export const BottomText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
`
export const VideosSec = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`
export const SearchSec = styled.div`
  display: flex;
  border: 1px solid ${props => props.border};
  align-items: center;
  height: 40px;
  width: 500px;
`
export const NoSearchResultsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SuccessVideosCon = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: 0;
`
export const NoResultsImg = styled.img`
  height: 60%;
  width: 50%;
`
export const Search = styled.input`
  height: 30px;
  width: 88%;
  border: 0;
  padding-left: 10px;
  background-color: transparent;
`
export const SearchBtn = styled.button`
  border: 0;
  width: 12%;
  cursor: pointer;
  height: 30px;
  background-color: ${props => props.bgColor};
`
export const VideosCon = styled.div`
  display: flex;

  min-height: 70vh;
  width: 71vw;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 300px;
  padding: 50px;
`
export const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CancelBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
`
export const GetItBtn = styled.button`
  background-color: transparent;
  color: black;
  height: 40px;
  width: 150px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
`
export const Logo = styled.img`
  height: 50px;
  width: 200px;
`
export const BannerHeading = styled.h1`
  font-family: roboto;
  width: 500px;
  font-weight: 400;
  color: #1e293b;
`
export const Down = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${props => props.color};
`
export const EachBar = styled.li`
  margin: 5px;
  display: flex;
  height: 50px;
  text-decoration: none;
  border-radius: 5px;
  font-family: Roboto;
  color: ${props => props.color};

  font-size: 20px;
  font-weight: 600;
  align-items: center;
  background-color: ${props =>
    props.selected ? props.bgColor : 'transparent'};
  margin-right: 10px;
`
export const FailureCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;
`
export const FailureImg = styled.img`
  height: 80%;
  width: 50%;
`
export const FailureHead = styled.h1`
  color: black;
  font-family: roboto;
  font-size: 40px;
`
export const RetryBtn = styled.button`
  color: white;
  background-color: #00306e;
  font-weight: bold;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  height: 45px;
  width: 100px;
`
export const FailureDes = styled.p`
  color: #606060;
  font-size: 30px;
  text-align: center;
`
export const SuccessViewCon = styled.div`
  height: 100%;
  width: 100%;
`
export const Title = styled.p`
  font-family: roboto;
`
export const Icon = styled.div`
  margin-right: 40px;
  margin-left: 40px;
  color: ${props => (props.selected ? '#ff0000' : props.color)};
`
export const Content = styled.div`
  width: 72vw;

  min-height: 100vh;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  background-color: ${props =>
    props.selected ? props.bgColor : 'transparent'};

  font-weight: ${props => (props.selected ? 'bold' : 400)};
`
