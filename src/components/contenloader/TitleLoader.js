import React, {Fragment} from 'react';
import ContentLoader from 'react-content-loader'

function TitleLoader(props) {

  const isLoader = props.isLoader;

  return (
      <Fragment>
        {
        isLoader ?
            <ContentLoader 
                speed={2}
                height={80}
                viewBox="0 0 800 160"
                backgroundColor="#f7fafc"
                foregroundColor="#ecebeb"
                {...props}
                style={styles.layout}
            >
          
                <rect x="0" y="16" rx="6" ry="6" width="380" height="18" />
                <rect x="0" y="46" rx="6" ry="6" width="280" height="18" />
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

export default TitleLoader;
