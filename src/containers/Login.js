import React, { Fragment, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import BTNSubmit from '../components/BTNSubmit';
import { expiredLoged, iduserLogged, nameuserLogged, statusLogged, tokenLoged } from '../store';
import { useRecoilState } from 'recoil';
import jwt_decode from 'jwt-decode'
import API from '../config/services';




const Login = () => {

    //local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [isLoading, setIsLoading] = useState('')
    const [isStatus, setIsStatus] = useState('Login')
    const [isResponse, setIsResponse] = useState('Capture your content in one platform')

    //global state
    const [idUser, setidUser] = useRecoilState(iduserLogged)
    const [isUsername, setisUsername] = useRecoilState(nameuserLogged)
    const [isLogged, setisLogged] = useRecoilState(statusLogged)

    const history = useHistory()
    

    const onLogin = async() => {
        setIsLoading('true')
        try {

            const send = await API.Login('/api/auth/login', {
                email:email,
                password:password
            })

            if(send.status == 'success') {
                // jika sukses login set global state
                const decoded = jwt_decode(send.accessToken)
                setidUser(decoded.iduser)
                setisUsername(decoded.nameuser)
                setisLogged(true)
                history.push('/admin/list/post') 
            } else {
                setIsLoading('')
                setIsStatus('Gagal')
                setIsResponse(send.data.response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Fragment>
            <div className="box-center-1">
                <h3>{isStatus}</h3>
                <p className="font-5" style={styles.tagline}>{isResponse}</p>
                <p style={styles.title}>Email</p>
                <input autoFocus type="text" style={styles.email} placeholder="mail@website.com" onChange={(e) => setEmail(e.target.value)} />
                <p style={styles.title}>Password</p>
                <input type="password" style={styles.password} placeholder="Masukan password" onChange={(e) => setPassword(e.target.value)} />
                <div className='box-flex-between' style={styles.box}>
                    <div><span className='font-5'><input style={styles.checkbox} type="checkbox" value="remember" />Remember me</span></div>
                    <div><a style={styles.link} href='#'>Lupa Password?</a></div>
                </div>
                <BTNSubmit  name="Sign In" onClick={() => onLogin()} isLoading={isLoading} />
                <p style={styles.title}>Not registered yet ? <a style={styles.link} href="/register">Create an Account</a></p>
            </div>
        </Fragment>
    )

}


var styles = {
    tagline: {
        marginTop:'-15px'
    },
    email: {
        background:'#fff',
        border: '2px solid #efefef',
        borderRadius:'35px',
        color:'#666',
        paddingLeft:'30px',
        width:'89%'
    },
    password: {
        background:'#fff',
        border: '2px solid #efefef',
        borderRadius:'35px',
        color:'#666',
        paddingLeft:'30px',
        width:'89%'
    },
    title: {
        paddingTop:'10px',
        fontSize:'14px',
        fontWeight:'600'
    },
    checkbox: {
        width:'20px'
    },
    box : {
        marginTop:'10px',
    },
    link : {
        fontSize:'14px',
        color:'#2c974b',
        fontWeight:'600'
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
        marginTop:'30px'
    }
}

export default Login;
