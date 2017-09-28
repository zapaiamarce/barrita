import SignupInWithData from  '../components/SignupIn/withData';
import MainLayout from '../components/MainLayout';
import withData from '../lib/withData';

export default withData((props) => (
  <MainLayout>
    <SignupInWithData></SignupInWithData>
  </MainLayout>
));
