import React, {Fragment} from 'react';
import ContentLoader from 'react-content-loader'

function AdminListPostloader(props) {

  const isLoader = props.isLoader;

  return (
      <Fragment>
        {
        isLoader ?
          <ContentLoader
            width={680}
            height={130}
            viewBox="10 10 100 20"
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
          >
            <rect x="4" y="2" rx="1" ry="1" width="4" height="117" />
            <rect x="7" y="117" rx="1" ry="1" width="669" height="4" />
            <rect x="672" y="3" rx="1" ry="1" width="4" height="113" />
            <rect x="5" y="2" rx="1" ry="1" width="669" height="4" />
            
            <rect x="34" y="32" rx="6" ry="6" width="500" height="15" />
            <rect x="34" y="75" rx="6" ry="6" width="320" height="10" />
            <rect x="555" y="20" rx="6" ry="6" width="100" height="40" />
            <rect x="625" y="70" rx="3" ry="3" width="20" height="25" />
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

export default AdminListPostloader;
