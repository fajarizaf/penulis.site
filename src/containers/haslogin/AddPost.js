import React, { Fragment } from 'react';
import '../../assets/css/App.css';
import '../../assets/css/Form.css';
import BtnIcon from '../../components/BtnIcon';
import Button from '../../components/Button';
import Editor from '../../components/Editor';
import SidebarPost from './component/SidebarPost';
import EditTitle from '../../components/EditTitle';
import API from '../../config/services';

class AddPost extends React.Component {

    constructor() {
        super();
        const idUser = localStorage.getItem('iduserLogged')
        this.state = {
            form: {
                titlepost:'Judul Postingan',
                contentpost:'Apa yang anda pikirkan',
                catpost:1,
                tagpost:'',
                authorpost:idUser,
            },
            config:{
                idpost:'',
                metatitle:'',
                metadesc:'',
                metarobots:'noindex, nofollow'
            },
            isLoading: false,
            isDisabled:false,
            isStatus:'',
            isVisible:false
        }
    }
  
    onChange = (event) => {
        let newdata = {...this.state.form}
        newdata[event.target.name] = event.target.value
        this.setState({
            form: newdata
        })
    }

    onConfig = (event) => {
        let newdata = {...this.state.config}
        newdata[event.target.name] = event.target.value
        this.setState({
            config: newdata
        },() => {
            console.log(this.state.config)
        })
    }

    onTitle = (event) => {
        let newdata = {...this.state.form}
        newdata['titlepost'] = event.target.value
        this.setState({
            form: newdata
        })
    }

    onEditor = (event) => { 
        let newdata = {...this.state.form}
        newdata['contentpost'] = event.target.value
        this.setState({
            form: newdata
        })
    }

    stripHtml = (html) => {
        var temporalDivElement = document.createElement("div");
        temporalDivElement.innerHTML = html;
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }

    onSubmit = async () => {

        this.setState({isLoading:true})
        const data = {...this.state.form,config: {...this.state.config}} 
    
        const response = await API.CreatePost('/api/admin/post', data)
        
        if(response.status == 'success') {

            let newdata = {...this.state.config}
            newdata['idpost'] = data.id
            if(this.state.config.metatitle == '') {
                newdata['metatitle'] = this.state.form.titlepost
            }
            if(this.state.config.metadesc == '') {
                let str = this.state.form.contentpost
                newdata['metadesc'] = this.stripHtml(str.substring(0,157))
            }
            this.setState({
                config: newdata
            })

            this.setState({isLoading:false})
        } else {
            this.setState({isLoading:false})
        }
    }

    editorConfiguration = {
        placeholder: 'Apa yang anda pikirkan...'
    };

    onClickSettings = () => {
        if(this.state.isVisible == true) {
            this.setState({ isVisible: false })
        } else {
            this.setState({ isVisible: true })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container" style={{height:'100vh'}}>
                    {/* content editor */}
                    <div className="main">
                        <div className="formfield">
                            <EditTitle titlepost={this.state.form.titlepost} onTitle={this.onTitle} />
                        </div>
                        <div className="formfield" style={{marginTop:'0px'}}>
                            <Editor form={this.state.form}  onEditor={this.onEditor} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <SidebarPost 
                        onChange={this.onChange}
                        onConfig={this.onConfig}
                        isVisible={this.state.isVisible}
                    />
                </div>
                <Button name="Create" onClick={this.onSubmit} isLoading={this.state.isLoading}  />
                <BtnIcon onClick={this.onClickSettings} />
            </Fragment>
        )
    }
}

export default AddPost;

