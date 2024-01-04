const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let index = 0

function load(index){
  document.getElementById('show').innerText = names[index]
}
function showName(){
  load(index);
}
function changeNext(){
  index = (index + 1) % names.length
  load(index)

}
function changePrevious(){
  index = (index - 1 + names.length) % names.length
  load(index)
}
