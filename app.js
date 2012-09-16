var port     = 3000;
var express  = require('express');
var app      = express();
var server   = app.listen(port);
console.log("Express server listening on port " + port);

// Cards
// bcards = [1,2,3,4];
// wcards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
bcards = ["TSA guidelines now prohibit __________ on airplanes.","It's a pity that kids these days are all getting involved with __________.","In 1,000 years, when paper money is but a distant memory, __________ will be our currency.","Major League Baseball has banned __________ for giving players an unfair advantage.","What is Batman's guilty pleasure?","Next from J.K. Rowling: Harry Potter and the Chamber of __________.","I'm sorry, Professor, but I couldn't complete my homework because of __________.","What did I bring back from Mexico?","__________? There's an app for that.","__________. Betcha can't have just one!","What's my anti-drug?","While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on __________.","In the new Disney Channel Original Movie, Hannah Montana struggles with __________ for the first time. ","What's my secret power?","What's the new fad diet?","What did Vin Diesel eat for dinner?","When Pharaoh remained unmoved, Moses called down a Plague of __________.","How am I maintaining my relationship status?","What's the crustiest?","In L.A. County Jail, word is you can trade 200 cigarettes for __________.","After the earthquake, Sean Penn brought __________ to the people of Haiti.","Instead of coal, Santa now gives the bad children __________.","Life for American Indians was forever changed when the White Man introduced them to __________.","What's Teach for America using to inspire inner city students to succeed?","Maybe she's born with it. Maybe it's __________.","In Michael Jackson's final moments, he thought about __________.","White people like __________.","Why do I hurt all over?","A romantic, candlelit dinner would be incomplete without __________.","What will I bring back in time to convince people that I am a powerful wizard?","BILLY MAYS HERE FOR __________.","The class field trip was completely ruined by __________.","What's a girl's best friend?","Dear Abby, I'm having some trouble with __________ and would like your advice.","When I am President of the United States, I will create the Department of __________.","What are my parents hiding from me?","What never fails to liven up the party?","What gets better with age?","__________: Good to the last drop.","I got 99 problems but __________ ain't one.","__________. It's a trap!","MTV's new reality show features eight washed-up celebrities living with __________.","What would grandma find disturbing, yet oddly charming?","What's the most emo?","During sex, I like to think about __________.","What ended my last relationship?","What's that sound?","__________. That's how I want to die.","Why am I sticky?","What's the next Happy Meal toy?","What's there a ton of in heaven?","I do not know with what weapons World War III will be fought, but World War IV will be fought with __________.","What will always get you laid?","__________: Kid-tested, mother-approved.","Why can't I sleep at night?","What's that smell?","What helps Obama unwind?","This is the way the world ends / This is the way the world ends / Not with a bang but with __________.","Coming to Broadway this season, __________: The Musical.","Anthropologists have recently discovered a primitive tribe that worships __________.","But before I kill you, Mr. Bond, I must show you __________.","Studies show that lab rats navigate mazes 50% faster after being exposed to __________.","Next on ESPN2: The World Series of __________.","When I am a billionaire, I shall erect a 50-foot statue to commemorate __________.","In an attempt to reach a wider audience, the Smithsonian Museum of Natural History has opened an interactive exhibit on __________.","War! What is it good for?","What gives me uncontrollable gas?","What do old people smell like?","What am I giving up for Lent?","Alternative medicine is now embracing the curative powers of __________.","What did the US airdrop to the children of Afghanistan?","What does Dick Cheney prefer?","During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of __________.","What don't you want to find in your Chinese food?","I drink to forget __________.","__________. High five, bro.","He who controls __________ controls the world.","The CIA now interrogates enemy agents by repeatedly subjecting them to __________.","In Rome, there are whisperings that the Vatican has a secret room devoted to __________.","Science will never explain the origin of __________.","When all else fails, I can always masturbate to __________.","I learned the hard way that you can't cheer up a grieving friend with __________.","In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated __________.","The socialist governments of Scandinavia have declared that access to __________ is a basic human right.","In his new self-produced album, Kanye West raps over the sounds of __________.","What's the gift that keeps on giving?","This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only __________ and his wits. ","When I pooped, what came out of my butt?","In the distant future, historians will agree that __________ marked the beginning of America's decline.","What has been making life difficult at the nudist colony?","And I would have gotten away with it, too, if it hadn't been for __________.","What brought the orgy to a grinding halt?"];
wcards = ["A Gypsy curse.","A moment of silence.","A sausage festival.","An honest cop with nothing left to lose.","Famine.","Flesh-eating bacteria.","Flying sex snakes.","Not giving a shit about the Third World.","Sexting.","Shapeshifters.","Porn stars.","Raping and pillaging.","72 virgins.","A drive-by shooting.","A time travel paradox.","Authentic Mexican cuisine.","Bling.","Consultants.","Crippling debt.","Daddy issues.","The Donald Trump Seal of Approval™.","Dropping a chandelier on your enemies and riding the rope up.","Former President George W. Bush.","Full frontal nudity.","Hormone injections.","Laying an egg.","Getting naked and watching Nickelodeon.","Pretending to care.","Public ridicule.","Sharing needles.","Boogers.","The inevitable heat death of the universe.","The miracle of childbirth.","The Rapture.","Whipping it out.","White privilege.","Wifely duties.","The Hamburglar.","AXE Body Spray.","The Blood of Christ.","Horrifying laser hair removal accidents.","BATMAN!!!","Agriculture.","A robust mongoloid.","Natural selection.","Coat hanger abortions.","Eating all of the cookies before the AIDS bake-sale.","Michelle Obama's arms.","The World of Warcraft.","Swooping.","Obesity.","A homoerotic volleyball montage.","Lockjaw.","A mating display.","Testicular torsion.","All-you-can-eat shrimp for $4.99.","Domino's™ Oreo™ Dessert Pizza.","Kanye West.","Hot cheese.","Raptor attacks.","Taking off your shirt.","Smegma.","Alcoholism.","A middle-aged man on roller skates.","The Care Bear Stare.","Bingeing and purging.","Oversized lollipops.","Self-loathing.","Children on leashes.","Half-assed foreplay.","The Holy Bible.","German dungeon porn.","Being on fire.","Teenage pregnancy.","Gandhi.","Leaving an awkward voicemail.","Uppercuts.","Customer service representatives.","An erection that lasts longer than four hours.","My genitals.","Picking up girls at the abortion clinic.","Science.","Not reciprocating oral sex.","Flightless birds.","A good sniff.","Waterboarding.","A balanced breakfast.","Historically black colleges.","Actually taking candy from a baby.","The Make-A-Wish Foundation.","A clandestine butt scratch.","Passive-aggressive Post-it notes.","The Chinese gymnastics team.","Switching to Geico.","Peeing a little bit.","Home video of Oprah sobbing into a Lean Cuisine.","Nocturnal emissions.","The Jews.","My humps.","Powerful thighs.","Winking at old people.","Mr. Clean, right behind you.","A gentle caress of the inner thigh.","Sexual tension.","The forbidden fruit.","Skeletor.","Fancy Feast.","Being rich.","Sweet, sweet vengeance.","Republicans.","A gassy antelope.","Natalie Portman.","Copping a feel.","Kamikaze pilots.","Sean Connery.","The homosexual agenda.","The hardworking Mexican.","A falcon with a cap on its head.","Altar boys.","The Kool-Aid Man.","Getting so angry that you pop a boner.","Free samples.","A big hoopla about nothing.","Doing the right thing.","The Three-Fifths compromise.","Lactation.","World peace.","RoboCop.","Chutzpah.","Justin Bieber.","Oompa-Loompas.","Inappropriate yodeling.","Puberty.","Ghosts.","An asymmetric boob job.","Vigorous jazz hands.","Fingering.","Glenn Beck catching his scrotum on a curtain hook.","GoGurt.","Police brutality.","John Wilkes Booth.","Preteens.","Scalping.","Stifling a giggle at the mention of Hutus and Tutsis.","Tweeting.","Darth Vader.","A sad handjob.","Exactly what you'd expect.","Expecting a burp and vomiting on the floor.","Adderall™.","Embryonic stem cells.","Tasteful sideboob.","Panda sex.","An icepick lobotomy.","Tom Cruise.","Mouth herpes.","Sperm whales.","Homeless people.","Third base.","Incest.","Pac-Man uncontrollably guzzling cum.","A mime having a stroke.","Hulk Hogan.","God.","Scrubbing under the folds.","Golden showers.","Emotions.","Licking things to claim them as your own.","Pabst Blue Ribbon.","The placenta.","Spontaneous human combustion.","Friends with benefits.","Finger painting.","Old-people smell.","Dying of dysentery.","My inner demons.","A Super Soaker™ full of cat pee.","Aaron Burr.","Cuddling.","The chronic.","Cockfights.","Friendly fire.","Ronald Reagan.","A disappointing birthday party.","A sassy black woman.","Mathletes.","A tiny horse.","William Shatner.","Riding off into the sunset.","An M. Night Shyamalan plot twist.","Jew-fros.","Mutually-assured destruction.","Pedophiles.","Yeast.","Grave robbing.","Eating the last known bison.","Catapults.","Poor people.","Forgetting the Alamo.","The Hustle.","The Force.","Wiping her butt.","Intelligent design.","Loose lips.","AIDS.","Pictures of boobs.","The Übermensch.","Sarah Palin.","American Gladiators.","Getting really high.","Scientology.","Penis envy.","Praying the gay away.","Frolicking.","Two midgets shitting into a bucket.","The KKK.","Genghis Khan.","Crystal meth.","Serfdom.","Stranger danger.","A Bop It™.","Shaquille O'Neal's acting career.","Prancing.","Vigilante justice.","Overcompensation.","Pixelated bukkake.","A lifetime of sadness.","Racism.","Dwarf tossing.","Sunshine and rainbows.","A monkey smoking a cigar.","Flash flooding.","Lance Armstrong's missing testicle.","Dry heaving.","The terrorists.","Britney Spears at 55.","Attitude.","Breaking out into song and dance.","Leprosy.","Gloryholes.","Nipple blades.","The heart of a child.","Puppies!","Waking up half-naked in a Denny's parking lot.","Dental dams.","Toni Morrison's vagina.","The taint; the grundle; the fleshy fun-bridge.","Active listening.","Ethnic cleansing.","The Little Engine That Could.","The invisible hand.","Waiting ‘til marriage.","Unfathomable stupidity.","Euphoria™ by Calvin Klein.","Re-gifting.","Autocannibalism.","Erectile dysfunction.","My collection of high-tech sex toys.","The Pope.","White people.","Tentacle porn.","Glenn Beck convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts.","Too much hair gel.","Seppuku.","Same-sex ice dancing.","Cheating in the Special Olympics.","Charisma.","Keanu Reeves.","Sean Penn.","Nickelback.","A look-see.","Pooping back and forth. Forever.","Menstruation.","Kids with ass cancer.","A salty surprise.","The South.","The violation of our most basic human rights.","YOU MUST CONSTRUCT ADDITIONAL PYLONS.","Date rape.","Being fabulous.","Necrophilia.","Centaurs.","Bill Nye the Science Guy.","Black people.","Chivalry.","Lunchables™.","Bitches.","The profoundly handicapped.","Heartwarming orphans.","MechaHitler.","Fiery poops.","Another goddamn vampire movie.","Tangled Slinkys.","The true meaning of Christmas.","Estrogen.","A zesty breakfast burrito.","That thing that electrocutes your abs.","Passing a kidney stone.","A bleached asshole.","Michael Jackson.","Cybernetic enhancements.","Guys who don't call.","Smallpox blankets.","Masturbation.","Classist undertones.","Queefing.","Concealing a boner.","Edible underpants.","Viagra.","Soup that is too hot.","Muhammad (Praise Be Unto Him).","Surprise sex!","Five-Dollar Footlongs™.","Drinking alone.","Dick fingers.","Multiple stab wounds.","Soiling oneself.","Child abuse.","Anal beads.","Civilian casualties.","Pulling out.","Robert Downey, Jr.","Horse meat.","A really cool hat.","Kim Jong-il.","A stray pube.","Jewish fraternities.","The token minority.","Doin' it in the butt.","Feeding Rosie O'Donnell.","Teaching a robot to love.","A can of whoop-ass.","A windmill full of corpses.","Count Chocula.","Wearing underwear inside-out to avoid doing laundry.","A death ray.","The glass ceiling.","A cooler full of organs.","The American Dream.","Keg stands.","When you fart and a little bit comes out.","Take-backsies.","Dead babies.","Foreskin.","Saxophone solos.","Italians.","A fetus.","Firing a rifle into the air while balls deep in a squealing hog.","Dick Cheney.","Amputees.","Eugenics.","My relationship status.","Christopher Walken.","Bees?","Harry Potter erotica.","College.","Getting drunk on mouthwash.","Nazis.","8 oz. of sweet Mexican black-tar heroin.","Stephen Hawking talking dirty.","Dead parents.","Object permanence.","Opposable thumbs.","Racially-biased SAT questions.","Jibber-jabber.","Chainsaws for hands.","Nicolas Cage.","Child beauty pageants.","Explosions.","Sniffing glue.","Glenn Beck being harried by a swarm of buzzards.","Repression.","Roofies.","My vagina.","Assless chaps.","A murder most foul.","Giving 110 percent.","Her Royal Highness, Queen Elizabeth II.","The Trail of Tears.","Being marginalized.","Goblins.","Hope.","The Rev. Dr. Martin Luther King, Jr.","A micropenis.","My soul.","A hot mess.","Vikings.","Hot people.","Seduction.","An Oedipus complex.","Geese.","Global warming.","New Age music.","Hot Pockets.","Making a pouty face.","Vehicular manslaughter.","Women's suffrage.","A defective condom.","Judge Judy.","African children.","The Virginia Tech Massacre.","Barack Obama.","Asians who aren't good at math.","Elderly Japanese men.","Exchanging pleasantries.","Heteronormativity.","Parting the Red Sea.","Arnold Schwarzenegger.","Road head.","Spectacular abs.","Figgy pudding.","A mopey zoo lion.","A bag of magic beans.","Poor life choices.","My sex life.","Auschwitz.","A snapping turtle biting the tip of your penis.","A thermonuclear detonation.","The clitoris.","The Big Bang.","Land mines.","Friends who eat all the snacks.","Goats eating cans.","The Dance of the Sugar Plum Fairy.","Jerking off into a pool of children's tears.","Man meat.","Me time.","The Underground Railroad.","Poorly-timed Holocaust jokes.","A sea of troubles.","Lumberjack fantasies.","Morgan Freeman's voice.","Women in yogurt commercials.","Natural male enhancement.","Being a motherfucking sorcerer.","Genital piercings.","Passable transvestites.","Sexy pillow fights.","Balls.","Grandma.","Friction.","Party poopers.","Farting and walking away.","Being a dick to children.","Booby-trapping the house to foil burglars.","The Tempur-Pedic Swedish Sleep System™.","Dying.","Hurricane Katrina.","The gays.","The folly of man.","Men.","The Amish.","Pterodactyl eggs.","Team-building exercises.","A brain tumor.","Cards Against Humanity.","Fear itself.","Lady Gaga.","The milk man.","A foul mouth.","A big black dick.","A beached whale.","A bloody pacifier.","A crappy little hand.","A low standard of living.","A nuanced critique.","Panty raids.","A passionate Latino lover.","A rival dojo.","A web of lies.","A woman scorned.","Clams.","Apologizing.","Appreciative snapping.","Neil Patrick Harris.","Beating your wives.","Being a dinosaur.","Shaft.","Bosnian chicken farmers.","Nubile slave boys.","Carnies.","Coughing into a vagina.","Suicidal thoughts.","Dancing with a broom.","Deflowering the princess.","Dorito breath.","Eating an albino.","Enormous Scandinavian women.","Fabricating statistics.","Finding a skeleton.","Gandalf.","Genetically engineered super-soldiers.","George Clooney's musk.","Getting abducted by Peter Pan.","Getting in her pants, politely.","Gladiatorial combat.","Good grammar.","Hipsters.","Historical revisionism.","Insatiable bloodlust.","Jafar.","Jean-Claude Van Damme.","Just the tip.","Mad hacky-sack skills.","Leveling up.","Literally eating shit.","Making the penises kiss.","Media coverage.","Medieval Times Dinner and Tournament.","Moral ambiguity.","My machete.","One thousand Slim Jims.","Ominous background music.","Overpowering your father.","Pistol-whipping a hostage.","Quiche.","Quivering jowls.","Revenge fucking.","Ripping into a man's chest and pulling out his still-beating heart.","Ryan Gosling riding in on a white horse.","Santa Claus.","Scrotum tickling.","Sexual humiliation.","Sexy Siamese twins.","Slow motion.","Space muffins.","Statistically validated stereotypes.","Sudden Poop Explosion Disease.","The boners of the elderly.","The economy.","The Fanta girls.","The Gulags.","The harsh light of day.","The hiccups.","The shambling corpse of Larry King.","The four arms of Vishnu.","Being a busy adult with many important things to do.","Tripping balls.","Words, words, words.","Zeus's sexual appetites."];

