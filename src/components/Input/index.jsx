import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

import { InputContainer, InputText, IconContainer } from '../../styles/modules/_input';

export const Input = ({ leftIcon, name, control, ...rest }) => {


  return (
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <InputText {...field} {...rest} />}
      />

    </InputContainer>
  )
}

Input.propTypes = {
  leftIcon: PropTypes.element,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

