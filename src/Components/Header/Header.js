import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">Intuitive quiz</div>
      <hr
        className="divider"
        style={{ height: '5px', backgroundColor: 'grey' }}
      />
    </div>
  );
};

export default Header;
