import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function BtnIcon(props) {
  const onClick = props.onClick
  return (
    <button className="btnsettingPost" onClick={onClick}>
       <FontAwesomeIcon icon={faCog}  />
    </button>
  )
}

export default BtnIcon;
