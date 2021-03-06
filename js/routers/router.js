/***************************************
		Router.js
****************************************/
define(['jquery','underscore','backbone','handlebars'], function(){	
	//Constructeur
	var AppRouter = Backbone.Router.extend({
		routes: {
		'':'goHome',
		//Default
		'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;
		//default action
		app_router.on('route:defaultAction', function(actions){
		console.log('No route:', actions);
		});
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});
