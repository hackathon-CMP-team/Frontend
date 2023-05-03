import React from 'react';
import zxcvbn from 'zxcvbn';

function PasswordStrengthMeter({ password }) {
  const testResult = zxcvbn(password);
  console.log(password);
  const percentage = (testResult.score * 100) / 4;
  console.log(percentage);
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${percentage}%`,
    background: funcProgressColor(),
    height: '7px'
  });
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar"
          style={changePasswordColor()}
        />
      </div>
    </>
  );
}

export default PasswordStrengthMeter;
