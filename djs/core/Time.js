
define(["declare"], function(declare){

	declare("djs.core.Time : Model<Date>", function(keys, self, parent){ return {

		"thi set_milliseconds": function(n){this[keys.data].setMilliseconds(n); return this;},
		"int get_milliseconds": function(){return this[keys.data].getMilliseconds();},

		"thi set_second": function(n){this[keys.data].setSeconds(n); return this;},
		"int get_second": function(){return this[keys.data].getSeconds();},

		"thi set_minute": function(n){this[keys.data].setMinutes(n); return this;},
		"int get_minute": function(){return this[keys.data].getMinutes();},

		"thi set_hour": function(n){this[keys.data].setHours(n); return this;},
		"int get_hour": function(){return this[keys.data].getHours();},

		"thi set_day": function(n){this[keys.data].setDate(n); return this;},
		"int get_day": function(){return this[keys.data].getDate();},

		"thi set_month": function(n){this[keys.data].setMonth(n); return this;},
		"int get_month": function(){return this[keys.data].getMonth();},

		"thi set_year": function(n){this[keys.data].setFullYear(n); return this;},
		"int get_year": function(){return this[keys.data].getFullYear();},

		"thi make_data": function(mixed){
			return mixed ? new Date(mixed) : new Date();
		}


	}});



}); // MODULE