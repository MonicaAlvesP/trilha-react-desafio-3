import { ButtonContainer } from '../../styles/modules/_button';
import PropTypes from 'prop-types';

export const Button = ({ title, variant, onClick, ...props }) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {title}
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
