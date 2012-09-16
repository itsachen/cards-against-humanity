class Card
  constructor: (@body, @type, @number_of_questions) ->
  set_owner: -> @uid
  @create_deck_from_array: (a,type) ->
    (new Card(body,type,1) for body in a) #Number of questions needs to be changed

module.exports = Card