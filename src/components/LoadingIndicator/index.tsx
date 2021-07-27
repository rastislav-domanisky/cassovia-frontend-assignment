import React, { ReactElement } from 'react';
import './style.css';

function LoadingIndicator(): ReactElement {
  return (
    <div className="lds">
      <div />
      <div />
      <div />
    </div>
  );
}

export default LoadingIndicator;
