import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;

  margin: 20px;
`
export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  width: 450px;
  margin-right: 15px;
  height: 250px;
`
export const ContentCard = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
`
export const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.color};
`
export const Channel = styled.p`
  font-size: 17px;
  color: #606060;
  margin-right: 10px;
`
export const ViewsCon = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  border: 1px solid black;
`
export const YearCon = styled.ul`
  list-style-type: circle;
  list-style: inside;
  padding: 0;

  border: 1px solid black;
`
export const Year = styled.li`
  font-size: 17px;
`
export const Publish = styled.p``
