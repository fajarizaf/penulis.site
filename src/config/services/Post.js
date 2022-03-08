import send from './ConfigAuth'

const Post = (endpoint, data) => {
  const sender = send.post(endpoint, data)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
  return sender
}

export default Post