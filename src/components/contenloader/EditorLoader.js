import React, {Fragment} from 'react';
import ContentLoader from 'react-content-loader'

function EditorLoader(props) {

  const isLoader = props.isLoader;

  return (
      <Fragment>
        {
        isLoader ?
            <ContentLoader 
                speed={2}
                width={800}
                height={820}
                viewBox="0 0 800 160"
                backgroundColor="#f7fafc"
                foregroundColor="#ecebeb"
                {...props}
                style={styles.layout}
            >
                <rect x="0" y="12" rx="6" ry="6" width="100%" height="12" />
                <rect x="0" y="38" rx="6" ry="6" width="100%" height="12" />
                <rect x="0" y="64" rx="6" ry="6" width="100%" height="12" />
                <rect x="0" y="92" rx="6" ry="6" width="80%" height="12" />
                <rect x="0" y="142" rx="6" ry="6" width="100%" height="300" />
                <rect x="0" y="472" rx="6" ry="6" width="30%" height="22" />
                <rect x="0" y="512" rx="6" ry="6" width="100%" height="12" />
                <rect x="0" y="542" rx="6" ry="6" width="100%" height="12" />
                <rect x="0" y="572" rx="6" ry="6" width="100%" height="12" />
            </ContentLoader>
        :
        '' 
        }
      </Fragment>   
  );
}

var styles = {
    layout: {
      
    }
  }

export default EditorLoader;
