import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Listpostloader from '../../components/contenloader/Listpostloader';

import moment from 'moment';
import API from '../../config/services';
require("moment/min/locales.min");
moment.locale('ID');

function ListPost() {

    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => { 
      loadData()
    },[]);
  
    const loadData = async () => {
      const data = await API.getPosts('/api/posts')
      await setPost(data)
      await setIsLoading(false)
    }

  return (
    <div className="post">
          <Listpostloader isLoading={isLoading} />
          <Listpostloader isLoading={isLoading} />
          <Listpostloader isLoading={isLoading} />
          <Listpostloader isLoading={isLoading} />
          <Listpostloader isLoading={isLoading} />
          {
            post.map((key,value) => (
              <div className="postitem" key={value}>
                <p className="datepost">{moment(key.datepost).format('LL')}</p> 
                <Link to={{pathname:'post/'+key.slugpost}}><h4 className="font-4">{key.titlepost}</h4></Link> 
              </div>
            ))
          }
    </div>
  )
}

export default ListPost;
