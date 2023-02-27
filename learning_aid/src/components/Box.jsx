import React from 'react';

export default function Box(props) {
  return (
    <div
      className="box"
      style={{
        left: `${props.left}px`,
        top: `${props.top}px`
      }}
    />
  );
}