
var DigitKey = function(_domObject, _screenObject){
    var Self =this;
    
    Self.__super__.constructor.apply(Self, _domObject, _screenObject);
    Self.GetValue = function(){
        return Self.Value;
    };
    Self.SetValue = function(value){
        Self.Value = value;
    };
    Self.SetTargetObject= function(targetObject){
        Self.TargetObject = targetObject
    };
    Self.GetTargetObject = function(){
        return Self.TargetObject;
    };
    // Self.Active = function(){
    //     Self.Press(function(){
    //         Self.GetTargetObject().SetCurrentStatement(Self.GetDomObject().val());
    //         Self.GetTargetObject().DisplayNumber();
    //     });  
    // }
}