// Objects
function room(rid,wdeck,bdeck,staged,card_czar,players,ccmode,playercardmap,question){
  this.rid = rid;
  this.wdeck = wdeck;
  this.bdeck = bdeck;
  this.staged = staged;
  this.question = question;
  this.card_czar = card_czar; //Player name?
  this.players = players; //Array of players
  this.ccmode = ccmode;
  this.playercardmap = playercardmap; //card body to player name
}

function player(points,hand,pinfo){
  this.points = points;
  this.hand = hand;
  this.pinfo = pinfo;
}

// State data
gameRooms = {}

// App Configuration
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
});

// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/room/:room_id', function(req, res){
  var room_id = req.params.room_id;
  if (isNaN(room_id)){
    res.render('index');
  }
  else{
    res.render('game', {
      room_id: room_id
    });
  }
});

app.get('/about', function(req, res){
  res.send("About Page");
});

// NowJS component
var nowjs    = require("now");
var everyone = nowjs.initialize(server);

nowjs.on('connect', function(){
  console.log("Joined: " + this.now.name);
});

nowjs.on('disconnect', function(){
  console.log("Left: " + this.now.name);
});

everyone.now.distributeMessage = function(message){
  everyone.now.receiveMessage(this.now.name, message);
};

// Room stuff
function createRoom(room_id){
  console.log("Created room: " + room_id);
  var group = nowjs.getGroup(room_id);
  group.on('connect', function(clientId){
    group.now.receiveMessage(this.user.clientId +" joined room " + room_id);
  });
  group.on('disconnect', function(clientId){
    group.now.receiveMessage(this.user.clientId + " left room " + room_id);
  });
  var newroom = new room(room_id, wcards, bcards, [], null, {}, false, {}, ""); //Need to make deck
  gameRooms[room_id] = newroom;
  return group;
};

