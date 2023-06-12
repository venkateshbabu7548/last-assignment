import styled from 'styled-components'

export const Container = styled.div`
  font-family: roboto;
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
  font-weight: 600;
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
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;

  padding: 40px;
`
export const NotFoundImg = styled.img`
  width: 60%;
  height: 80vh;
`
export const NotFoundHead = styled.h1`
  color: ${props => props.color};
`
export const NotFoundDes = styled.p`
  color: ${props => props.color};
  font-size: 20px;
`
export const VideoCon = styled.div``
export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
`
export const SecCon = styled.div`
  font-size: 15px;
  color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewCon = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p`
  font-weight: 400;
`
export const TimeCon = styled.ul`
  list-style:
  list-style-type: circle inside;
`
export const Time = styled.li``

export const LikesCon = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const Like = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: ${props => (props.like ? '#2563eb' : props.color)};
  display: flex;
  align-items: center;
  font-family: roboto;
`
export const LikeCon = styled.li`
  margin: 10px;
`
export const Tag = styled.p`
  font-size: 15px;
  font-weight: 400;
`
export const Line = styled.hr`
  width: 100%;
  border: ${`1px solid ${props => props.color}`};
`
export const ChannelCon = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 20px;
`
export const ChannelRightCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Description = styled.p`
  font-size: 17px;
  color: ${props => props.color};
  padding-left: 80px;
`
export const ChannelTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
`
export const ChannelSub = styled.p`
  font-weight: 400;
  font-size: 17px;
  color: ${props => props.color};
`
export const FailureCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 70%;
  width: 50%;
`
export const Des = styled.p`
  color: ${props => props.color};
  font-size: 20px;
`
export const RetryBtn = styled.button`
  background-color: #3b82f6;
  border: 0;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
`
export const Caution = styled.h1`
  color: ${props => props.color};
`
export const Publish = styled.p``
