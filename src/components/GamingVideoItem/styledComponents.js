import styled from 'styled-components'

export const VideoItem = styled.li`
  margin: 10px;

  width: 30%;
`
export const Link = styled.a`
  text-decoration: none;
  display: flex;

  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-weight: 500;
  font-family: roboto;
  font-size: 18px;
`
export const Views = styled.p`
  color: ${props => props.color};
  font-weight: 400;
  font-family: roboto;
  font-size: 18px;
`
export const Image = styled.img`
  height: 40%;
  width: 100%;
`
