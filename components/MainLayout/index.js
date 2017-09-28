import MyThemeProvider from '../../utils/theme';
// import HeaderWithData from '../Header';
import HeaderWithData from '../Header/withData';

export default ({children}) => (
  <MyThemeProvider>
    <div>
      <HeaderWithData />
      {children}
    </div>
  </MyThemeProvider>
);
