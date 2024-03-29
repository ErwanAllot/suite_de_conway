document.getElementById("je_veux_la_reponse").onclick = principal

document.getElementById("numberChosen").addEventListener('keydown', function (e) {
    if (e.key == 'Enter') principal()
    else if (e.key == '+' || e.key == '-') principal()
});