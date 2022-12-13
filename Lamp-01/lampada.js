const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function ifLampBroken () {
  return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
  if ( !ifLampBroken () ) {
    lamp.src = './src/ligada.jpg';
  }
}

function lampOff () {
  if ( !ifLampBroken () ) {
    lamp.src = './src/desligada.jpg';
  }
}

function lampBroken() {
  lamp.src = './src/quebrada.jpg';
}

turnOn.addEventListener( 'click', lampOn );
turnOn.addEventListener( 'dblclick', lampBroken )
turnOff.addEventListener( 'click', lampOff );
lamp.addEventListener( 'dblclick', lampBroken );
