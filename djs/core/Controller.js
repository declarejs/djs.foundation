
define(["declare"], function(declare){

	declare("djs.core.Controller : Base", "djs.core.tools", function(keys, self, parent, coretools){return {

		"pro all Model": undefined,
		"pro Array handlers": undefined,

		"__construct": function(){
			this[keys.handlers] = {};
			parent.__construct.apply(this, arguments);
		},


		// --- handlers --- //

		"thi on": function(event, func){
			var handlers = this[keys.handlers];
			if(handlers[event]) handlers[event].push(func);
			else handlers[event] = [func];
			return this;
		},

		"thi trigger": function(event){
			var funcs = this[keys.handlers][event];
			if(funcs){
				for(var i=0; i<funcs.length; i++) funcs[i].apply(this, arguments);
			}
			return this;
		},


		// --- functions --- //

		"Model to_Model": function(){
			return this[keys.Model];
		},

		"djs.core.Request request": function(Obj){
			mustCast(Obj, "djs.core.Request");
			var inputs = Obj.get("inputs");
			if(inputs) declare.attributes(this, inputs);
			return Obj.values({Error: this.submit(), outputs: this.values()});
		},

		"djs.core.Error submitWith": function(values){
			if(values) declare.attributes(this, values);
			return this.submit();
		},

		// main override

		"djs.core.Error submit": function(){}

	}});



}); // MODULE