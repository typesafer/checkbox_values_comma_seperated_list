$(function(){
var output = jQuery.map($(':checkbox[name=example\[\]]:checked'), function(n, i){
      return n.value;
}).join(',');

alert(output);

});
