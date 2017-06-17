
define(["declare", "./all"], function(declare){

	declare("djs.core.Validate : djs.core.Controller", "Map<string>", function(keys, self, parent){return {

		"pro set get mix value": undefined,
		"pro set get typ type": "mixed",
		"pro set get boo required": false,
		"pro all! Map<string> StringMap": undefined,
		
		"__construct": function(){
			this[keys.StringMap] = this.make_StringMap(); // generate
			parent.__construct.apply(this, arguments);
		},

		"process": function(){
			var value = this[keys.value],
				value2 = declare.cast(this[keys.value], this[keys.type]);
			if(value2 === undefined) return declare.make("djs.core.InvalidValueError");
		}

	}});



}); // MODULE