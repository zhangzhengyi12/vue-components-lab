import Notification from './notification.js'

let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function message({
  duration = 1500,
  content = '',
  type = 'normal',
  showClose = false,
  renderContent = null
}) {
  let instance = getMessageInstance()
  return instance.add({
    content,
    duration,
    type,
    showClose,
    renderContent
  })
}

function success(content) {
  message({
    content,
    type: 'success'
  })
}

function error(content) {
  message({
    content,
    type: 'error'
  })
}

message.success = success
message.error = error

export default message
