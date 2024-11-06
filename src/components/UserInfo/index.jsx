import { Container, NameText, Progress, UserPicture } from '../../styles/modules/-userInfo';
import PropTypes from 'prop-types';

export const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
UserInfo.propTypes = {
  nome: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  percentual: PropTypes.number.isRequired,
};
