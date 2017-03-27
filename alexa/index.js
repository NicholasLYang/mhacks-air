'use strict';
var constant = 0;
const ACTION_STATES = ["landing", "gate", "pushback", "taxi", "takeoff"];
const AIRPLANE_DATA_GET_LOCATION = 'http://airalexa.tech/plane';
const AIRPLANE_DATA_POST_LOCATION = 'http://airalexa.tech/command/create';
// --------------- Helpers that build all of the responses -----------------------
function buildSpeechletResponse(number, action, output, repromptText, shouldEndSession) {
    console.log('buildSpeechletResponse');
    var jason = {
        command: {
            action: `${action}`,
            number: `${number}`,
        },
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        }, shouldEndSession,
    };
    post(jason);
    return jason;
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}


// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const speechOutput = 'Welcome to Air Traffic Control. ';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'You can get the status of all airplanes by saying, give me a full status report.';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(null, null, speechOutput, repromptText, shouldEndSession));
}

function handleSessionEndRequest(callback) {
    const speechOutput = 'Thank you for using Air Traffic Control!';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;

    callback({}, buildSpeechletResponse(null, null, speechOutput, null, shouldEndSession));
}

function createAirplaneAttributes(airplane) {
    return {
        airplane,
    };
}

function createActionAirplaneAttributes(airplane, action) {
    return {
        airplane,
        action,
    };
}

function updateAirplaneInSession(intent, session, callback) {
    const airplaneSlot = intent.slots.Number;
    const actionSlot = intent.slots.Action;
    let repromptText = '';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';

    var airplane, action;
    if (airplaneSlot && actionSlot) {
        airplane = airplaneSlot.value;
        action = actionSlot.value;
        sessionAttributes = createActionAirplaneAttributes(airplane, action);
        if (`${action}` === 'hold') {
            speechOutput = `Airplane ${airplane} is now being held.`;
        } else {
            speechOutput = `Airplane ${airplane} is now clear for ${action}.`;
        }
        repromptText = "You can get the status of all airplanes by saying, give me a full status report.";
    } else {
        airplane = null;
        action = null;
        speechOutput = "There is no airplane with that airplane number. Please try again.";
        repromptText = speechOutput;
    }

    callback(sessionAttributes,
         buildSpeechletResponse(airplane, action, speechOutput, repromptText, shouldEndSession));
}

function getAirplaneFromSession(intent, session, callback) {
    constant++;
    const airplaneSlot = intent.slots.Number;
    let repromptText = '';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';
    var airplane, action;

    if (airplaneSlot) {
        airplane = airplaneSlot.value;
        sessionAttributes = createAirplaneAttributes(airplane);
        repromptText = "You can get the status of other airplanes by asking, what is the status of airplane 7?";

        var request = require('request');
        var body = '';
        var out = '';
        var actt = 0;
        //Lets try to make a HTTPS GET request to modulus.io's website.
        //All we did here to make HTTPS call is changed the `http` to `https` in URL.
        request(AIRPLANE_DATA_GET_LOCATION, function (error, response, body) {
            //Check for error
            if(error){
                return console.log('Error:', error);
            }

            //Check for right status code
            if(response.statusCode !== 200){
                return console.log('Invalid Status Code Returned:', response.statusCode);
            }

            console.log('HTML good.');
            actt = JSON.parse(body)[airplane].action;
            console.log(body);

        });
        var thePlane = getAirplaneData(airplane)[airplane];
        speechOutput = `Airplane ${airplane} is currently in ` + ACTION_STATES[actt+constant] + ".";
    } else {
        airplane = null;
        action = null;
        speechOutput = "There is no airplane with that airplane number. Please try again.";
        repromptText = speechOutput;
    }

    callback(sessionAttributes,
         buildSpeechletResponse(airplane, action, speechOutput, repromptText, shouldEndSession));
}

// --------------- Events -----------------------

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(`onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'UpdateAirplaneIntent') {
        updateAirplaneInSession(intent, session, callback);
    } else if (intentName === 'AirplaneStatusIntent') {
        getAirplaneFromSession(intent, session, callback);
    } else if (intentName === 'AMAZON.HelpIntent') {
        getWelcomeResponse(callback);
    } else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(callback);
    } else {
        throw new Error('Invalid intent');
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(`onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${session.sessionId}`);
    // Add cleanup logic here
}


// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        /*
        if (event.session.application.applicationId !== 'amzn1.echo-sdk-ams.app.[unique-value-here]') {
             callback('Invalid Application ID');
        }
        */

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};

function getAirplaneData(number) {

    var request = require('request');
    var body = '';
    var out = '';
    //Lets try to make a HTTPS GET request to modulus.io's website.
    //All we did here to make HTTPS call is changed the `http` to `https` in URL.
    request(AIRPLANE_DATA_GET_LOCATION, function (error, response, body) {
        //Check for error
        if(error){
            return console.log('Error:', error);
        }

        //Check for right status code
        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }

        console.log('HTML good.');
        out = JSON.parse(body);
        console.log(out);
    });
    return out;
}

function post(jason) {
    var request = require('request')

    var options = {
        method: 'POST',
        body: jason, // Javascript object
        json: true, // Use,If you are sending JSON data
        url: AIRPLANE_DATA_POST_LOCATION,
        headers: {
            'Content-Type': 'application/json',
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }
        console.log(' Body :', body);
    });
/*


    console.log(2);
    var https = require('http');

    var body = '';
    console.log(jason);
    var jsonObject = JSON.stringify(jason);
    var optionspost = {
        host: POST_HOST,
        path: POST_PATH,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var reqPost = https.request(optionspost, function(res) {
        console.log("statusCode: ", res.statusCode);
        res.on('data', function (chunk) {
            body += chunk;
        });
    });
    reqPost.write(jsonObject);
    reqPost.end();*/
}
