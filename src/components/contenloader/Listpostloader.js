import React, {Fragment} from 'react';
import ContentLoader from 'react-content-loader'

function Listpostloader(props) {

  const isLoading = props.isLoading;

  return (
      <Fragment>
        {
        isLoading ?
            <ContentLoader 
                speed={2}
                width={800}
                height={120}
                viewBox="0 0 800 160"
                backgroundColor="#f7fafc"
                foregroundColor="#ecebeb"
                {...props}
                style={styles.layout}
            >
                <rect x="48" y="6" rx="3" ry="3" width="88" height="10" /> 
                <rect x="48" y="26" rx="3" ry="3" width="52" height="10" /> 
                <rect x="0" y="56" rx="6" ry="6" width="100%" height="10" /> 
                <rect x="0" y="78" rx="6" ry="6" width="80%" height="10" /> 
                <rect x="0" y="100" rx="6" ry="6" width="60%" height="10" /> 
                <circle cx="20" cy="20" r="20" />
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

export default Listpostloader;
