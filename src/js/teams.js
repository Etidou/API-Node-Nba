import $ from 'jquery';
import TeamTemplate from './templates/team.hbs';
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
			// container: $('.js-container'),

		}
	}

	initEvents() {
		this.getNba_each();
	}



	getNba_each() {
		const api = {
			endpoint: `https://api-nba-v1.p.rapidapi.com/teams/confName/East`,  

		};

		$.ajaxSetup({cache:false});

		$.ajax({"url" : api.endpoint,
			"data": api.params,
			"headers":{
				'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key': '51f1c1baddmsh02e892b0bd99394p10ae11jsn80c5aa2b10d4'
			}
		}).then((response) => {

			console.log(response);

			const nBteam = response.api.teams;

			$(nBteam).each( (i , item) => {
				this.renderNbaplayer(item);
			})
		})
		.catch((e) => {
			console.log('error with the quote :', e);
		});
	}

	renderNbaplayer (item) {

				var rendered = TeamTemplate(item);
				console.log(rendered);
				$('#team_east').append(rendered);
	}
}





	function search() {

		$("body").on("keyup", "#search_nom", function() {
			var pattern = $(this). val().toLowerCase();
			$(".blocjoueur").each(function(i) {
				console.log('hello');
				var content = $(this).find("h4.lastname").text().toLowerCase();
				if (!content.includes(pattern)) {
					$(this).addClass("not_matched");
				}

				else {
					$(this).removeClass("not_matched");
				}
			});

		});

		$("body").on("keyup", "#search_prenom", function() {
			var pattern = $(this). val().toLowerCase();
			$(".blocjoueur").each(function(i) {
				console.log('hello');
				var content = $(this).find("h4.firstname").text().toLowerCase();
				if (!content.includes(pattern)) {
					$(this).addClass("not_matched");
				}

				else {
					$(this).removeClass("not_matched");
				}
			});

		});


	}
	search();