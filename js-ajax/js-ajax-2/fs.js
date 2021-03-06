const request = require('request');

const fsConfig = require('./fs-config');

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20140601';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);

function loadVenues(locationName, venueKeyword) {
  const requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    const venues = body.response.groups[0].items;
    const checkins = [];
    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        checkins: venue.venue.stats.checkinsCount,
        users: venue.venue.stats.usersCount,
      };
      checkins.push(checkin);
    }

    console.log(checkins);
  });
}

function getRatings(locationName, venueKeyword) {
  const requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    const venues = body.response.groups[0].items;
    const checkins = [];
    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        rating: venue.venue.rating,
      };
      checkins.push(checkin);
    }

    console.log(checkins);
  });
}

function getURLs(locationName, venueKeyword) {
  const requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    const venues = body.response.groups[0].items;
    const checkins = [];
    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        url: venue.venue.url,
      };
      checkins.push(checkin);
    }

    console.log(checkins);
  });
}

function getDetails(locationName, venueKeyword) {
  const requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    const venues = body.response.groups[0].items;
    const checkins = [];
    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        url: venue.venue.url,
        rating: venue.venue.rating,
        checkins: venue.venue.stats.checkinsCount,
        users: venue.venue.stats.usersCount,
        tips: venue.tips[0].text,

      };
      checkins.push(checkin);
    }

    console.log(checkins);
  });
}

const locationName = 'Waterford, IE';

// loadVenues(locationName, '');
// getRatings(locationName, '');
// getURLs(locationName, '');
getDetails(locationName, '');
