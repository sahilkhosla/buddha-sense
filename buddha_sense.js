/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var appStrings = {
    FACTS: [
        '<prosody rate="slow">It is better to travel well, than to</prosody> arrive.',
        '<prosody rate="medium">There are only two mistakes one can make; not going all the way, and not starting.</prosody>',
        '<prosody rate="medium">What we think</prosody>, we become.',
        'If your passion does not include <emphasis level="moderate">yourself</emphasis>, it is incomplete.',
        'If anything is worth doing, do it with all your heart.',
        '<prosody rate="medium">Your worst enemy cannot harm you, as much as your own <emphasis level="moderate">unguarded</emphasis> thoughts.</prosody>',
        '<prosody rate="medium">The root of suffering is, attachment.</prosody>',
        'Holding onto anger, is like, drinking poison, and expecting the other person to <emphasis level="reduced">die.</emphasis>',
        'There is no path to happiness, happiness is the path!',
        '<prosody rate="medium">You can only lose, what you cling to.</prosody>',
        '<prosody rate="slow"><emphasis level="reduced">Quiet</emphasis> the mind, and the <emphasis level="moderate">soul</emphasis> will speak.</prosody>',
        'Three things cannot be long hidden: <prosody rate="slow">the sun, the moon, and the truth</prosody>',
        '<prosody rate="medium">You will not be punished for your anger, you will be punished <emphasis level="moderate">by</emphasis> your anger.</prosody>',
        'Nothing, is permanent.',
        '<prosody rate="slow">You yourself</prosody>, as much as anybody in the entire universe, deserve your love and affection.',
        '<prosody rate="medium">The mind is everything. What you think, you become.</prosody>',
        'Hatred does not cease by hatred, but only by love. This is the eternal rule.',
        '<prosody rate="medium">Those who are free of resentful thoughts, surely, find peace.</prosody>',
        '<prosody rate="slow">Give</prosody>, <prosody rate="medium">even if you only have a little</prosody>.',
        'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
        'You will not be punished for your anger, you will be punished by your anger.',
        'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
        'Peace comes from within. Do not seek it without.',
        'The mind is everything. What you think you become.',
        'It is better to conquer yourself than to win a thousand battles.',
        'Your purpose in life is to find your purpose and give your whole heart and soul to it.',
        'Every morning we are born again. What we do today, is what matters most.',
        'Even death is not to be feared by one who has lived wisely.',
        'True love is born from understanding.',
        'To conquer oneself, is a greater task, than conquering others.',
        'Pain is certain, suffering is optional.',
        'There is no path to happiness, happiness is the path.',
        'Happiness will never come to those who fail to appreciate what they already have.',
        'As you walk and eat and travel, be where you are. Otherwise, you will miss most of your life.'
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
