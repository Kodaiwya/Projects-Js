const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function lampOn () {
  lamp.src = './src/ligada.jpg';
}

function lampOff () {
  lamp.src = './src/desligada.jpg';
}

function lampBroken() {
  lamp.src = './src/quebrada.jpg';
}

turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff );
lampBroken.addEventListener( 'dblclick', lampBroken );
