define(["declare", "./Base"], function(declare){


	declare("djs.core.Model", "djs.Map", function(self, parent, lib){

		self.appendable = true;
		self.Fields = undefined;
		self.static.Builds = undefined;

		self.__construct = function(){
            console.log("construct djs.core.Model"); // --- TEMP
			parent.__construct.call(this);
			var classname = declare.className(this);


            //console.log("construct djs.core.Model 222: " + classname);
			if(classname === "djs.core.Model"){
				this.Fields = {};
				return; // an open model, it's appendable
			}

			// extended model is not appendable
			this.appendable = false;
			if(this.static.Builds[classname]){
				this.Fields = this.static.Builds[classname];
			} else {
				this.Fields = {};
				this.build();
				this.static.Builds[classname] = this.Fields;
			}

			// setting values?
			if(arguments.length) self.set.apply(this, arguments);
		}

		self.protected.build = function(){} // extended models override this method

		self.protected.convert = function(name, value){
			return this.Fields[name] ? declare.cast(value, this.Fields[name].type, this.Fields[name].value) : undefined;
		}

		self.protected.setField = function(name, type, value, readonly){
			this.Fields[name] = {type: type, value: value, readonly: readonly};
			// --- WIP
			return this;
		}

		self.type = function(field){
			return this.Fields[field] ? this.Fields[field].type : false;
		}

		self.hasField = function(field){
			return this.Fields[field] ? true : false;
		}

		self.readOnly = function(field){
			return this.Fields[field] ? this.Fields[field].readonly : false;
		}

		self.addField = function(name, type, value, readonly){
			return this.appendable ? this.setField(name, type, value, readonly) : this;
		}

		self.set = function(name, value){
			if(this.Fields[name]) return this.Fields[name].readonly ? this : parent.set.apply(this, arguments);
			return parent.set.apply(this, arguments);
		}

		// END OF CLASS
	});




}); // END MODULE

