import logo from '../../assets/img/logo-dio 1.svg';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from '../../styles/layouts/_header';

export const Header = ({ autenticado }) => {


  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" variant="outline" />
              <Button title="Cadastrar" variant="purple" />
            </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {
  autenticado: PropTypes.bool.isRequired,
};
