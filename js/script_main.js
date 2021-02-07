count.onclick = function () { 
    let val = document.getElementById('input').value;
    let input = val;
    let binary = document.getElementById('binary');
    let output = document.getElementById('answer');
    let degree = output;
    const reverse = (str) => {
        return str.split('').reverse().join('')  /*do from string to array and reverse it*/
    };
    let answer = 0;
    
    val = '' + val;  /*change type to string*/
    val = reverse(val); /*reverse it*/


    for (let i = 0; i <= val.length-1; i++) {

        degree[i] = Math.pow(2, i);

        if (val[i] != 0 && val[i] != 1) {
            binary.innerHTML = "You did a mistake, please, try to write another number";
            output.innerHTML = "";
            return 0;
        }

        if (val[i] != 0) {
            answer = answer + degree[i];
        }
    }

    if (input > 0) {
        binary.innerHTML = "The number in binary: " + input;
        output.innerHTML = "The number in decimal: " + answer;
    }
    else if (input == 0){
        binary.innerHTML = "The number in binary: 0";
        output.innerHTML = "The number in decimal: 0";
    }
}