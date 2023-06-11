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

  align-items: center;
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
