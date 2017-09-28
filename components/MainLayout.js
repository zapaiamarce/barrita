import MyThemeProvider from '../utils/theme';
import withData from '../lib/withData';
import Header from '../components/Header';

export default ({children}) => (
  <MyThemeProvider>
    <div>
      <Header /> 
      {children}
    </div>
  </MyThemeProvider>
);
