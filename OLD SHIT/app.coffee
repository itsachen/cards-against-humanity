# Requirements
express = require 'express'
nowjs = require 'now'
http = require 'http'
sys = require 'sys'

# Objects
room =
  deck:   []
  staged: []
  card_czar: null
  players: []

player = 
  points: 0
  hand: []
  info: ""

# Game data
gameRooms = []
players = []

app = express.createServer()

app.set 'view engine', 'jade'
app.use(express.static(__dirname + '/public'))
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))

app.get '/', (req, res) ->
  res.render 'index'

app.get '/about', (req, res) ->
    res.send('About Page')

app.get '/room/:room_id', (req, res) ->
    room_id = req.params.room_id
    if isNaN(room_id)
      res.render 'index'
    else
      res.render('game')

sys.puts "Server started on http://localhost:3000"
server = app.listen(3000)

everyone = nowjs.initialize(server)

everyone.now.distribute = (message) ->
  everyone.now.receive this.now.name, message

# Room stuff
everyone.now.getPlayerList = (callback) -> 
  players = ['Jake','John','Cathy'] 
  callback(players)

everyone.now.createRoom = (roomName, callback) ->
  console.log("Created room: "+roomName)
  group = nowjs.getGroup(roomName)
  group.on 'connect', (clientId) ->
    group.now.receiveMessage(this.user.clientId +" joined the game room.")
  group.on 'disconnect', (clientId) ->
    group.now.receiveMessage(this.user.clientId + " left the game room.")
  gameRooms.push(group)
  callback(group)

everyone.now.joinRoom = (roomName, callback) ->
  group = nowjs.getGroup(roomName)
  group.addUser(this.user.clientId)

everyone.now.leaveRoom = (roomName) ->
  group = nowjs.getGroup(roomName)
  group.removeUser(this.user.clientId)

everyone.now.startGame = () ->
  alert "foo"


