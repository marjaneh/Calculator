
var Key = function(_domObject, _screenObject){
    var Self = this;
    var ScreenObject = _screenObject; //keeps screeen object
    var DomObject = _domObject;
    

    Self.GetDomObject = function(){
        return DomObject;
    };
    Self.SetDomObject = function(domObject){
        // we should control if there is array of keys
        DomObject = domObject;
    };
    Self.SetScreenObject = function(screenObject){
        ScreenObject = screenObject;
    };
    Self.Init = function(){
        DomObject.on('click', function(e){
            var keyValue = $(this).html();
            ScreenObject.SetCurrentStatement(keyValue);
            ScreenObject.DisplayNumber();
        });
    };
    Self.Init();
}