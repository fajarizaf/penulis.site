
import send from './ConfigAuth'

const authGet = (endpoint) => {
  const sender = send.get(endpoint)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
  return sender
}

export default authGet