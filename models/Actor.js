const dynamoose = require('dynamoose');

const Actor = dynamoose.model(process.env.ACTOR_TABLE, {
	'id': String,
	'firstName': String,
	'lastName': String
});

module.exports = Actor;