// Game/state logic
everyone.now.startGame = function(name,room_id){

  var newplayer = new player(0, [], name);
  var room;
  var roomobj;

  // New room
  if (gameRooms[room_id] == undefined){
    room = createRoom(room_id); //Group
    room.addUser(this.user.clientId);
    roomobj = gameRooms[room_id];
    roomobj.card_czar = newplayer;
    roomobj.question = roomobj.bdeck.pop();
    roomobj.players[name] = newplayer;
  }
  else{
    room = nowjs.getGroup(room_id);
    room.addUser(this.user.clientId);
    roomobj = gameRooms[room_id];
    roomobj.players[name] = newplayer;
  }

  dealInitialCards(newplayer, roomobj);

  room.now.recieveAlert("A NEW CHALLENGER HAS APPEARED");
  room.now.drawState(roomobj);
  console.log(numOfPlayers(roomobj));
};

function numOfPlayers(room){
  var count = 0;
  for(var i in room.players) {
    count++;
  }
  return count;
}

// Card stuff
// TODO: Shuffle cards
function dealInitialCards(player,room){
  for (i = 0; i < 10; i++){
    var popped = room.wdeck.pop();
    player.hand.push(popped);
  }
}

// function playerAlreadyStaged(player,room){
//   for(var card in gameRooms[room.rid].playercardmap) {
//     var player_temp = gameRooms[room.rid].playercardmap[card];
//     if (player_temp.pinfo == player.pinfo){
//       return true;
//     }
//   }
//   return false;
// }

