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
export const BottomHead = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
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
export const Icon = styled.div`
  margin-right: 40px;
  margin-left: 40px;
  color: ${props => (props.selected ? '#ff0000' : props.color)};
`
export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.color};

  font-weight: ${props => (props.selected ? 'bold' : 400)};
`
export const RightCon = styled.div`
  width: 72vw;
  min-height: 100vh;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 160px;
`
export const TrendingImg = styled.div`
  margin-left: 70px;
  border-radius: 50px;
  height: 90px;
  width: 90px;
  padding-top: 30px;
  padding-left: 30px;
  background-color: ${props => props.bgColor};
`
export const TrendingHead = styled.h1`
  padding-left: 20px;
  font-size: 40px;
  color: ${props => props.color};
`
export const VideosCon = styled.div`
  display: flex;
  min-height: 80vh;
  width: 100%;
  background-color: ${props => props.bgColor};
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
export const SuccessViewCon = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`
