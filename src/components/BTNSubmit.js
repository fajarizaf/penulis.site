import React from 'react';
import Loading from 'react-loading';

function BTNSubmit(props) {
  const onClick = props.onClick  
  return (
    <button type="button" className='btn' style={styles.btn} value={props.name}  onClick={()=>onClick()}>
       {
            props.isLoading ?
            <Loading type="spin" color="#fff" width="24px" height="24px" />
            :
            <span>{props.name}</span>
        }
    </button>
  );
}


var styles = {
    btn: {
        borderRadius: '6px',
        background: '#2c974b',
        border: 'none',
        color: 'white',
        padding: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
        cursor: 'pointer',
        margin: '0px',
        width:'100%',
        borderRadius:'35px',
        marginTop:'30px'
    }
}

export default BTNSubmit;
