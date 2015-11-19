define(["declare", "./Base", "./Model"], function(declare){




    // the class
    declare("djs.core.View", "djs.core.Base", function(self, parent, core){

        self.Model = undefined;

        self.__construct = function(){
            parent.__construct.call(this);

            //console.log("construct djs.core.View: " + typeof(lib.Array));
        }

        self.model = function(Obj){
            if(Obj === undefined) return this.Model;
            this.Model = (Obj instanceof core.Model) ? Obj : undefined;
            return this;
        }

        self.render = function(){
            return "";
        }
        

        // END OF CLASS

    }, "djs.core");

    

});


