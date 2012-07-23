exports.GameRoom = (nowjs, everyone, cache)->
  everyone.now.createRoom = (roomName, callback) ->
    console.log("Created room: "+roomName)
    group = nowjs.getGroup(roomName)
  everyone.now.joinRoom = (roomName, callback) ->
