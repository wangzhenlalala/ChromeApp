chrome.app.runtime.onLaunched.addListener(function(){
    var screenWitdh = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 500;
    var height = 300;

    chrome.app.window.create('index.html', {
        id: 'helloWorldID',
        outerBounds: {
            width: width,
            height: height,
            left: Math.round( (screenWitdh - width) / 2 ),
            top: Math.round( (screenHeight - height) / 2 )
        }
    });
})