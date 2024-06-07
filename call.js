setup =()=>{
    noCanvas ()
   let bot = new RiveScript(); //Load an individual file. 
     const brains = [
       './greeting.rive'
   //'./another-category-sample.rive 
       ];
   bot.loadFile(brains).then(loading_done).catch(loading_error);
   
     function loading_done(){
   console.log("Bot has finished loading!"); 
       //replies must be sorted 
       bot.sortReplies();
   //RiveScript remembers user data by their username and can tell 
       //multiple users apart. 
       let username = "local-user";
   bot.reply(username,"hello").then(function(reply){ 
     console.log("The bot says:" + reply); 
     output.html(reply);
   });
   setTimeout("console.log('pauseBetween')",2000);
     }
   function loading_error(_err,_filename,_lineno){ 
     console.log("Error when loading files:" + _err);
   }
   let button = select('#submit');
   let user_input = select('#user_input'); 
     let output = select('#output');
   button.mousePressed(chat);
   
     function chat(){
   let input = user_input.value();
   let reply = bot.reply("local-user",input).then(function(reply) 
                                                  {output.html(reply);
   }
   );
   }
   }