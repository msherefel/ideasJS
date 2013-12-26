/*******************************************************
	Factories for ideas Collection
********************************************************/
define(['models/ideas','views/view-idea-list.tpl', 'factories/idea-item'], function(){

	var IdeasListView = Backbone.View.extend({

		el:'.col-md-12.column',
		template: Handlebars.templates['view-idea-list.tpl'],

		initialize: function (options){
		   options || (options={});
		   _.extend(this, _.pick(options, ['ideasCollection']));
		   this.model = this.ideasCollection;
		
		  //this.listenTo(this.model, 'change', this.updateView);
					  
  	           this.render();
		}, 		

		render: function(){
		//Append table to the DOM element.
		this.$el.append(
				this.template({})
			  );

		  _.each(this.model.models, function (idea) {
			var itemView = require('factories/idea-item').buildIdeaItemView();			
			$('tbody').append(itemView.addNewIdeaLine(idea).$el);
  	    	   });
			return this;	
		},
	
		events:{
		 'click i': 'OneMoreStar',
		}, 
		
		OneMoreStar : function(evt){
		  var id = $(evt.currentTarget).data('id');
		  var item = this.ideasCollection.get(id);
		  var nbStar = item.get('nbStars') + 1;
		  item.set({nbStars: nbStar});	
		  console.log("Updated?", item.get('nbStars'));

		},

		updateView: function(){
   		return this.model;
		}
	});

	return {
		buildIdeasListView: function(){
		var viewInstance = new IdeasListView({
			ideasCollection : require('models/ideas')
		});	
		return viewInstance;
	      }
	};
});