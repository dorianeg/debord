function setup() {
$.get('debordrapport.txt',function(val){
  $('.maincontent5').html(val);
});
}