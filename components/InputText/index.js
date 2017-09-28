import styled from 'styled-components';
import InputLabel from '../InputLabel';

const InputContainer = styled.label`
  display: block;
  margin-bottom: 16px;
`

const InputText = styled.input`
  border: none;
  background-color: white;
  font-size: 16px;
  padding: 8px;
  display: block;
  width: 100%;
`

export default (props) => (
  <InputContainer>
    {console.log(props.theme)}
    <InputLabel>{props.label}</InputLabel>
    <InputText {...props} />
  </InputContainer>
)
