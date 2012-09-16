$ ->
  
  now.receiveMessage = function(name, message){
    $("#messages").append("<br>" + name + ": " + message);
  }

  now.recieveAlert = function(message){
    $("#alerts").html("<h1>" + message + "</h1>");
  }

  // Draws state for player
  now.drawState = function(state){
    gstate = state;
    gplayer = state.players[name];
    $("#playarea").html("");
    $("#playarea").append(gstate.question);

    if (gstate.card_czar.pinfo != gplayer.pinfo){
      // Draw self cards - make divs
      $.each(gplayer.hand, function(index,wcard_text){
        $("#playarea").append("<br/><input type='button' id='cards_in_hand' value='" + wcard_text +"'/>");
      });
    }
  }

  now.drawStateCzarMode = function(state){
    gstate = state;
    gplayer = state.players[name];
    $("#playarea").html("");
    $("#playarea").append(gstate.question);

    if(name == state.card_czar.pinfo){
      $.each(state.staged, function(index,wcard_text){
        $("#playarea").append("<br/><input type='button' id='staged_cards_czar' value='" + wcard_text +"'/>");
      });
    }
    else{
      // Draw self cards - make divs
      $.each(gplayer.hand, function(index,wcard_text){
        $("#playarea").append("<br/><input type='button' id='cards_in_hand' value='" + wcard_text +"'/>");
      });
    }
  }

  now.drawChosen = function(chosen_body){
    $("#playarea").html("");
    $("#playarea").append(gstate.question + "<br/>" + chosen_body);
    $("#playarea").append("<br/><input type='button' id='next_round' value='Next round' />");
  }

  $("#send-button").click(function(){
    now.distributeMessage($("#text-input").val());
    $("#text-input").val("");
    $("#text-input").focus();
  });

  $("#cards_in_hand").live('click', function(e){
    if (gstate.card_czar.pinfo != gplayer.pinfo){
      $("[id=cards_in_hand]").attr("id","lolol"); 
      e.preventDefault();
      var card_body = $(this).attr('value');
      now.stageCard(card_body, gstate, gplayer);
      $("[id=cards_in_hand]").attr("id","lolol"); 
    }
  });

  $("#staged_cards_czar").live('click', function(e){
    e.preventDefault();
    var card_body = $(this).attr('value');
    now.chooseCard(card_body, gstate, gplayer);
  });

  $("#next_round").live('click', function(e){
    e.preventDefault();
    now.resetState(gstate);
  });

  name = prompt("What's your name?", "");

  now.ready(function(){
    now.startGame(name,$("#room_id").text().match(/\d+/)[0]); //Oh lawd the hacks
  });