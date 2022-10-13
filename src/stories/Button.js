import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, darkmode, hoverscale, rounded, disabled, color, ...props }) => {

  const mode = hoverscale ? 'hover:scale-110' : '';

  return (
    <button
      type="button"
      className={[`
        ${rounded === 'xl' ? 'rounded-xl' : ''} 
        ${rounded === '2xl' ? 'rounded-2xl' : ''}
        ${rounded === '3xl' ? 'rounded-3xl' : ''}
        ${rounded === 'full' ? 'rounded-full' : ''}
        ${size === 'small' ? 'text-sm' : ''} 
        ${size === 'large' ? 'text-lg' : ''} 
        ${size === 'medium' ? 'text-md' : ''} 
        ${color === 'darkmode' ? 'bg-[#1d1f45]' : ''} 
        ${color === 'disabled' ? 'bg-[#a7a7a7]' : ''} 
        ${color === 'primary' ? 'bg-gradient-to-r from-[#11d3fe] to-[#706afe]' : ''} 
        ${color === 'secondary' ? 'border border-[#11d3fe] text-black font-normal' : ''} 
        py-2 px-7 font-semibold text-white duration-150 rounded-xl`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  darkmode: PropTypes.bool,

  hoverscale: PropTypes.bool,

  disabled: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  rounded: PropTypes.oneOf(['xl', '2xl', '3xl', 'full']),

  color: PropTypes.oneOf(['primary', 'disabled', 'secondary', 'darkmode']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
