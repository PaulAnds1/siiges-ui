import React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import PropTypes from 'prop-types';
import '../../styles/buttons/ButtonAdd.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Typography } from '@mui/material';

export default function ButtonAdd({ text, onClick }) {
  return (
    <ButtonUnstyled className="buttonAdd" onClick={onClick}>
      <PersonAddIcon sx={{ verticalAlign: 'middle' }} />
      &nbsp;&nbsp;
      <Typography variant="p" sx={{ verticalAlign: 'middle' }}>{text}</Typography>
    </ButtonUnstyled>
  );
}

ButtonAdd.defaultProps = {
  onClick: () => {}, // Default empty function
};

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
