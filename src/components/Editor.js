import React, { Fragment } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import BallonEditor from '@ckeditor/ckeditor5-build-balloon-block';

console.log(BallonEditor.builtinPlugins.map( plugin => plugin.pluginName ))

class Editor extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Fragment>
                <CKEditor
                    editor={ BallonEditor }
                    data={this.props.form.contentpost}
                    config={{
                        placeholder: 'Apa yang anda pikirkan...',
                        ckfinder: {
                            uploadUrl: 'https://skarid.herokuapp.com/upload'
                        },
                        image: {
                            toolbar: ['imageStyle:full','imageStyle:side','imageStyle:alignLeft','imageStyle:alignCenter','imageStyle:alignRight','|','imageTextAlternative'],
                            styles: ['full','side','alignLeft','alignCenter','alignRight']
                        }
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.props.onEditor({target:{value:data}})
                    }}
                    spellcheck="false"
                />
            </Fragment>
        );
    }
    
}

export default Editor;
