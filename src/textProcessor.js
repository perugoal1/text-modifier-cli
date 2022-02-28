import fs from 'fs';

class textProcessor {
    constructor(value){
        this.value = value;
        this.cliPromise = new Promise((resolve, reject) => {
            this.cliResolve = resolve;
            this.cliReject = reject;
        });
    }
    
    convertToUppercase() {
        return this.value.toUpperCase();
    }
    
    alternateUpperLower() {
        const splitText = this.value.split('');
        return splitText.map((word, index) => {
            return index%2 == 0 ?  word.toLowerCase() : word.toUpperCase();
        }).join('');
    }
    
    writeToCsv(){
        let textForCsv =  this.value.split('');
        textForCsv = textForCsv.join(',');
        fs.writeFile('output.csv', textForCsv, 'utf8', (err) => {
            if (err) {
              console.log('Error during CSV creation', err);
            } else{
              console.log('CSV created!');
            }
        });
    }
}

export default textProcessor;