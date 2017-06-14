
define(["declare"], function(declare){

	declare("abs djs.core.View : Base", function(keys, self, parent){return {

		"pro all Model Model": undefined,

		"__construct": function(Model){
			parent.__construct.call(this);
			if(Model) this.set_Model(Model);
		},

		"Model to_Model": function(){return this[keys.Model];},

		"thi change": function(name, value){
			return this.set(name, value).update(name);
		},

		"thi update": function(name){
			this["update_" + name]();
			return this;
		},

		"str abs render": function(){}, // main override

	}});



}); // MODULE