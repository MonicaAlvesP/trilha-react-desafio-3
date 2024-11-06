import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Input } from '../../components/Input';

import { Container, Column, Wrapper, Title, TitleLogin, SubtitleLogin, Terms } from '../../styles/layouts/_register';

export const Register = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

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
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Nome Completo"
                leftIcon={<MdPerson />}
                name="nome"
                control={control}
                rules={{ required: 'Nome é obrigatório' }}
              />
              {errors.nome && <span>{errors.nome.message}</span>}

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                rules={{
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Formato de e-mail inválido',
                  },
                }}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                rules={{
                  required: 'Senha é obrigatória',
                  minLength: {
                    value: 6,
                    message: 'Senha deve ter no mínimo 6 caracteres',
                  },
                }}
              />
              {errors.senha && <span>{errors.senha.message}</span>}

              <Button title="Criar minha conta" type="submit" />
            </form>

            <Terms>
              <p>Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
              <p>Já tenho conta. <Link to="/login">Fazer login</Link></p>
            </Terms>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
