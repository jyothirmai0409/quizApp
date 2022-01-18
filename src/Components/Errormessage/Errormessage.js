import React from 'react';

const Errormessage = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'orange',
        padding: '5px',
        textAlign: 'center',
        borderRadius: '4px',
        color: 'white',
        textTransform: 'capitalize',
        marginBottom: '10px',
        fontSize: '20px'
      }}
    >
      {children}
    </div>
  );
};
export default Errormessage;
