
define(["declare", "./all", "../core/all"], function(declare){




	declare("djs.ui.Display : djs.core.View", function(keys, self, parent){return {

		"pro get set! djs.ui.element element": undefined,

		"__construct": function(selector){
			parent.__construct.call(this);
			this.set_element(selector);
		},

		"thi trigger": function(event){
			this[keys.element].trigger.apply(this[keys.element], arguments);
			return this;
		},

		"thi on": function(event){
			this[keys.element].on.apply(this[keys.element], arguments);
			return this;
		},

		"thi append": function(){
			this[keys.element].append.apply(this[keys.element], arguments);
			return this;
		},

		"thi prepend": function(){
			this[keys.element].prepend.apply(this[keys.element], arguments);
			return this;
		},

		"thi empty": function(){
			this[keys.element].empty.apply(this[keys.element], arguments);
			return this;
		},

		"make_element": function(){return $("<div/>");},

		"str abs render": function(){
			return this[keys.element].html();
		}

	}});



}); // MODULE