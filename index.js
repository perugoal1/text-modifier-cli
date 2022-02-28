import cliReader from './src/read.js'
import textProcessor from './src/textProcessor.js'

class main {
    constructor(){
        const readInstance = new cliReader();

        this.value = '';
        this.readInstance = readInstance;
    }

    async readFromCli(){
        try {
            const data = await this.readInstance.read();
            this.value = data;
        } catch(e){
            console.error('Error from command line: ', e);
        }
    }

    processText(){
        try {
            const textInstance = new textProcessor(this.value);
            const upperText = textInstance.convertToUppercase();
            console.log("\n\nOUTPUT: \n");
            console.log(upperText);
            const alternateText = textInstance.alternateUpperLower();
            console.log(alternateText);
            textInstance.writeToCsv();
        } catch (e) {
            console.error('Error while processing text: ', e);
        }
    }
}

const mainInstance = new main();
await mainInstance.readFromCli();
mainInstance.processText();