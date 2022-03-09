import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { expiredLoged, iduserLogged, statusLogged, nameuserLogged, tokenLoged } from '../store';
import { useRecoilState } from 'recoil';
import jwt_decode from 'jwt-decode'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import API from '../config/services';


function Header() {

    useEffect(() => {
        verifyToken()
    },[]);

    const [idUser, setidUser] = useRecoilState(iduserLogged)
    const [isUsername, setisUsername] = useRecoilState(nameuserLogged)
    const [isLogged, setisLogged] = useRecoilState(statusLogged)

    const history = useHistory()
    
    const verifyToken = () => {
        if(isLogged == true) {
            try {

                API.verifyToken('/api/auth/rtoken')

            } catch (error) {
                if(error.message) {
                    setidUser('')
                    setisUsername('')
                    setisLogged(false)
                    history.push('/login')
                }
            }
        }
    }

    const onLogout = async() => {
        try {

            const logout = await API.Logout('/api/auth/logout')

            if(logout.status == 'success') {
                setidUser('')
                setisUsername('')
                setisLogged(false)
                history.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const toRegister = () => {
        history.push('/register')
    }


  return (
    <div className="header">
        {isLogged == true ? 
            <div className='main' style={styles.main}>
                <div className="box-flex-between">
                    <div className='menu'>
                        <Link className="logo" to="/">Penulis<span style={{color:'#000'}}>.site</span></Link>
                        <Link className="item" to="/">Catatan Programming</Link>
                    </div>
                    <div className='box-nav-right'>
                        <div className='statusProfile'>
                            <p style={styles.p}>{isUsername}</p>
                            <Link onClick={() => onLogout()} style={styles.link} to="#">Logout</Link>
                        </div>
                        <img className="profilePicture" src={process.env.PUBLIC_URL + '/assets/img/profile.png'} />
                    </div>
                </div>
            </div>
            :
            <div className='main' style={styles.main}>
                <div className="box-flex-between">
                    <div className="menu">
                        <Link className="logo" to="/">Penulis<span style={{color:'#000'}}>.site</span></Link>
                        <Link className="item" to="/">Catatan Programming</Link>
                    </div>
                    <div className='box-nav-right'>
                        <button onClick={() => toRegister()} className='btn' type="button" style={styles.btn}>
                            <FontAwesomeIcon style={styles.icon} icon={faPenNib} />
                            Menjadi Penulis
                        </button>
                    </div>
                </div>
            </div>
        }
        
    </div>
  );
}

var styles =  {
    main: {
      paddingBottom:'0px'  
    },
    p: {
        padding:'0px',
        margin:'0px',
        marginBottom:'-5px'
    },
    link: {
        color:'#009946'
    },
    btn: {
        borderRadius: '6px',
        background: '#2c974b',
        border: 'none',
        color: 'white',
        padding: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
        cursor: 'pointer',
        margin: '0px',
        width:'100%',
        borderRadius:'35px',
        display:'inline-flex',
        justifyContent:'center',
        lineHeight:'20px',
        fontSize:'16px'
    },
    icon: {
        marginRight:'10px',
        fontSize:'22px'
    }
}


export default Header;
