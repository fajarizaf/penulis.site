import React, { Fragment } from 'react';
import '../../assets/css/Form.css';
import BtnIcon from '../../components/BtnIcon';
import Button from '../../components/Button';
import EditorLoader from '../../components/contenloader/EditorLoader';
import TitleLoader from '../../components/contenloader/TitleLoader';
import Editor from '../../components/Editor';
import EditTitle from '../../components/EditTitle';
import SidebarPost from './component/SidebarPost';
import axios from 'axios';
import API from '../../config/services';


class EditPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            form: {
                idpost: '',
                titlepost:'',
                contentpost:'',
                catpost:'',
                tagpost:'',
                authorpost:1,
            },
            config: {
                metatitle:'',
                metadesc:'',
                metarobots:'',
            },
            isLoading: false,
            isDisabled:false,
            isStatus:'',
            isVisible:true,
            isLoader:true
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const datapost = await API.getpostID('/api/admin/post/'+id)
        this.setState({form: datapost})
        this.setState({config: datapost['config']})
        this.setState({isLoader:false})
    }
  
    onChange = (event) => {
        let newdata = {...this.state.form}
        newdata[event.target.name] = event.target.value
        this.setState({
            form: newdata
        },() => {console.log(this.state.form)})
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

    onUpdate = async () => {
        this.setState({isLoading:true})
        const request = {...this.state.form,config: {...this.state.config}} 
        const data = await API.UpdatePost('/api/admin/post', request);
        if(data.status == 'success') {
            this.setState({isLoading:false})
        } else {
            this.setState({isLoading:false})
        }
    }

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
                <div className="container">
            
                    {/* content editor */}
                    <div className="main">
                        <div className="formfield">
                            <TitleLoader isLoader={this.state.isLoader} />
                            <EditorLoader isLoader={this.state.isLoader} />
                            <EditTitle titlepost={this.state.form.titlepost} onTitle={this.onTitle} />
                        </div>
                        <div className="formfield" style={{marginTop:'0px'}}>
                            <Editor form={this.state.form}  onEditor={this.onEditor}  />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <SidebarPost 
                        catname={this.state.form.catname} 
                        catpost={this.state.form.catpost}
                        tagpost={this.state.form.tagpost}
                        metatitle={this.state.config.metatitle}
                        metadesc={this.state.config.metadesc}
                        metarobots={this.state.config.metarobots}
                        onChange={this.onChange}
                        onConfig={this.onConfig}
                        isVisible={this.state.isVisible}
                    />
                </div>
                <Button name="Update" onClick={this.onUpdate} isLoading={this.state.isLoading}  />
                <BtnIcon onClick={this.onClickSettings} />
            </Fragment>
        )
    }
}

export default EditPost;

