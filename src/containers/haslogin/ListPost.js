import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom"; 
import '../../assets/css/App.css';
import BtnDelete from '../../components/BtnDelete';
import AdminListPostloader from '../../components/contenloader/AdminListPostLoader';
import { useRecoilState, useRecoilValue } from 'recoil';
import { expiredLoged, iduserLogged } from '../../store';
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../config/services';


function ListPost() {

    //local state
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState('false');
    const [isLoader, setIsLoader] = useState(true);
    const [Token, setToken] = useState('');

    //global state
    const [idUser, setidUser] = useRecoilState(iduserLogged)
    const [expiredLogged, setexpiredLogged] = useRecoilState(expiredLoged)
    
    const history = useHistory()

    useEffect(() => {
      loadData(idUser)
    },[]);

  
    const loadData = async (id) => {
      const load = await API.ListPost('/api/admin/posts/'+id)
      setPost(load)
      setIsLoader(false)
    }

    const onDelete = async (id) => {

        const Delete = await API.DeletePost('/api/admin/post/'+id)
  
        if(Delete.status == 'success') {
            setIsUpdate('true')
            loadData(idUser)
        } else {
            setIsUpdate('true')
        }
    }

  return (
    <Fragment>
      <div className="main">
        <Link to="/admin/add/post">
            <button className="btn-2" style={styles.btn}>
              <FontAwesomeIcon style={styles.icon} icon={faPenNib} />
              Create Post
            </button>
        </Link>
        <AdminListPostloader isLoader={isLoader} />
        <AdminListPostloader isLoader={isLoader} />
        <AdminListPostloader isLoader={isLoader} />
        <AdminListPostloader isLoader={isLoader} />
        {
            post.map((key,value) => (
              <div className="adminlist" key={value}>
                <div style={{width:'85%'}} className="row">
                    <p className="font-3">{key.titlepost}</p>
                    <p className="font-3" style={{color:'#8e9095'}}>published : {key.datepost}</p>
                </div>
                <div style={{width:'15%'}} className="row">
                    <Link to={{pathname:'/admin/edit/post/'+key.idpost}}>
                        <button style={{float:'right'}} className="btn-1">Sunting</button>
                    </Link>
                    <BtnDelete isUpdate={isUpdate} isLoading={isLoading} color="#666" onClick={(e)=> onDelete(key.idpost)} />
                </div>
              </div>
            ))
        } 
      </div>
    </Fragment>
  );
}

var styles = {
  btn: {
    lineHeight:'24px'
  },
  icon: {
      marginRight:'10px',
      fontSize:'20px'
  }
}

export default ListPost;
