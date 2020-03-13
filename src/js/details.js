import $ from 'jquery';
import PlayerTemplate from './templates/player.hbs';
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
			endpoint: `https://api-nba-v1.p.rapidapi.com/players/teamId/1`,  

		};

		$.ajaxSetup({cache:false});

		$.ajax({"url" : api.endpoint,
			"data": api.params,
			"headers":{
				'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key': '51f1c1baddmsh02e892b0bd99394p10ae11jsn80c5aa2b10d4'
			}
		}).then((response) => {
			//console.log(response);

			const nBPlayer = response.api.players;

			$(nBPlayer).each( (i , item) => {
				//console.log(item);
				this.renderNbaplayer(item);
				// "firstName":this.item.firstName,
				// 	"lastName":this.item.lastName,
				// 	"playerId":this.item.playerId,
				// 	"jersey":this.item.leagues.standard.jersey
			})
		})
		.catch((e) => {
			console.log('error with the quote :', e);
		});
	}

	renderNbaplayer (item) {


					//console.log("firstName");
	
		
				var rendered = PlayerTemplate(item);
				console.log(rendered);
				$('#player').append(rendered);





	// $('body').append('<div class="flex"></div>');

	// 	$('div.flex').append('<p class="details js-playerlasteach"></p>');

	// 	$('p:last-of-type').append(firstName);

	// 	$('div.flex').append('<p class="details js-playernameeach"></p>');

	// 	$('p:last-of-type').append(lastName);

	// 	$('div.flex').append('<p class="details js-playerideach"></p>');

	// 	$('p:last-of-type').append(playerId);

	// 	$('div.flex').append('<p class="details js-playerjerseyeach"></p>');

	// 	$('p:last-of-type').append(jersey);

	// 	this.Els.playernameText.text(firstName);
	// 	this.Els.playernamelastText.text(lastName);
	// 	this.Els.playerclubName.text(playerId);
	// 	this.Els.playerjerseyText.text(jersey);
	// 	this.Els.container.addClass('is-ready');
	}
}




// const nBPlayer = response.api.players;

//        $(nBPlayer).each( () => {


