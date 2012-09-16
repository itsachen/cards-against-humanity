cards = require '../data/cards.coffee'
Player = require './player.coffee'    

exports.RoomState = (nowjs) ->
  class RoomState
    constructor: (@rid) ->
      console.log("Created room:" + @rid)
      #nowjs group logic
      @group  = nowjs.getGroup(@rid) ##group is a nowjs object
      @group.on 'connect', (clientId) ->
        @group.now.receiveMessage("[ROOM ACTIVITY]: " + this.user.clientId +" joined room " + @rid)
      @group.on 'disconnect', (clientId) ->
        @group.now.receiveMessage("[ROOM ACTIVITY]: " + this.user.clientId + " left room " + @rid)
      #Intializing cards
      @wdeck = wcards
      @bdeck = bcards
      @staged = []
      set_card_czar null
      @players = [] #player id to player object
      @ccmode =  false
      @staged_question ""
      @playercardmap = []

    set_staged_question: (@staged_question) ->
    set_ccmode: (@ccmode) ->

    #Player actions
    get_players: -> @players
    add_player: -> (new_player_name, new_player) ->
      @players[new_player_name] = new_player
    set_card_czar: (@card_czar) ->
    get_card_czar: -> @card_czar

    #Room information
    number_of_players: ->
      count = 0
      count++ for k,v of @players

