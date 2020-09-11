import React from 'react';

const SwitchButton = ({ click, isActive }) => {
  return (
    <button
      className="button"
      onClick={click}
    >
      {isActive ? 'STOP' : "START"}
    </button>
  )
}

export default SwitchButton;