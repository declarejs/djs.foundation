define(["declare", "./messages"], function(declare){









	declare("djs.core.Report", "djs.Map", function(self, parent, core){

		self.__construct = function(){
            this._type = declare.ListMap;
            parent.__construct.apply(this, arguments);
		}





		// --- protected --- //
		/*
		self.protected.hasByType = function(name, MsgClass){
			if(name) return this.items[name] ? true : false;



			if(!name){
				for(var item in this.items){
					if(this.items[item] instanceof MsgClass) return true;
				}
				return false;
			}

			if(!this.items[name]) return false;
			for(var item in this.items){
				if(this.items[item] instanceof MsgClass) return true;
			}
			return false;
		}

		// --- messages --- //

		self.hasMessage = function(name){
			if(name) return this.items[name] ? true : false;
			for(var item in this.items) return true;
			return false;
		}

		self.addMessage = function(name, Obj){
			declare.mustCast(Obj, core.Message); // core.Message
			if(this.items[name]) this.items[name].push(Obj);
			else this.items[name] = new declare.ListOf(core.Message, Obj);
			return this;
		}

		self.protected.addByType = function(name, Msg){
			declare.mustCast(Msg, core.Message);
			if(this.items[name]) this.items[name].push(Msg);
			else this.items[name] = new declare.List(Msg);
			return this;
		}
		
		self.hasError = function(name){return this.hasMessage(name, core.Error);}
		
		self.addError = function(name, code){return this.addMessage(name, new core.Error(code));}
		*/
		

		// END OF CLASS

	}, "djs.core");




});