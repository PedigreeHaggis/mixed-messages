//store useable data
const madLibs = {
    _lib: ['To *VERB* a Mockingbird', 'I can\'t start my day without my *NOUN*', 'I like my *NOUN* *ADJECTIVE*'],
    _noun: ['COFFEE', 'BED', 'CAR', 'GLASS', 'ROBOT', 'CHAIR'],
    _verb: ['JUMP', 'RUN', 'CRASH', 'THROW', 'STROKE', 'LIFT'],
    _adjective: ['STRONG', 'COLD', 'YELLOW', 'HOT', 'ILLUMINATING'],
    get lib(){
        return this._lib;
    },
    get noun(){
        return this._noun;
    },
    get verb(){
        return this._verb;
    },
    get adjective(){
        return this._adjective;
    }
}

//Generate and return random number
const rng = num => Math.floor(Math.random() * num); 

const generateMsg = mlObj => {
    //grab random mad lib and split in to array to replace elements
    let lib = mlObj.lib[rng(mlObj.lib.length)].split(' ');

    //iterate through each work in the lib and replace elements with corresponding word type eg. *NOUN* with a Noun.
    for(let word of lib){
        switch(word){
            case '*NOUN*':
                lib[lib.indexOf(word)] = mlObj.noun[rng(mlObj.noun.length)];
                break;
            case '*VERB*':
                lib[lib.indexOf(word)] = mlObj.verb[rng(mlObj.verb.length)];
                break;
            case '*ADJECTIVE*':
                lib[lib.indexOf(word)] = mlObj.adjective[rng(mlObj.adjective.length)];
                break;
            default:
                break;
        }
    }
    // return the revised array as a string.
    return lib.join(' ');
}

// automatically generate multiple madlibs based on a selected number.
const generateMultipleMsg = num => {
    for(let i = 0; i <= num; i++){
        console.log(generateMsg(madLibs));
    }
}

generateMultipleMsg(rng(10));