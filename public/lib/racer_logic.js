var socket = io.connect('http://localhost:3000');
socket.on('go_ahead', function (data){
    if (data["command"] === 'move_right') {
      console.log(data);
      var player_1_active_index = $('#player-1 .active').index() + 1;
      $('#player-1 td:nth-child('+ player_1_active_index +')').removeClass('active');
      $('#player-1 td:nth-child('+(player_1_active_index + 1)+')').addClass('active');
    }

    if (data["command"] === 'move_left') {
      console.log(data);
      var player_2_active_index = $('#player-2 .active').index() + 1;
      $('#player-2 td:nth-child('+ player_2_active_index +')').removeClass('active');
      $('#player-2 td:nth-child('+(player_2_active_index + 1)+')').addClass('active');
    }
  });

$(function(){
  // On keypress, emit message to server
  $(document).on('keyup', function(event){
    if (event.keyCode === 39) {
      // emit
      socket.emit('key_move', {command: "move_right"});
    }
    if (event.keyCode === 40) {
      socket.emit('key_move', {command: "move_left"});
    }
  });
});
