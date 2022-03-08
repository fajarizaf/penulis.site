import React, { Fragment, useState } from 'react';
import axios from 'axios'
import BTNSubmit from '../components/BTNSubmit';
import API from '../config/services';


const Register = () => {

    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [cpassword, setCPassword] = useState('') 
    const [isLoading, setIsLoading] = useState('')
    const [isStatus, setIsStatus] = useState('Join Cotributor')
    const [isResponse, setIsResponse] = useState('Bergabunglah bersama kami untuk menjadi penulis dan dapatkan benefit yang kami berikan')

    
    
    const onRegister = async() => {
        setIsLoading('true')
        try {
            const send = await API.Register('/api/auth/register', {
                name:name,
                email:email,
                password:password
            })
            if(send.status == 'success') {
                setIsLoading('')
                setIsStatus('Berhasil')
                setIsResponse(send.response)   
            } else {
                setIsLoading('')
                setIsStatus('Gagal')
                setIsResponse(send.response)
            }
        } catch (error) {
            if(error.response) {
                console.log(error.response)
            }
        }
    }

    return (
        <Fragment>
            <div className="box-center-1" style={styles.boxes}>
                <h3>{isStatus}</h3>
                <p className="font-5" style={styles.tagline}>{isResponse}</p>
                <p style={styles.title}>Name</p>
                <input autoFocus type="text" style={styles.email} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                <p style={styles.title}>Email</p>
                <input type="text" style={styles.email} placeholder="mail@website.com" onChange={(e) => setEmail(e.target.value)} />
                <p style={styles.title}>Password</p>
                <input type="password" style={styles.password} placeholder="Min. 8 Character" onChange={(e) => setPassword(e.target.value)} />
                <p style={styles.title}>Confirm</p>
                <input type="password" style={styles.password} placeholder="Min. 8 Character" onChange={(e) => setCPassword(e.target.value)} />
                <BTNSubmit  name="Create an account" onClick={() => onRegister()} isLoading={isLoading} />
                <p style={styles.title}>already have an account ? <a style={styles.link} href="/login">Login Now</a></p>
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

export default Register;
