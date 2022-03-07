const fetch = require('node-fetch')

//dependencies injection, inject fetch from node-fetch into our function
const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        return {
            count: data.count,
            result: data.results
        }
    })
}

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    return {
        count: data.count,
        result: data.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}