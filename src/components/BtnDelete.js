import React, {Fragment, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from 'react-loading';

function BtnDelete(props) {

  const [isLoading, setIsLoading] = useState(props.isLoading);
  
  const onClick = props.onClick

  useEffect(() => {
    if(props.isUpdate == 'true') {
      setIsLoading(false)
    }
  })

  const onAction = () => {
      setIsLoading(true)
      onClick()
  }

  return (
    <Fragment>
       {
            isLoading == true ?
            <Loading type="spin" color="#666" width="24px" height="24px" style={styles.btn} />
            :
            <FontAwesomeIcon icon={faTrashAlt} color={props.color} style={styles.btn} onClick={()=> onAction()}/>
        }
    </Fragment>
  );
}

var styles = {
    btn: {
      float: "right",
      marginTop:5,
      marginRight:10,
      cursor:'pointer',
      width:18,
      height:18
    }
  }
export default BtnDelete;
