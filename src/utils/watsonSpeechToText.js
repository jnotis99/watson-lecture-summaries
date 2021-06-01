const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({ apikey: '<apikey>' }),
  serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com',
});

const params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  contentType: 'audio/l16; rate=44100',
};

speechToText.recognize(params)
  .then((response) => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch((err) => {
    console.log(err);
  });
