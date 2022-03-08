import React, {Fragment} from 'react';
import ContentLoader from 'react-content-loader'

function DetailPostLoader(props) {

  const isLoading = props.isLoading;

  return (
      <Fragment>
        {
        isLoading ?
            <ContentLoader 
                speed={2}
                width={800}
                height={620}
                viewBox="0 0 800 160"
                backgroundColor="#f7fafc"
                foregroundColor="#ecebeb"
                {...props}
                style={styles.layout}
            >
          
                <rect x="210" y="56" rx="6" ry="6" width="380" height="12" />
                <rect x="40" y="126" rx="20" ry="20" width="700" height="42" />
                <rect x="80" y="206" rx="20" ry="20" width="620" height="42" />
                <rect x="180" y="286" rx="20" ry="20" width="420" height="42" />
                <rect x="40" y="366" rx="20" ry="20" width="700" height="42" />
                <rect x="0" y="536" rx="6" ry="6" width="800" height="12" />
                <rect x="0" y="566" rx="6" ry="6" width="600" height="12" />
                <rect x="0" y="596" rx="6" ry="6" width="500" height="12" />
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

export default DetailPostLoader;
