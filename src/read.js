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
        let waitForUserInput = () => {
            this.rl.question("Please provide the input text.... \n", (answer) => {
              if (answer != ""){
                 this.rl.close();
                 this.cliResolve(answer);
              } else {
                  waitForUserInput();
              }
            });
        }
        waitForUserInput();
        return this.cliPromise;
    }
}

export default cliReader;