/*
 * created by Marjaneh
 * options: 
 *      
 */
"use strict"

var Calculator = function (screen, keypad, options) {
    var Self = this;
    Self.Init = function () {
        // Self.screen         = options.Screen;
        // Self.digits         = options.Digits;
        // Self.operators      = options.Operations;
        // Self.controllers    = operators.Controllers;
        // Self.params    = options;
    };

    Self.ExtendToAdvance = function () {
        
    };
}

var Screen = function(){
    var Self = this;
    Self.Init =  function(){

    };
    Self.LightOn = function(){
        $('#screen').css('color','#000').css('background-color', '#fff').html(0);
    };
    Self.Reset = function(){
        $('#screen').html(0);
    };
    Self.LightOff = function(){

    };
    Self.DisplayDigit = function(digit){
        
    };
    Self.GetCurrentDigit = function(){

    };
    Self.SetCurrentDigit = function(){
    }
}

var Key = function(){
    var Self = this;
    Self.Keypress =  function(){
        $('#screen').html(0);
        alert("key is pressed");
    }
    Self.GetType = function(){
        return Self.Type;
    }
    Self.SetType = function(type){
        Self.Type = type;
    }
}

var DigitKey = function(){
    var Self =this;
    Self.GetValue = function(){
        return Self.Value;
    }
    Self.SetValue = function(value){
        Self.Value = value;
    }
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
    Self.GetController = function(){
        return Self.Controller;
    }
    Self.SetController = function(controller){
        Self.Controller = controller;
    }
}

DigitKey.prototype = Object.create(Key.prototype);
OperationKey.prototype = Object.create(key.prototype);
ControllerKey.prototype = Object.create(key.prototype);


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

var myKey =new Key();
var myKeypad = new Keypad([myKey]);
myKeypad.Init();