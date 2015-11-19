define(["declare"], function(declare){


	declare.abstract("djs.core.Message", "djs.Base", function(self, parent, core){

        self._code = "";

        self.__construct = function(code){
            if(code) this.code(code);
        }

        self.code = function(str){
            if(str === undefined) return this._code;
            this._code = declare.cast(str, "string", "");
            return this._code;
        }
        

		// END OF CLASS

	}, "djs.core");



}); // END MODULE

