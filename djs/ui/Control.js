
define(["declare", "../core/all"], function(declare){

	declare("djs.ui.Control : djs.ui.Display", "djs.core.Controller", "djs.core.tools", function(keys, self, parent, cController, coretools){return {

		"pro all! djs.ui.Controller Controller": undefined,
		
		"__construct": function(){
			this[keys.Controller] = this.make_Controller();
			parent.__construct.apply(this, arguments);
		},
		
		"submit": function(){
			if(this[keys.Controller]) this[keys.Controller].submit();
			return this;
		},

		"thi trigger": function(event){
			this[keys.element].trigger.apply(this[keys.element], arguments);
			return this;
		},

		"thi on": function(event){
			var func = arguments[arguments.length-1];
			if(typeof(func) === "string") arguments[arguments.length-1] = coretools.detach(this, func);
			this[keys.element].on.apply(this[keys.element], arguments);
			return this;
		},

		"make_Controller": function(){
			return new cController();
		}

	}});



}); // MODULE
