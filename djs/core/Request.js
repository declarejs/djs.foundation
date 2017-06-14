
define(["declare", "./all"], function(declare){



	declare("djs.core.Request : Model", function(keys, self, parent){return {

		"pro get set obj inputs": undefined,
		"pro get set! obj outputs": undefined,
		"pro get set djs.core.Error Error": undefined,

		"__construct": function(){
			this[keys.outputs] = this.make_output();
			parent.__construct.apply(this, arguments);
		},

		"obj make_output": function(){
			return {};
		}

	}}); // CLASS



}); // MODULE