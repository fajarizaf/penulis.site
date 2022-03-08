import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

function SidebarPost(props) {

  const onChange = props.onChange
  const onConfig = props.onConfig

  return (
      <AnimatePresence initial={false}>
         {props.isVisible &&(
             <motion.div
                animate={{x:-0}}
                initial={{x:-100}}
                exit={{x:0}}
                className="inSidebar"
             >
             <select className="minimal" name="catpost" onChange={onChange}>
                 {
                     props.catpost ?
                     <option value={props.catpost}>{props.catname}</option>
                     :
                     ''
                 }
                 <option value="1">React</option>
                 <option value="2">Native</option>
             </select>
             <div className="divider"></div>
             {
                 props.tagpost ?
                 <input style={styles.field} type="text" name="tagpost" placeholder="contoh : #tagname#tagname" onChange={onChange} value={props.tagpost}  />
                 :
                 <input style={styles.field} type="text" name="tagpost" placeholder="contoh : #tagname#tagname" onChange={onChange}  />
             } 
             <p style={{fontSize:14,paddingTop:10,paddingBottom:10,fontWeight:500}}>SEO Configuration :</p>
             <input style={styles.field} type="text" name="metatitle" onChange={onConfig} defaultValue={props.metatitle} />
             <div className="divider"></div>    
             <textarea style={styles.fieldarea} name="metadesc" onChange={onConfig} defaultValue={props.metadesc}  />
             <div className="divider"></div>    
             <select className="minimal" name="metarobots" onChange={onConfig}>
                 <option value={props.metarobots}>{props.metarobots}</option>
                 <option value="index, follow">index, follow</option>
                 <option value="noindex, nofollow">noindex, nofollow</option>
             </select>
         </motion.div>
         )} 
      </AnimatePresence>
  )
}

var styles = {
    field: {
        boxShadow:'inset 0px 0px 2px 1px #ccc'
    },
    fieldarea: {
        boxShadow:'inset 0px 0px 2px 1px #ccc',
        minHeight:'180px'
    }
}

export default SidebarPost;
