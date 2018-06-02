
function setup() {
$.get('etudiant.txt',function(val){
  $('.maincontent5').html(val);
});
}