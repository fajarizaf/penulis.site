import React from 'react';
import Loading from 'react-loading';

function Button(props) {
  const onClick = props.onClick  
  return (
    <button className="btnActions" onClick={()=>onClick()}>
       {
            props.isLoading ?
            <Loading type="spin" color="#fff" width="24px" height="24px" />
            :
            <span>{props.name}</span>
        }
    </button>
  );
}

export default Button;
