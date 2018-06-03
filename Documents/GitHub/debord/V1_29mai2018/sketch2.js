function setup() {
$.get('societe_spectacle.txt',function(val){
  $('.maincontent5').html(val);
});
}