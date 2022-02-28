import readline from "readline";

class cliReader {
    constructor(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.rl = rl; 
        this.cliPromise = new Promise((resolve, reject) => {
            this.cliResolve = resolve;
            this.cliReject = reject;
        });
    }
    
    read(){
        this.rl.question("Please provide the input text.... \n", (name) => {
            this.rl.close();
            this.cliResolve(name);
        });
        return this.cliPromise;
    }

}

export default cliReader;