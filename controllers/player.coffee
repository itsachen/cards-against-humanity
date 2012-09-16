class Player
  constructor: (@name, @uid) ->

  set_points: (@points) ->
  set_hand: (@hand) ->
  add_card_to_hand: (card) ->
    @hand.push card
  remove_card_from_hand: (card_to_be_removed) ->
    @hand = (card for card in @hand when card != card_to_be_removed)
  set_card_czar: (@card_czar) ->
  get_card_czar: (@card_czar) ->

module.exports = Player
