import styled from 'styled-components';
import { get } from 'lodash';

export default styled.button`
  border: none;
  background-color: ${props=>get(props,'theme.colors.main')};
  color:white;
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 100%;

  .wf-active &{
    font-family: 'KometPro-Regular'
  }
`
