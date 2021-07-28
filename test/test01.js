function clasificaElementos(index) {
    const result = ["0","0","0"];
    
        const roundNumberToString = (number, positions) => {
            return number.toFixed(positions).toString()
        } 

        const positiveNumbers = [];
        const negativeNumbers = [];
        const numbersEQZero = [];

        index.forEach(number => {
            if(!isNaN(Number(number))){
                if(number < 0) {
                    negativeNumbers.push(number);
                }

                if(number > 0) {
                    positiveNumbers.push(number);
                }

                if((number === 0)){
                    numbersEQZero.push(number)
                }
            }
        })

        result[0] = positiveNumbers.length ? roundNumberToString(positiveNumbers.length / index.length,4) : roundNumberToString(0,4);
        result[1] = negativeNumbers.length ? roundNumberToString(negativeNumbers.length / index.length,4) : roundNumberToString(0,4);
        result[2] = numbersEQZero.length ? roundNumberToString(numbersEQZero.length / index.length,4) : roundNumberToString(0,4);
        return result 
}
module.exports = clasificaElementos;
