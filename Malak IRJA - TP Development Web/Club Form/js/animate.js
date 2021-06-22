
function greetings(){
    var button = document.getElementById("submit_button");
    var name = button.form.f_name.value;
    var prenom = button.form.l_name.value;
    var event = document.querySelector(   
        'input[name="event"]:checked');
    alert("The Geoinformation Club welcomes you, "+prenom+" "+name+ " to the " +event.value+ " event!");


}
