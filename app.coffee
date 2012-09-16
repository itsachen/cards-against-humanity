#instead of a player card map, the staging area can have tuples of style (card,uid)

port = 3000
express = require 'express'
app  = express.createServer()
server = app.listen(port)


#App Configuration
app.configure(() ->
  app.use(express.methodOverride())
  app.use(express.bodyParser())
  app.use(express.static(__dirname + '/public'))
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade'))  

console.log("Express server listening on port " + port)


#NowJS
nowjs = require "now" 
everyone = nowjs.initialize(server)


RoomState = require('./controllers/roomstate.coffee').RoomState(nowjs)
Player = require './controllers/player.coffee' 


#gameRooms is an associative array of key= room_id and value=roomstate object
gameRooms = []


#Express.js routing
app.get('/', (req, res) ->
  res.render 'index'
)

app.get('/room/:room_id',(req, res) ->
  room_id = req.params.room_id;
  if isNaN(room_id)
    res.render 'index'
  else
    res.render('game', {
      room_id: room_id
    })
)

app.get('/about', (req, res) ->
  res.send "About Page")


#NowJS stuff
nowjs.on('connect', () ->
  console.log("Joined: " + this.now.name))

nowjs.on('disconnect', () ->
  console.log("Left: " + this.now.name))

everyone.now.distributeMessage = (message) ->
  everyone.now.receiveMessage(this.now.name, message)

#State logic
everyone.now.startGame = (name,room_id) ->

  newplayer = new Player(0, name);

  #New room
  if gameRooms[room_id] == undefined
    room = new RoomState(room_id)
    gameRooms[room_id] = room
    room.group.addUser(this.user.clientId)
    room.set_card_czar newplayer
    room.set_staged_question = room.bdeck.pop()
    room.add_player(name, newplayer)
  else
    room = gameRooms[room_id]
    room.group.addUser(this.user.clientId)
    room.add_player(name, newplayer)

  dealInitialCards(newplayer, room)

  room.group.now.recieveAlert "A NEW CHALLENGER HAS APPEARED"
  room.group.now.drawState(room);
  console.log("Number of players: " + room.number_of_players())

#Card stuff
#TODO: Shuffle cards - Knuth shuffle?
dealInitialCards = (player,room) ->
  gameRooms[room.rid].players[player.id].add_card_to_hand(gameRooms[room.id].wdeck.pop()) for x in [1..10]

# function playerAlreadyStaged(player,room){
#   for(var card in gameRooms[room.rid].playercardmap) {
#     var player_temp = gameRooms[room.rid].playercardmap[card];
#     if (player_temp.pinfo == player.pinfo){
#       return true;
#     }
#   }
#   return false;
# }

# TODO: Server side prevention for multiple uploads
# player_sender is the player who sent
everyone.now.stageCard = (card_body, room, player_sender) -> #card_body?
  
    #Remove card from player_sender hand
    gameRooms[room.rid].players[player_sender.id].remove_card_from_hand(card_body)
    gameRooms[room.rid].staged.push([card_body,player_sender.id]);

    room = nowjs.getGroup(room.rid);

    //LOGIC FOR DETERMINING IF ITS CARD CZAR
    if(gameRooms[room.rid].staged.length == (numOfPlayers(room) - 1)){
      gameRooms[room.rid].ccmode = true;
      room.now.drawStateCzarMode(gameRooms[room.rid]);
    }
    else{
      room.now.drawState(gameRooms[state.rid]);
    }
    console.log(gameRooms[state.rid].staged);   
  }

everyone.now.chooseCard = function(card_body, state, player_sender){
  if (player_sender.pinfo == state.card_czar.pinfo){
    var temp = gameRooms[state.rid].playercardmap[card_body];
    gameRooms[state.rid].players[temp].points += 1; //Reward point
    room = nowjs.getGroup(state.rid);
    room.now.drawChosen(card_body);
  }
};

everyone.now.resetState = function(state){

  #Everyone gets a new card!
  for(var playerk in gameRooms[state.rid].players) {
    var player = gameRooms[state.rid].players[playerk];
    console.log(player);
    if (player.pinfo != gameRooms[state.rid].card_czar.pinfo){
      var popped = gameRooms[state.rid].wdeck.pop();
      player.hand.push(popped);
    }
  }

  //New card czar OH MY GOD HACKS
  var next = false;
  var last = true;
  for(var playerk in gameRooms[state.rid].players) {
    var player = gameRooms[state.rid].players[playerk];
    if (next){
      gameRooms[state.rid].card_czar = player
      last = false;
    }
    if (player.pinfo == gameRooms[state.rid].card_czar.pinfo){
      next = true;
    }
  }
  if (last){
    for(var playerk in gameRooms[state.rid].players) {
      var player = gameRooms[state.rid].players[playerk];
      if (last){
        gameRooms[state.rid].card_czar = player;
        last = false;
      }
    }
  }

  //New black card
  gameRooms[state.rid].question = gameRooms[state.rid].bdeck.pop();

  //Reset staged
  gameRooms[state.rid].staged = [];

  //Reset map
  gameRooms[state.rid].playercardmap = {};

  room = nowjs.getGroup(state.rid);
  room.now.drawState(gameRooms[state.rid]);
};
 


