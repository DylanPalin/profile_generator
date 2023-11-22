const readline = require('readline');

const surveyResults = {
  name: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superpower: '',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'\s your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  surveyResults.name = answer;

  rl.question('What\'\s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    surveyResults.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      surveyResults.music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        surveyResults.meal = answer;

        rl.question('What\'\s your favourite thing to eat for that meal?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          surveyResults.food = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            surveyResults.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              surveyResults.superpower = answer;
              
              console.log(`${surveyResults.name} loves listening to ${surveyResults.music} while ${surveyResults.activity}, devouring ${surveyResults.food} for ${surveyResults.meal}, prefers ${surveyResults.sport} over any other sport, and is amazing at ${surveyResults.superpower}.`);
              rl.close(); 
            });
          });
        });
      });
    });
  });
});