import cliReader from './src/read.js'
import textProcessor from './src/textProcessor.js'

async function main(params) {
    const readInstance = new cliReader();
    const data = await readInstance.read();
    const textInstance = new textProcessor(data);

    const upperText = textInstance.convertToUppercase();
    console.log("\n\nOUTPUT: \n");
    console.log(upperText);
    const alternateText = textInstance.alternateUpperLower();
    console.log(alternateText);
    textInstance.writeToCsv();
}

await main();