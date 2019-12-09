var data = [];
var nam = 1;
add_form.addEventListener("click", function() {
    nam += 1;
    let y = document.getElementsByTagName("input");
    for (var i = 0; i < y.length; i++) {
        data[i] = y[i].value;
    }

    var node = '<div class="row my_row"> <div class="card-panel teal darken-3"> <h4>✯◡✯</h4></div> <div class="inp"> <input id="icon_prefix" type="text" class="validate" value="" placeholder="Name"> <input id="email" type="email" class="validate" placeholder="Email"> <input id="icon_telephone" type="tel" class="validate" placeholder="Telephone"> <input id="password" type="password" class="validate" placeholder="Password"> </div> </div>';
    document.getElementsByClassName("wrap")[0].innerHTML = document.getElementsByClassName("wrap")[0].innerHTML + node;

    for (var i = 0; i < y.length; i++) {
        if (data[i] != undefined) {
            y[i].value = data[i];
        } else {
            y[i].value = '';
        }
    }

})

del_form.addEventListener("click", function() {

    var node = document.getElementsByClassName("row")[nam - 1];
    if ((node != undefined) && (nam > 1)){
        document.getElementsByClassName("wrap")[0].removeChild(node);
        nam -= 1;
        data = data.slice(4);
    }

})
