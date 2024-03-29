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

    while (dissection.length != 0){

        quantite = 1;
        // valeur = dissection[0];
        valeur = dissection.shift();
        changement = 'non';

        // if (valeur == dissection[0]){

        // }


    }

    cqjv = '3';
}

function outputAnswer(x){
    document.getElementById("dissection").textContent = dissection
    document.getElementById("cqjv").textContent = cqjv
    document.getElementById("executionTimeToBeCalculated").textContent = `Execution time: ${x} ms`
}