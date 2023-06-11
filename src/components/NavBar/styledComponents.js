import styled from 'styled-components'

export const NavbarCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: roboto;
  background-color: ${props => props.color};
`
export const Navbar = styled.div`
  display: flex;
  width: 90%;

  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img`
  height: 50px;
  width: 200px;
`
export const OptionsCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  align-items: center;
  padding: 0;
`
export const EachItem = styled.li`
  margin-left: 20px;
  margin-right: 20px;
`
export const Profile = styled.img`
  height: 40px;
  width: 40px;
`
export const ChangeBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`
export const LogoutBtn = styled.button`
  color: #4f46e5;
  border: 2px solid #4f46e5;
  border-radius: 10px;
  background-color: transparent;
  height: 35px;
  width: 100px;
  font-weight: 500;
  cursor: pointer;
`
