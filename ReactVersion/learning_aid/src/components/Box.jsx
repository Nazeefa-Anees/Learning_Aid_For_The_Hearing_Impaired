import React from 'react';

export default function Box(props) {
  return (
    <div className="box flex justify-center items-center"
  style={{
    left: `${props.left}px`,
    top: `${props.top}px`
  }}
>
  <p className='font-custom text-7xl whitespace-pre-wrap'>{props.text}</p>
</div>

  );
}
