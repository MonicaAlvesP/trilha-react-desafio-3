import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper } from '../../styles/layouts/_login';

import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Input } from '../../components/Input';

export const Register = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome" control={control} rules={{ required: 'Nome é obrigatório' }} />
              {errors.nome && <span>{errors.nome.message}</span>}
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="purple" type="submit" />
            </form>
            <Row>
              <p>Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
              <span>já tenho conta <Link to="/login">Fazer login</Link></span>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
