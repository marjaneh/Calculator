var Cell = function(){
    var Self = this;
    Self.SetValue = function(value){
        Self.Value = value;
    };
    Self.GetValue =  function(){
        return Self.Value;
    };
    Self.DisplayValue = function(){
        $('#digit').text(Self.GetValue())
    };
    Self.LightOn = function(){

    };
    Self.LightOff = function(){

    };
    Self.RemoveValue = function(){

    };
    Self.GetCurrentDigit = function(){
        return Self.CurrentDigit;
    };
    Self.SetCurrentDigit = function(currentDigit){
        Self.CurrentDigit = currentDigit;
    };
}