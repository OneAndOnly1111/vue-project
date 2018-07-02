/*
require ('../static/js/guacamole/modules/Client.js')
require ('../static/js/guacamole/modules/Tunnel.js')
require('../static/js/guacamole/modules/Display.js')
require('../static/js/guacamole/modules/Layer.js')
require('../static/js/guacamole/modules/IntegerPool.js')
require('../static/js/guacamole/modules/Status.js')
require('../static/js/guacamole/modules/Mouse.js')
require('../static/js/guacamole/modules/Keyboard.js');
*/

(function () {
  /*
  // Get display div from document
  var display = document.getElementById('display')

  // Instantiate client, using an HTTP tunnel for communications.
  var guac = new Guacamole.Client(
    // new Guacamole.HTTPTunnel("tunnel")
    new Guacamole.HTTPTunnel('http://client/tunnel')
  )

  // Add client to display div
  display.appendChild(guac.getDisplay().getElement())

  // Error handler
  guac.onerror = function(error) {
    alert(error)
  }

  // Connect
  guac.connect()

  // Disconnect on close
  window.onunload = function () {
    guac.disconnect()
  }

  // Mouse
  var mouse = new Guacamole.Mouse(guac.getDisplay().getElement());
  mouse.onmousedown =
  mouse.onmouseup =
  mouse.onmousemove = function (mouseState) {
    guac.sendMouseState(mouseState)
  }

  // Keyboard
  var keyboard = new Guacamole.Keyboard(document)
  keyboard.onkeydown = function (keysym) {
    guac.sendKeyEvent(1, keysym)
  }
  keyboard.onkeyup = function (keysym) {
    guac.sendKeyEvent(0, keysym)
  }
  */
})()
