import send from './ConfigAuth'

const Delete = (endpoint) => {
  const sender = send.delete(endpoint)
  .then(res => {
    
    return res.data
    
  })
  .catch(err => {
    console.log(err)
  })
  return sender
}

export default Delete