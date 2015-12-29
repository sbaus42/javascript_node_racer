var socket = io.connect('http://localhost:3000');

$(function(){
  // On keypress, emit message to server
  $(document).on('keyup', function(event){
    if (event.keyCode === 39) {
      // emit
      socket.emit('key_move', {command: "move"});
    }
  });

  socket.on('go_ahead', function (data){
    if(data["command"] === 'ok to mooove')
      console.log(data);
      var active_index = $('td.active').index() + 1;

      $('#player-1 td:nth-child('+active_index+')').removeClass('active');
      $('#player-1 td:nth-child('+(active_index + 1)+')').addClass('active');

      // $('#player-1 td:nth-child')
  });

  // On message from server, do something
});
