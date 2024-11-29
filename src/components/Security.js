import React from 'react';
import './Security.css';

const Security = () => {
  return (
    <div className="security-container">
      <form className="formStyle">
        <label htmlFor="password" className="labelStyle">Security</label>
        <div className="input-container">
          <input
            type="password"
            id="password"
            className="inputStyle"
            placeholder="Update password"
          /> 
         <i className="fas fa-edit iconStyle"></i>
        </div>
      </form>
    </div>
  );
};

export default Security;
