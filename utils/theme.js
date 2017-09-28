import { ThemeProvider } from 'styled-components';

const theme = {
  colors:{
    main:'#7E86E9'
  }
}

export default (props) => <ThemeProvider {...props } theme={theme} />
