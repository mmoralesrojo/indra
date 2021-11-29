'use strict';
var fetch = require('node-fetch');
const { readFileSync } = require('fs');
var transform = require('jsonpath-object-transform');
var Actor = require('./models/Actor.js');
var tp = require('./helpers/transformPatterns.js');

module.exports.getPeople = async (event) => getPeople(event);
module.exports.getPersonById = async (event) => getPersonById(event);
module.exports.getFilms = async (event) => getFilms(event);
module.exports.getFilmById = async (event) => getFilmById(event);
module.exports.getStarships = async (event) => getStarships(event);
module.exports.getStarshipById = async (event) => getStarshipById(event);
module.exports.getActors = async (event) => getActors(event);
module.exports.getActorById = async (event) => getActorById(event);
module.exports.createActor = async (event) => createActor(event);
module.exports.updateActor = async (event) => updateActor(event);
module.exports.deleteActor = async (event) => deleteActor(event);
module.exports.swagger = async (event) => swagger(event);

async function getPeople(event) {
  let page = event.queryStringParameters == null ? 1 : event.queryStringParameters.page;
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/people?page=' + page, options);
    const data = await response.json();
    for (let index in data.results) {
      data.results[index] = transform(data.results[index], tp.PeopleTransform)
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getPersonById(event) {
  let id = event.pathParameters.id;
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/people/' + id, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(transform(data, tp.PeopleTransform), null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getFilms(event) {
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/films', options);
    const data = await response.json();
    for (let index in data.results) {
      data.results[index] = transform(data.results[index], tp.FilmTransform)
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getFilmById(event) {
  let id = event.pathParameters.id;
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/films/' + id, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(transform(data, tp.FilmTransform), null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getStarships(event) {
  let page = event.queryStringParameters == null ? 1 : event.queryStringParameters.page;
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/starships?page=' + page, options);
    const data = await response.json();
    for (let index in data.results) {
      data.results[index] = transform(data.results[index], tp.StarshipTransform)
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getStarshipById(event) {
  let id = event.pathParameters.id;
  const options = {
    method: 'GET'
  }
  try {
    const response = await fetch('https://swapi.py4e.com/api/starships/' + id, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(transform(data, tp.StarshipTransform), null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function getActors(event) {
  const results = await Actor.scan().exec();
  return {
    statusCode: 200,
    body: JSON.stringify(results, null, 2),
  };
}

async function getActorById(event) {
  let id = event.pathParameters.id;
  const result = await Actor.get(id);
  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };
}

async function createActor(event) {
  const {id, firstName, lastName} = JSON.parse(event.body);
  try {
    const newActor = await Actor.create({
      id: id,
      firstName: firstName,
      lastName: lastName
    });
    return {
      statusCode: 200,
      body: JSON.stringify(newActor, null, 2),
    };
  }
  catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function updateActor(event) {
  const {id, firstName, lastName} = JSON.parse(event.body);
  try {
    const existingActor = await Actor.update({
      id: id,
    },
    {
      firstName: firstName,
      lastName: lastName
    });
    return {
      statusCode: 200,
      body: JSON.stringify(existingActor, null, 2),
    };
  }
  catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function deleteActor(event) {
  const {id} = JSON.parse(event.body);
  try {
    const existingActor = await Actor.delete(id);
    return {
      statusCode: 200,
      body: JSON.stringify(existingActor, null, 2),
    };
  }
  catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error: ' + error
      }, null, 2),
    };
  }
}

async function swagger(event) {
  if (event.path === '/swagger.json') {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.parse(readFileSync('./docs/indra-swagger-s.json'))
    }
  }

  const body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Indra API</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
    </head>
    <body>
        <div id="swagger"></div>
        <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
        <script>
          SwaggerUIBundle({
            dom_id: '#swagger',
            url: '/dev/swagger.json'
        });
        </script>
    </body>
    </html>`;

  return {
    statusCode: 200,
    headers: {
      ['Content-Type']: 'text/html',
    },
    body
  };
}