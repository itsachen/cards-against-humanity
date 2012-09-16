class Card
  constructor: (@body, @type, @number_of_questions) ->
  set_owner: -> @uid
  @create_deck_from_array: (a) ->
    (new Card(body,"foo","bar") for body in a)

foo = Card.create_deck_from_array(["a","b","c"])
console.log foo[0].body