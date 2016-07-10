var Scraper = require('./Scraper');

Scraper.getFeaturedStats('ForbiddenX#1223').then((stats) => {
	console.log(stats)
});
