var ClearKey = function(){
    var Self = this;

    Self.SetTargetObject= function(targetObject){
        Self.TargetObject = targetObject
    };
    Self.GetTargetObject = function(){
        return Self.TargetObject;
    };
    Self.Active = function(){
        // Self.Press(function(){
        // if(Self.GetTargetObject().GetFlag())
        //     Self.GetTargetObject().LightOff();
        // else
        //     Self.GetTargetObject().LightOn();
        // });  
    }
          
}