/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var appStrings = {
    FACTS: [
        'It is better to travel well than to arrive.',
        'Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.',
        'You cannot travel the path until you have become the path itself',
        'There has to be evil so that good can prove its purity above it.',
        'In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.',
        'Even death is not to be feared by one who has lived wisely.',
        'Unity can only be manifested by the Binary. Unity itself and the idea of Unity are already two.',
        'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
        'There have been many Buddhas before me and will be many Buddhas in the future.',
        'Work out your own salvation. Do not depend on others.',
        'There are only two mistakes one can make along the road to truth; not going all the way, and not starting.',
        'What we think, we become.',
        'We are formed and molded by our thoughts. Those whose minds are shaped by selfless thoughts give joy when they speak or act. Joy follows them like a shadow that never leaves them.',
        'The way is not in the sky. The way is in the heart.'              
    ],
    SKILL_NAME: 'Buddha Sense',
    GET_FACT_MESSAGE: "Buddha says: ", //TODO
    HELP_MESSAGE: 'You can say enlighten me or tell me a quote... What can I help you with?', //TODO
    HELP_REPROMPT: 'What can I help you with?', //TODO
    STOP_MESSAGE: 'Goodbye!' //TODO
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetBuddhaSense');
    },
    'GetBuddhaSense': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = appStrings.FACTS;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = appStrings.GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, appStrings.SKILL_NAME, randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = appStrings.HELP_MESSAGE;
        const reprompt = appStrings.HELP_MESSAGE;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', appStrings.STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', appStrings.STOP_MESSAGE);
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);   
    alexa.registerHandlers(handlers);
    alexa.execute();
};
