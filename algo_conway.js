function principal(){
    numberStudied = Math.abs(Math.floor(document.getElementById("numberChosen").value))
    start = Date.now();
    conway_sation(numberStudied);
    end = Date.now()
    outputAnswer(end - start)
}

function conway_sation (numberStudied){
    // dissection = []
    dissection = numberStudied.toString().split('')

    cqjv = '';
    quantite = 1;

    while (dissection.length != 0){

        valeur = dissection.shift();


        if (valeur == dissection[0]){
            quantite++;
        }
        if (valeur != dissection[0]){
            cqjv+=quantite
            cqjv+=valeur
            quantite = 1;
        }

    }


}

function outputAnswer(x){
    document.getElementById("dissection").textContent = dissection
    document.getElementById("cqjv").textContent = cqjv
    document.getElementById("executionTimeToBeCalculated").textContent = `Execution time: ${x} ms`
}