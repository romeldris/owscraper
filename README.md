# Overwatch Scraper
---
Scraper to be used to scrape http://playoverwatch.com for player stats.

## Usage
Since this is not a published package yet, you'll have to manually include this in your project

#### Dependencies
```
"dependencies": {
  "cheerio": "^0.20.0",
  "request": "^2.72.0"
}
```

You can also just `npm install --save cheerio request`
And you'll need to copy the [OWScraper.js](https://raw.githubusercontent.com/romeldris/owscraper/master/OWScraper.js) file and require it.

#### Example:
```
var scraper = require('./OWScraper')

OWScraper.getFeaturedStats('ForbiddenX#1223').then((stats) => {
    //Use the stats
});

```

## getFeaturedStats(name, isCompetitive)
#### Params
| Param | Type | Description |
| --- | --- | --- |
| name | String | Battletag, Gamertag, or PSN |
| isCompetitive | Boolean | **false**: quick-play status **true:** competitive stats |

#### Returns
```
{
	"careerLink": "/career/pc/us/ForbiddenX-1223",
	"platformDisplayName": "ForbiddenX#1223",
	"level": 28,
	"portrait": "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000008F4.png",
	"featuredStats": {
		"eliminations": "27.61",
		"damageDone": "13,964",
		"deaths": "17.61",
		"finalBlows": "14.77",
		"healingDone": "1,027",
		"objectiveKills": "12.99",
		"objectiveTime": "01:12",
		"soloKills": "4.49"
	}
}
```



## Todo
+ Error handling
+ Tests
+ Publish as a package
+ Add rest of the stats
