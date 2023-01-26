import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

ToggleStatus.propTypes = {
  checked: PropTypes.bool,
};

function ToggleStatus({ checked }) {
  const [toggleMode, setToggleMode] = React.useState({
    checked,
  });
  const toggleChange = (e) => {
    setToggleMode((pre) => ({ ...pre, checked: e.target.checked }));
  };
  return (
    <FormControlLabel
      control={<Switch size="small" value={toggleMode.checked} checked={toggleMode.checked} onChange={toggleChange} />}
      label={toggleMode.checked ? 'RTL' : 'LTR'}
      labelPlacement="bottom"
      sx={{ ml: 0 }}
    />
  );
}

export default ToggleStatus;
