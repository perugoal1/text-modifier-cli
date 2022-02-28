import cliReader from './src/read.js'
import textProcessor from './src/textProcessor.js'

class main {
    constructor(){
        const readInstance = new cliReader();

        this.value = '';
        this.readInstance = readInstance;
    }

    async readFromCli(){
        const data = await this.readInstance.read();
        this.value = data;
    }

    processText(){
        const textInstance = new textProcessor(this.value);
        const upperText = textInstance.convertToUppercase();
        console.log("\n\nOUTPUT: \n");
        console.log(upperText);
        const alternateText = textInstance.alternateUpperLower();
        console.log(alternateText);
        textInstance.writeToCsv();
    }
}

const mainInstance = new main();
await mainInstance.readFromCli();
mainInstance.processText();