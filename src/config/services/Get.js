import axios from 'axios'

const Get = (endpoint) => {
  const sender = axios.get(endpoint)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
  return sender
}

export default Get