/*
 * created by Marjaneh
 * options: 
 *      
 */
"use strict"

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
        $('#screen').html();
    };
    Self.GetCurrentStatement = function(){
        
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

var Key = function(){
    var Self = this;
    Self.DomObject;
    Self.GetType = function(){
        return Self.Type;
    };
    Self.SetType = function(type){
        Self.Type = type;
    };
    Self.GetDomObject = function(){
        return Self.DomObject;
    };
    Self.SetDomObject = function(domObject){
        Self.DomObject = domObject;
    };
    Self.Press = function(callback){
        $(Self.DomObject).on('click', callback);
    };
}

var DigitKey = function(){
    var Self =this;
    
    Self.GetValue = function(){
        return Self.Value;
    };
    Self.SetValue = function(value){
        Self.Value = value;
    };
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
        Self.Press(function(){
        if(Self.GetTargetObject().GetFlag())
            Self.GetTargetObject().LightOff();
        else
            Self.GetTargetObject().LightOn();
        });  
    }
          
}

ControllerKey.prototype = new Key();
ClearKey.prototype = new ControllerKey();

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
var screen_panel = new Screen();
var c_key = new ClearKey();
c_key.SetDomObject($('.clear'));
c_key.SetTargetObject(screen_panel);
c_key.Active();


