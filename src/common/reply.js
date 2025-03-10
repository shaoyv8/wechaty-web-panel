import service from '../service/msg-filter-service.js'
/**
 * 获取私聊返回内容
 */
export async function getContactTextReply(that, contact, msg) {
  let result = await service.filterFriendMsg(that, contact, msg)
  return result
}
/**
 * 获取群消息回复
 * @param {*} content 群消息内容
 * @param {*} name 发消息者昵称
 * @param {*} id 发消息者id
 */
export async function getRoomTextReply({ that, content, name, id, avatar, room, isMention, roomName, roomId }) {
  let result = await service.filterRoomMsg({ that, msg: content, name, id, avatar, room, isMention, roomName, roomId })
  return result
}

export default {
  getContactTextReply,
  getRoomTextReply,
}
