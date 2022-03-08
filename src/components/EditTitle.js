import React, {Fragment} from 'react';
import ContentEditable from "react-contenteditable";
import '../assets/css/App.css';

function EditTitle(props) {
    const onTitle = props.onTitle
  return (
    <Fragment>
        <ContentEditable 
            style={{fontSize:'2.5rem',color:'#1a202c'}} 
            className="font-1"
            html={props.titlepost} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={onTitle}
            spellcheck="false"
            />
    </Fragment>
  );
}

export default EditTitle;
