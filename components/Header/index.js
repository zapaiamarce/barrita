import Button from '../Button';
import InputText from '../InputText';
import Link from 'next/link'
import styled from 'styled-components';

const Header = ({user}) => (
  <Container>
    <Link href="/">
      <a>Home</a>
    </Link>
    {user &&
      <span>Hola {user.fullname}</span>
    }
  </Container>
)
Header.defaultProps = {
  user:{}
}
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const handleSubmit = next => e => {
  e.preventDefault();
  next(e);
}

export default Header;
