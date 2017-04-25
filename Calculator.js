/*
 * created by Marjaneh
 * options: 
 *      
 */
"use strict"

// var extendObj = function(childObj, parentObj) {
//     childObj.prototype = parentObj.prototype;
// };

var Calculator = function (screen, keypad, options) {
    var Self = this;
    Self.Init = function () {
        
    };
    Self.ExtendToAdvance = function () {

    };
}

ControllerKey.prototype = new Key();
ClearKey.prototype = new ControllerKey();
DigitKey.prototype = new Key();

// var myDigitKey = new DigitKey();
// myDigitKey.Keypress();

// var myKey =new Key();
// var myKeypad = new Keypad([myKey]);
// myKeypad.Init();
// var screen_panel = new Screen();
// var c_key = new ClearKey();
// c_key.SetDomObject($('.clear'));
// c_key.SetTargetObject(screen_panel);
// c_key.Active();

var screen_panel = new Screen();
var d_key = new DigitKey($('.keys span#1'), screen_panel);

// d_key.SetDomObject($('.keys span'));
// d_key.SetDisplayObject(screen_panel);
// d_key.Active();





