import React, { Fragment, useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import DetailPostLoader from '../../components/contenloader/DetailPostLoader';

import moment from 'moment'
import axios from 'axios';
import API from '../../config/services';
require("moment/min/locales.min")
moment.locale('ID')

function Postdetail(props) {
  
  const slug = props.match.params.slug

  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    loadData()
  },[]);

  const loadData = async () => {
    const response = await API.getPost('/api/post/'+slug)
    if(response[0].idpost != '') {
      await setPost(response)
      setIsLoading(false)
    }
  }

  function createMarkup(val) {
    return {__html: val};
  }

  return (
    <Fragment>
        <div className="main">
        <DetailPostLoader isLoading={isLoading} />
        {
            post.map((key,value) => (
              <div key={value}>
                <Helmet>
                  <title>{key.titlepost}</title>
                  <meta name="description" content={key.config.metadesc}/>
                  <meta name="robots" content={key.config.metarobots} />
                </Helmet>
                <p style={{textAlign:"center",marginTop:40}} className="datepost">{moment(key.datepost).format('LL')} • {key.author.name}</p>
                <h1 style={{textAlign:"center"}} className="font-1">{key.titlepost}</h1>
                <div className="paragraph"></div>
                <div className="paragraph" dangerouslySetInnerHTML={createMarkup(key.contentpost)} style={{marginTop:'35px'}} />
              </div>
            ))
        }
        </div>
    </Fragment>
  );
}

export default Postdetail;
