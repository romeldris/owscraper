'use strict';
var request = require('request');
var cheerio = require('cheerio');
var BASE_URL = 'https://playoverwatch.com/en-us';

class OWScraper {
	_searchByName(name) {
		let replacedName = name.replace('#', '-');
		return new Promise((resolve, reject) =>{
			request(
				{
					url: `${BASE_URL}/search/account-by-name/${replacedName}`,
					json: true
				}, (err, response, body) => {
				if (err) {
					return reject(err);
				}
				resolve(body);
			});
		});
	}

	_parseFeaturedStats($, type, keys) {
		let stats = {};

		keys.map((key, i) => {
			stats[key] = $(`#${type} .highlights-section ul.row li:nth-child(${i+1}) .card-heading`).text();
		});

		return stats;
	}

	getFeaturedStats(name, type) {
		var profile = {};
		return new Promise((resolve, reject) => {
			this._searchByName(name).then((data) => {
				let careerLink = data[0].careerLink;
				profile = data[0];
				request(`${BASE_URL}${careerLink}`, (err, response, body) => {

					if (err) {
						return reject(err);
					}

					let $ = cheerio.load(body);
					profile.featuredStats = this._parseFeaturedStats($, 'quick-play', ['eliminations', 'damageDone', 'deaths', 'finalBlows', 'healingDone', 'objectiveKills', 'objectiveTime', 'soloKills']);
					resolve(profile);
				})
			})
		});
	}
}

module.exports = new OWScraper();
