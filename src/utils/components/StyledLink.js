import React from 'react';
import { Link } from 'react-router-dom';

function StyledLink({ text, to }) {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: '#413d3d8e',
        fontSize: '1rem',
        alignSelf: 'center',
        fontWeight: '600'
      }}
      to={to}
    >
      {text}
    </Link>
  );
}

export default StyledLink;
