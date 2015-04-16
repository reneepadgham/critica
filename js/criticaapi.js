//This $.get request won't work unless sent from a *.critica.io URL!  Use the sampel data below for testing purposes, and we can test this code when we go live
$.get('https://api.critica.io/pub/threads?limit=30', function(data, status, jqXHR){
  if(jqXHR.status === 200 && data.status === 'ok') {
    var arrayOfCriticaPosts = JSON.parse(data.result);
    //Do whatever you gotta do with the the post data
  } else {
    //Oh no, something went wrong!
  }
});



//This is an example of what the our post data would look like - I literally just pulled this 30 minutes ago from the live server...
var critcaPostsAsOfYesterday = [  
  {  
     "article_img":null,
     "article_title":"South Park Riffs On Startups, Kickstarter",
     "article_url":"http://techcrunch.com/2014/09/26/south-park-riffs-on-startups-kickstarter-and-brilliantly-tackles-washington-redskins-name-controversy/",
     "created_by":"101280562732473772023",
     "date_ends":"2014-10-02T07:00:00",
     "date_posted":"2014-09-30T19:00:00",
     "date_revealed":"2014-10-02T07:00:00",
     "header_img":"https://s3-us-west-2.amazonaws.com/img.critica.io/static/discussion_header/09-30.jpg",
     "message":"From The Social Network movie, to HBO's Silicon Valley, to the recent Southpark episode, the media paints a certain picture on how life is in a Startup. From the Southpark episode: Stan explains to his dad that he doesn’t need school anymore because he’s doing a startup now. “We don’t want to do anything,” says Stan. Then Kyle chimes in and explains, “That’s why we want to have a startup company.”",
     "participants":[  
        "101280562732473772023",
        "102631622303968931105",
        "103993429582084564339",
        "103015787642365723882",
        "114791868663775916703",
        "103007862016179013419",
        "100248526944214963361",
        "100750763363600824540",
        "118252319146213972969",
        "105823831668795325442",
        "111284733900120279837"
     ],
     "thread_id":"542af3a2aefd964a94329dbd",
     "title":"Public perception of startup life. What do you think about how startup culture is portrayed in the media?"
  },

  {  
     "article_img":null,
     "article_title":"An audacious plan to fix the Internet's original sin",
     "article_url":"http://fortune.com/2014/09/26/ello-social-network/",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-30T19:00:00",
     "date_posted":"2014-09-29T19:00:00",
     "date_revealed":"2014-09-30T19:00:00",
     "header_img":"http://upload.wikimedia.org/wikipedia/commons/b/be/Dollar_symbol.jpg",
     "message":"Ello, the anti-advertising social network that just launched, wants to prove that advertising isn’t the only way to make money on the Internet. The Atlantic recently called digital advertising the Internet’s original sin. \"It’s not that the world loves digital advertising. It’s that advertising happens to be the thing that works best.\"",
     "participants":[  
        "101280562732473772023",
        "102631622303968931105",
        "114791868663775916703",
        "109185694454104507831",
        "111511140088520788693",
        "116597806134398236134"
     ],
     "thread_id":"54296fc4aefd964a94329db3",
     "title":"Ello, Advertising and the Internet. Is advertising the only way to monetize content on the Internet?"
  },

  {  
     "article_img":null,
     "article_title":"Thom Yorke, Radiohead Artist, Releases Album via BitTorrent",
     "article_url":"http://www.nytimes.com/2014/09/27/business/media/radiohead-artist-releases-album-via-bittorrent.html",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-29T13:30:00",
     "date_posted":"2014-09-27T13:30:00",
     "date_revealed":"2014-09-29T19:00:00",
     "header_img":"https://upload.wikimedia.org/wikipedia/commons/a/af/Melt_Festival_2013_-_Atoms_For_Peace-31.jpg",
     "message":"Thom Yorke, Radiohead’s lead singer, just released his solo album through BitTorrent. Yorke: \"If it works well it could be an effective way of handing some control of Internet commerce back to the people who are creating the work\".",
     "participants":[  
        "101280562732473772023",
        "100978365079985546000",
        "100750763363600824540",
        "114791868663775916703",
        "102631622303968931105",
        "116597806134398236134"
     ],
     "thread_id":"5426badbaefd964a94329da7",
     "title":"Releasing music on BitTorrent. What does this mean for the music industry?"
  },

  {  
     "article_img":null,
     "article_title":"FBI blasts Apple, Google for locking police out of phones",
     "article_url":"http://www.washingtonpost.com/business/technology/fbi-blasts-apple-google-f…e-out-of-phones/2014/09/25/68c4e08e-4344-11e4-9a15-137aa0153527_story.html",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-27T13:01:00",
     "date_posted":"2014-09-26T13:01:00",
     "date_revealed":"2014-09-27T13:01:00",
     "header_img":"https://upload.wikimedia.org/wikipedia/commons/f/f7/Artists-impressions-of-Lady-Justice,_(statue_on_the_Old_Bailey,_London).png",
     "message":"\"FBI Director James B. Comey sharply criticized Apple and Google on Thursday for developing forms of smartphone encryption so secure that law enforcement officials cannot easily gain access to information stored on the devices — even when they have valid search warrants. Police have said that the ability to search photos, messages and Web histories on smartphones is essential to solving a range of serious crimes, including murder, child pornography and attempted terrorist attacks. FBI Director Comey: 'There will come a day when it will matter a great deal to the lives of people . . . that we will be able to gain access' to such devices.\"",
     "participants":[  
        "102631622303968931105",
        "101280562732473772023",
        "106211845744191150551",
        "114791868663775916703",
        "100750763363600824540",
        "111805970003194271461",
        "114079865507843303620",
        "107291154774566741827",
        "116597806134398236134"
     ],
     "thread_id":"54255b7caefd964a94329d97",
     "title":"Digital Privacy and the Rule of Law. Where do you stand?"
  },

  {  
     "article_img":null,
     "article_title":"ESPN's Bill Simmons Suspended for Goodell Rant; Barred From Twitter",
     "article_url":"http://www.chicagotribune.com/sports/breaking/la-sp-sn-espn-bill-simmons-suspended-20140924-story.html",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-26T13:01:00",
     "date_posted":"2014-09-25T13:01:00",
     "date_revealed":"2014-09-26T13:01:00",
     "header_img":"https://s3-us-west-2.amazonaws.com/img.critica.io/static/discussion_header/censor.jpg",
     "message":"ESPN analyst Bill Simmons has been suspended from the network for three weeks after he made profane comments about NFL Commissioner Roger Goodell during a podcast. In addition, ESPN has stated that Simmons is not allowed to use Twitter while suspended.",
     "participants":[  
        "102631622303968931105",
        "101280562732473772023",
        "114942144487732117404",
        "108941460039020362300",
        "109185694454104507831",
        "100750763363600824540",
        "110339891208653666710",
        "106445437677760269220",
        "104411725001531269969",
        "116597806134398236134"
     ],
     "thread_id":"5423efd7aefd964a94329d85",
     "title":"Policing Social Media: Where is the Line Between Public and Private Online Presence?"
  },

  {  
     "article_img":null,
     "article_title":"GMO debate grows over golden rice in the Philippines",
     "article_url":"http://www.pbs.org/newshour/bb/gmo-debate-grows-golden-rice-philippines/",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-25T13:01:00",
     "date_posted":"2014-09-24T13:01:00",
     "date_revealed":"2014-09-25T13:01:00",
     "header_img":"http://upload.wikimedia.org/wikipedia/commons/2/29/Golden_Rice.jpg",
     "message":"\"Vitamin A deficiency is a pervasive and silent killer of malnourished children and pregnant mothers in the Third World. That’s why people in the Philippines are working to add vitamin A to the daily staple, rice. But the rice they’re meticulously breeding has become the gold standard for a heated debate over genetically modified organisms, or GMOs.\"",
     "participants":[  
        "101280562732473772023",
        "117475462642358330807",
        "112993698093363013319",
        "110985530335458147921",
        "109658891232891885608",
        "106718420927536427546",
        "103815774430739018914",
        "116506689777582213322",
        "105823831668795325442",
        "106862965596078503878",
        "107863295642106647828",
        "116597806134398236134",
        "106211845744191150551",
        "111079266146452390421"
     ],
     "thread_id":"54228de0aefd964a94329d6d",
     "title":"What do you think about Genetically Modified Organisms (GMOs)?"
  },

  {  
     "article_img":null,
     "article_title":"Netflix wants to put a positive spin on spoilers",
     "article_url":"http://variety.com/2014/digital/news/netflix-acts-like-it-invented-tv-spoilers-and-thats-smart-marketing-1201310634/",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-24T13:00:00",
     "date_posted":"2014-09-23T13:00:00",
     "date_revealed":"2014-09-24T13:00:00",
     "header_img":"http://resources3.news.com.au/images/2014/04/08/1226876/678291-horrible-history-2.jpg",
     "message":"\"Spoilers, according to Netflix, have essentially become teasers, not a devastating blow that cuts into viewership. According to the recent survey, 76% of Americans said they’ve accepted spoilers as a fact of life.\"",
     "participants":[  
        "101280562732473772023",
        "103410594632439525009",
        "116597806134398236134",
        "106862965596078503878",
        "111426190343010059398",
        "117413133952632022498"
     ],
     "thread_id":"54212f0908b88e48fcd25b6d",
     "title":"What do you think of spoilers?"
  },

  {  
     "article_img":null,
     "article_title":"Cambrian Genomics is 3D Printing DNA",
     "article_url":"http://3dprintingindustry.com/2014/04/10/cambrian-genomics-3d-printing-dna/",
     "created_by":"101280562732473772023",
     "date_ends":"2014-09-23T07:00:00",
     "date_posted":"2014-09-22T07:00:00",
     "date_revealed":"2014-09-23T13:00:00",
     "header_img":"http://upload.wikimedia.org/wikipedia/commons/2/27/PLoSBiol3.5.Fig7ChromosomesAluFish.jpg",
     "message":"Cambrian Genomics co-founder Austen Heinz: \"This technology is going to allow us to actually bring back dinosaurs, bring back extinct species, make life forms that help us live in space and go to other planets.\"",
     "participants":[  
        "102631622303968931105",
        "101280562732473772023",
        "107863295642106647828",
        "113677688601493080860",
        "100794463327419673523",
        "100978365079985546000",
        "116597806134398236134"
     ],
     "text":"Cambrian Genomics co-founder Austen Heinz: \"This technology is going to allow us to actually bring back dinosaurs, bring back extinct species, make life forms that help us live in space and go to other planets",
     "thread_id":"541fb71daefd964a94329d5b",
     "title":"3D Printing DNA: What Repercussions Does It Have For The Future of Humanity?"
  },

  {  
     "article_img":null,
     "article_title":"Peyton Manning Infers Pizza Business Is 'Good' in Colorado Due to Legalization",
     "article_url":"http://bleacherreport.com/articles/2203196-peyton-manning-infers-pizza-business-is-good-in-colorado-due-to-legalization",
     "created_by":"118121075696280288552",
     "date_ends":"2014-09-21T17:00:00",
     "date_posted":"2014-09-19T17:00:00",
     "date_revealed":"2014-09-22T07:00:00",
     "header_img":"https://s3-us-west-2.amazonaws.com/img.critica.io/static/discussion_header/sativa.jpg",
     "message":"As funny as this story may be, it sheds light on a bigger issue. Is legalizing marijuana better for an economy?",
     "participants":[  
        "102935615978953603833",
        "102631622303968931105",
        "114791868663775916703",
        "109185694454104507831",
        "112444956516798412408"
     ],
     "thread_id":"541c0423aefd961d811c6602",
     "title":"Legalize It?"
  },

  {  
     "article_img":null,
     "article_title":"Opinions from The Verge: Can Video Games Be Sports?",
     "article_url":"http://www.theverge.com/2014/7/11/5890907/can-video-games-be-sports",
     "created_by":"118121075696280288552",
     "date_ends":"2014-09-19T17:00:00",
     "date_posted":"2014-09-18T17:00:00",
     "date_revealed":"2014-09-19T17:00:00",
     "header_img":"https://upload.wikimedia.org/wikipedia/commons/0/0a/The_International_2014.jpg",
     "message":"E-Sports are on the rise in the US. This year's Dota 2 Championship, for example, featured a prize pool of nearly $11 million, and brought together teams and fans from all over the world. Amazon recently completed its acquisition of video game streaming site Twitch for almost $1 billion. Twitch Co-Founder Kevin Lin stated at TechCrunch Disrupt that \"the NFL better watch out.\" Does E-Sports have what it takes to take on traditional sports?",
     "participants":[  
        "102935615978953603833",
        "102631622303968931105",
        "114791868663775916703",
        "109185694454104507831",
        "116597806134398236134",
        "102649787285324539601",
        "103410594632439525009",
        "115357971852512084162"
     ],
     "thread_id":"541a62d3aefd961d811c65f8",
     "title":"Will E-Sports Overtake Traditional Sports?"
  },

  {  
     "article_img":null,
     "article_title":"Venture Capitalist Sounds Alarm on Startup Investing",
     "article_url":"http://online.wsj.com/articles/venture-capitalist-sounds-alarm-on-silicon-valley-risk-1410740054",
     "created_by":"118121075696280288552",
     "date_ends":"2014-09-18T17:00:00",
     "date_posted":"2014-09-17T13:49:05.321000",
     "date_revealed":"2014-09-18T17:00:00",
     "header_img":"http://ylovephoto.com/fr/wp-content/uploads/2009/07/bubble_pop.jpg",
     "message":"Venture Capitalist Bill Gurley (Benchmark Capital) says that \"Silicon Valley as a whole...is taking on an excessive amount of risk right now. Unprecedented since '99.\" Are we in another tech bubble?",
     "participants":[  
        "101280562732473772023",
        "102631622303968931105",
        "111756325060695735056",
        "106211845744191150551",
        "106742858159347694626",
        "115357971852512084162",
        "116597806134398236134",
        "114791868663775916703",
        "103007862016179013419",
        "118252319146213972969",
        "111468683721191045961",
        "114495197112660096492"
     ],
     "thread_id":"54198a9108b88e1b96a33868",
     "title":"Is Silicon Valley About to Burst?"
  },

  {  
     "article_img":"http://i.forbesimg.com/assets/img/forbes_logo/forbes_logo_white.svg",
     "article_title":"Alibaba Boosts IPO Price Range, Could Raise Up To $25 Billion",
     "article_url":"http://www.forbes.com/sites/chriswright/2014/09/16/so-what-exactly-is-alibaba/",
     "created_by":"118121075696280288552",
     "date_ends":"2014-09-17T07:51:55.081000",
     "date_posted":"2014-09-16T10:51:55.081000",
     "date_revealed":"2014-09-17T07:01:00",
     "header_img":"https://upload.wikimedia.org/wikipedia/commons/2/2e/Pano-nyse.jpg",
     "message":"Yesterday, Alibaba announced that it had set its price range for its IPO to $66-$68 per share, putting its valuation at up to $168 billion dollars. This IPO, the largest in US history, would put Alibaba's market capitalization above that of eBay ($65 Bn) and Amazon ($150 Bn), and within striking range of Facebook ($200 Bn). Is Alibaba's offering a sign of a shift in tech leadership from the US to China?",
     "participants":[  
        "101280562732473772023",
        "103410594632439525009",
        "111942754154982517301",
        "104286978359334774595",
        "116597806134398236134",
        "109658891232891885608",
        "114791868663775916703",
        "111992030728264330131",
        "107291154774566741827",
        "107863295642106647828",
        "110211693486182528211"
     ],
     "thread_id":"5418164b08b88e1b96a33856",
     "title":"Alibaba's Massive Valuation: A Sign of Things to Come?"
  }
];

//var posts = JSON.parse(critcaPostsAsOfYesterday);
var posts = critcaPostsAsOfYesterday;