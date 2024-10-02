const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
console.log('Notification: ', message.type)

  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
}

export default Notification
