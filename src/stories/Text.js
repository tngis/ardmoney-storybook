import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ primary, backgroundColor, label, textsize, darkmode, hoverscale, rounded, ...props }) => {
  const mode = primary ? 'text-black' : '';
  const mode1 = darkmode ? 'text-white' : 'text-black';
  const mode2 = hoverscale ? 'hover:scale-110' : '';
  return (
    <p
      className={[`
        ${textsize === 'small' ? 'text-md' : ''} 
        ${textsize === 'large' ? 'text-2xl' : ''} 
        ${textsize === 'medium' ? 'text-lg' : ''} 
        `, mode, mode1, mode2].join(' ')}
      {...props}
    >
      {label}
    </p>
  );
};

Text.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  darkmode: PropTypes.bool,

  hoverscale: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  textsize: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Text.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
