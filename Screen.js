var Screen = function(){
    var Self = this;
    Self.Flag = false;

    Self.Init =  function(){

    };
    Self.LightOn = function(){
        Self.Flag = true;
        $('#screen').css('color','#000').css('background-color', '#fff').html(0);
    };
    Self.LightOff = function(){
        Self.Flag = false;
        $('#screen').css('background-color', '#ddd').html("");
    };
    Self.Reset = function(){
        $('#screen').html(0);
    };
    Self.DisplayNumber = function(){
        $('#screen').html(Self.GetCurrentStatement());
    };
    Self.GetCurrentStatement = function(){
        return Self.CurrentStatement; 
    };
    Self.SetCurrentStatement= function(currentStatement){
        Self.CurrentStatement = currentStatement;
    };
    Self.GetMaxlimitDigit = function(){
        return Self.MaxLimit;
    };
    Self.SetMaxlimitDigit = function(maxLimit){
        Self.MaxLimit = maxLimit;
    };
    Self.SetCells = function(cells){
        Self.Cells = cells;
    };
    Self.GetCells =  function(){
        return Self.Cells;
    };
    Self.GetFlag = function(){
        return Self.Flag;
    }
}