
define(["declare", "./all", "../core/all"], function(declare){


	declare("djs.ui.Template : djs.ui.Control", function(keys, self, parent){return {

		"pro all! template": "",
		"pro get output": "",
		"pro all! pre obj inputs": undefined,

		"__construct": function(){
			this[keys.inputs] = this.make_inputs();
			parent.__construct.apply(this, arguments);
		},

		"make_inputs": function(){
			return {value1: "Value 1", value2: "Value 2"};
		},
		
		"split": function(str){
			var parts = str.split(" "),
				parts2 = [];
			for(var i=0; i<parts.length; i++){
				if(parts[i].length) parts2.push(parts[i]);
			}
			return parts2;
		},

		"func_print": function(inputs, name, _else){
			if(_else) return function(){return inputs[name] || _else;}
			else return function(){return inputs[name] || "";};
		},

		"func_if": function(inputs, name, block){
			return function(){return inputs[name] ? block : "";};
		},

		"func_var": function(inputs, name, value){
			return function(){inputs[name] = value; return "";};
		},

		"compile": function(){
			
			var str = this[keys.template];
			if(!str.length) return;

			var parts = str.split("?>").join("<?").split("<?"),
				emptyFunc = function(){return "";},
				inputs = this[keys.inputs],
				that = this,
				returns = [parts[0]];
				

			for(var i=1; i<parts.length; i+=2){
				var parts2 = this.split(parts[i]);

				switch(parts2.shift()){
					case "=":
						var first = parts2.shift(),
							other = parts2.length ? parts2.join(" ").split("'").join("") : false;
						returns.push(this.func_print(inputs, first, other), parts[i+1]);
					break;
					case "var":
						var first = parts2.shift(),
							other = parts2.join(" ").split("'").join("");
						returns.push(this.func_var(inputs, first, other), parts[i+1]);
					break;
					case "if":
						var first = parts2.shift(),
							block = parts[i+1]; // --- WIP
						returns.push(this.func_if(inputs, first, block), "");
					default: 
						returns.push(emptyFunc, parts[i+1]); 
					break;
				}
			}

			show(returns);
			return returns;
		},

		"submit": function(values){
			if(values) declare.props(this, values);
			return this.process();
		},

		"process": function(){
			var parts = this.compile(),
				output = parts[0] || "";

			for(var i=1; i<parts.length; i+=2) output += parts[i]() + parts[i+1];

			this[keys.output] = output;
			show(output);
		},

		"render": function(){
			this.process();
			return this[keys.output];
		}


	}});




}); // MODULE
