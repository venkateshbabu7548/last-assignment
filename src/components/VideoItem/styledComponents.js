import styled from 'styled-components'

export const VideoItemCon = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 320px;
  font-family: roboto;
  text-decoration: none;
`
export const Link = styled.a`
  text-decoration: none;
`
export const List = styled.ul`
  list-style-type: circle;
  list-style: inside;
  padding: 10px;
`
export const Publish = styled.p``
export const Thumbnail = styled.img`
  height: 200px;
  width: 320px;
`
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ViewsCon = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p`
  color: #606060;

  font-size: 17px;
`
export const Year = styled.li`
  color: #606060;
  font-size: 17px;
`
export const Channel = styled.p`
  color: #606060;
  font-size: 17px;
  padding: 0;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-size: 17px;
`
export const Down = styled.div`
  display: flex;
  text-decoration: none;
`
export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 20px;
  margin-right: 7px;
`
