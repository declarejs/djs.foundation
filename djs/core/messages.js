
define(["declare", "./all"], function(declare){



	declare("abs djs.core.Message : Model", function(keys, self, parent){return {

		"pro get str category": undefined,
		"pro get int categoryid": 0,
		"pro get set str code": undefined,
		"pro get set str message": undefined

	}}); // CLASS

	declare("djs.core.Affirm : djs.core.Message", function(keys, self, parent){return {

		"pro category": "affirm",
		"pro categoryid": 1,
		"pro message": "Success"

	}}); // CLASS

	declare("djs.core.Notice : djs.core.Message", function(keys, self, parent){return {

		"pro category": "notice",
		"pro categoryid": 2,
		"pro message": "Notice"

	}}); // CLASS

	declare("djs.core.Warning : djs.core.Message", function(keys, self, parent){return {

		"pro category": "warning",
		"pro categoryid": 3,
		"pro message": "Warning"

	}});

	declare("djs.core.Error : djs.core.Message", function(keys, self, parent){return {

		"pro category": "error",
		"pro message": "Error"

	}});

	declare("abs djs.core.ValueError : djs.core.Error");

	declare("djs.core.InvalidValueError : djs.core.ValueError", function(keys, self, parent){return {

		"pro message": "Value is invalid"

	}});

	declare("abs djs.core.RequireValueError : djs.core.ValueError", function(keys, self, parent){return {

		"pro message": "Value is required"

	}});



}); // MODULE