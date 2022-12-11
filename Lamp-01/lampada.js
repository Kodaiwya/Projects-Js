const turnOn = document.getElementById ( 'TurnOn' );
const turnOff = document.getElementById ( 'TurnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
  lamp.assets = './assets/ligada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
