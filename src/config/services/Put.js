import send from './ConfigAuth'

const Put = (endpoint, data) => {
  const sender = send.put(endpoint, data)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
  return sender
}

export default Put