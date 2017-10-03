const Twit = require('Twit');
const config = require('./config');

const T = new Twit(config);

const status = "First tweet from Node! :) #nodetweets #JavaScript #ES6";

T.post('statuses/update', { status }, (err, data, response) => {
  if(err){
    console.log(`"Couldn't tweet" ${err}`);
  } else {
    console.log("Tweeted!");
  }
});
