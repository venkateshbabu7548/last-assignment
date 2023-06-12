import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  background-color: ${props => props.bgColor};
`
export const LoginResp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  box-shadow: 0px 1px 1px 0px #bfbfbf;
  justify-content: center;
  min-height: 50%;
  border-radius: 8px;
  padding: 40px;
  background-color: ${props => props.bgColor};
`
export const LoginLogo = styled.img`
  width: 250px;
  height: 50px;
`
export const FormCon = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 40px;
  justify-content: center;
`
export const EachField = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;

  margin-top: 10px;
`
export const Label = styled.label`
  color: ${props => props.color};
  font-weight: 600;
`
export const InputField = styled.input`
  padding: 7px;
  color: #475569;
  border: 1px solid #94a3b8;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 5px;
  height: 35px;
`
export const CheckBoxCon = styled.div`
  display: flex;

  align-items: center;

  margin: 10px;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  border: 0;
  border-radius: 7px;
  color: white;
  font-weight: 600;
  width: 95%;
  margin: 10px;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
`
export const CheckBox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`
export const Error = styled.p`
  color: #ff0000;
`
