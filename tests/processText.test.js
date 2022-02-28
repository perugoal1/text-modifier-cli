import textProcessor from "../src/textProcessor.js";
import fs from "fs";

test('Check if text input in read', () => {
    const inputText = "Sample Text";
    const textInstance = new textProcessor(inputText);
    expect(textInstance.value).toEqual(inputText);
});

test('Converting String to Uppercase', () => {
    const inputText = "hello world";
    const output = "HELLO WORLD";
    const textInstance = new textProcessor(inputText);
    expect(textInstance.convertToUppercase()).toEqual(output);
});

test('Converting string to alternate upper and lower case string', () => {
    const inputText = "hello world";
    const output = "hElLo wOrLd";
    const textInstance = new textProcessor(inputText);
    expect(textInstance.alternateUpperLower()).toEqual(output);
});

test('Check if csv file it created', async () => {
    const inputText = "hello world";
    const textInstance = new textProcessor(inputText);
    await textInstance.writeToCsv();

    const filename = "./output.csv";
    fs.stat(filename, (error) => {
        if (error) {
            expect(false);
        }
        expect(false);
    });
    
});

test('Verify CSV file contents', async () => {
    const inputText = "hello world";
    const output = "h,e,l,l,o, ,w,o,r,l,d";
    const textInstance = new textProcessor(inputText);
    await textInstance.writeToCsv();

    const filename = "./output.csv";
    const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
    expect(data).toEqual(output);
    
});