// TODO: Server side prevention for multiple uploads
//player_sender is the player who sent
everyone.now.stageCard = function(card_body, state, player_sender){
  
  if (true){
    //Remove card from player hand
    var filtered = player_sender.hand.filter(function(card,i,a){
      if (card == card_body){
        return false;
      }
      else{
        return true;
      }
    });

    gameRooms[state.rid].playercardmap[card_body] = player_sender.pinfo;
    gameRooms[state.rid].players[player_sender.pinfo].hand = filtered;
    gameRooms[state.rid].staged.push(card_body);

    room = nowjs.getGroup(state.rid);

    //LOGIC FOR DETERMINING IF ITS CARD CZAR
    if(gameRooms[state.rid].staged.length == (numOfPlayers(state) - 1)){
      gameRooms[state.rid].ccmode = true;
      room.now.drawStateCzarMode(gameRooms[state.rid]);
    }
    else{
      room.now.drawState(gameRooms[state.rid]);
    }
    console.log(gameRooms[state.rid].staged);   
  }
};

everyone.now.chooseCard = function(card_body, state, player_sender){
  if (player_sender.pinfo == state.card_czar.pinfo){
    var temp = gameRooms[state.rid].playercardmap[card_body];
    gameRooms[state.rid].players[temp].points += 1; //Reward point
    room = nowjs.getGroup(state.rid);
    room.now.drawChosen(card_body);
  }
};

everyone.now.resetState = function(state){

  //Everyone gets a new card!
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
