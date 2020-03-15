import $ from 'jquery';
import TeamTemplate from './templates/team.hbs';
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

	}

	initEvents() {
		this.getTeam_each();
		this.getNba_each();
	}



	getTeam_each() {
		const api = {
			endpoint: `https://api-nba-v1.p.rapidapi.com/teams/confName/East`,  

		};



		var team_id = $(this).attr('data-id');
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
				this.renderNbaTeam(item);
			})
			$.ajaxSetup({cache:false});
			$('body').on('click', '.bloclub', function() {

				var team_id = $(this).attr('data-id');

				console.log(team_id);
			})
			.catch((e) => {
				console.log('error with the quote :', e);
			});
		});
	}

	renderNbaTeam (item) {

		var rendered = TeamTemplate(item);
		console.log(rendered);
		$('#team_east').append(rendered);
	}
	



	getNba_each() {
		const api = {
			endpoint: `https://api-nba-v1.p.rapidapi.com/players/teamId/${team_id}`,  

		};

		$.ajaxSetup({cache:false});

		$.ajax({"url" : api.endpoint,
			"data": api.params,
			"headers":{
				'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key': '51f1c1baddmsh02e892b0bd99394p10ae11jsn80c5aa2b10d4'
			}
		}).then((response) => {

			const nBPlayer = response.api.players;

			$(nBPlayer).each( (i , item) => {
				this.renderNbaplayer(item);
			})
		})
		.catch((e) => {
			console.log('error with the quote :', e);
		});
	}

	renderNbaplayer (item) {
				var rendered = PlayerTemplate(item);
				console.log(rendered);
				$('#player').append(rendered);
	}




}



