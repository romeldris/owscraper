var Scraper = require('./OWScraper');

Scraper.getFeaturedStats('ForbiddenX#1223', true).then((stats) => {
	console.log(stats)
});
