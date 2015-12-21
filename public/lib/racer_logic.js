var socket = io.connect('http://localhost/');
socket.on('news', function(data){
  console.log(data);
  socket.emit('key_move', {my: "data"});
});
$(function(){
  // On keypress, emit message to server
  $(document).on('keyup', function(event){
    if (event.keyCode == 39) {
      // emit
    }
  });

  // On message from server, do something
});
