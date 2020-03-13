import $ from 'jquery';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Details {
	constructor(){
		this.initEls();



		this.initEvents();
	}


	initEls () {
		this.Els = {
			playernamelastText: $('.js-playerlasteach'),
			playerclubName: $('.js-playerideach'),
			playerjerseyText: $('.js-playerjerseyeach'),
			playernameText: $('.js-playernameeach'),
			container: $('.js-container'),

		}
	}

	initEvents() {
		this.getNba_each();
	}



  getNba_each() {
		const api = {
			 endpoint: `https://api-nba-v1.p.rapidapi.com/teams/teamId/1`,  

		};

		$.ajaxSetup({cache:false});

		$.ajax({"url" : api.endpoint,
			"data": api.params,
			"headers":{
    		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    		'x-rapidapi-key': '51f1c1baddmsh02e892b0bd99394p10ae11jsn80c5aa2b10d4'
  			}
  		})

		const nBPlayer = response.api.players;

		$(nBPlayer).each( () => {
			console.log(response.api);
			this.renderNbaplayer(response.api.players.firstName,response.api.players.lastName,response.api.players.playerId,response.api.players.leagues.standard.jersey);
		})
		.catch((e) => {
			console.log('error with the quote :', e);
		});
	}

	 renderNbaplayer (firstName, lastName, playerId,jersey) {


	 	this.Els.playernameText.text(firstName);
        this.Els.playernamelastText.text(lastName);
        this.Els.playerclubName.text(playerId);
        this.Els.playerjerseyText.text(jersey);
        this.Els.container.addClass('is-ready');
	}
}


	

// const nBPlayer = response.api.players;

//        $(nBPlayer).each( () => {


