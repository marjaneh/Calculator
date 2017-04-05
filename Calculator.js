/*
 * created by Marjaneh
 * options: 
 *      
 */
"use strict"

var extendObj = function(childObj, parentObj) {
    childObj.prototype = parentObj.prototype;
};

var Calculator = function (screen, keypad, options) {
    var Self = this;
    Self.Init = function () {
        
    };
    Self.ExtendToAdvance = function () {

    };
}

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

var Key = function(_domObject, _screenObject){
    var Self = this;
    var ScreenObject = _screenObject; //keeps screeen object
    var DomObject = _domObject;
    
    // var _attachEventHandlers = function(){
    //     DomObject.on('click', function(e){
    //         var keyValue = $(this).html();
    //         ScreenObject.SetCurrentStatement(keyValue);
    //         ScreenObject.DisplayNumber();
    //     });
    // };
    // _attachEventHandlers();
    Self.GetDomObject = function(){
        return DomObject;
    };
    Self.SetDomObject = function(domObject){
        DomObject = domObject;
    };
    Self.SetScreenObject = function(screenObject){
        ScreenObject = screenObject;
    };
}

var DigitKey = function(_domObject, _screenObject){
    var Self =this;
    // Self.
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

var OperatorKey = function(){
    var Self = this;
    Self.GetOperator = function(){
        return Self.Operator;
    }
    Self.SetOperator = function(operator){
        Self.Operator = operator;
    }
}

var ControllerKey = function(){
    var Self = this;
}

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


ControllerKey.prototype = new Key();
ClearKey.prototype = new ControllerKey();
DigitKey.prototype = new Key();

// var myDigitKey = new DigitKey();
// myDigitKey.Keypress();

var Keypad = function(keys){
    var Self =this;
    Self.Keys = keys;
    Self.Init = function(){
        // Self.Keys.Keypress();
        $.each(Self.Keys, function(index,oneKey){
            oneKey.Keypress();
        });
    }
}

// var myKey =new Key();
// var myKeypad = new Keypad([myKey]);
// myKeypad.Init();
// var screen_panel = new Screen();
// var c_key = new ClearKey();
// c_key.SetDomObject($('.clear'));
// c_key.SetTargetObject(screen_panel);
// c_key.Active();


var d_key = new DigitKey();

d_key.SetDomObject($('.keys span'));
d_key.SetDisplayObject(screen_panel);
d_key.Active();





