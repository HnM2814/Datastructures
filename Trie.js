class Node {
    chars = new Map();
    isEnd = false;
}

class Trie{
    root = new Node();

    addWord = (word, node = this.root) => {
        if(word.length === 0 || this.search(word) === true) {
            console.log("Don't add word if empty string or already present!");
            return;
        }

        const input = word[0];
        const newWord = word.slice(1);

        let nNode;
        if(node.chars.has(input)){
            nNode = node.chars.get(input);
        } else {
            nNode = new Node();
            node.chars.set(input,nNode);
        }

        if(newWord){
            this.addWord(newWord, nNode);
        } else {
            nNode.isEnd = true;
        }
        
    };

    search = (word) => {
        let node = this.root;

        for(let x  = 0; x < word.length; x++){
            if(node.chars.has(word[x])){
                node = node.chars.get(word[x]);
            }
        }

        if(node && node.isEnd){
            //console.log(word + " is present in trie");
            return true;
        } else {
            //console.log(word + " is not present in trie");
            return false;
        }
        
    };

    delete = (word) => {

    };

    print = (chars) => {
        let str = "";
        if(chars.length){
            for(let x = 0; x < chars.length; x++){
                str += chars[x];
            }
        }

        console.log("Word: ", str);
    };

    printAllWords = (node , chars = [], index = 0) => {
        if(node.isEnd){           
            this.print(chars);
        } else {
            node.chars.forEach((nNode, char) => {
                chars[index] = char;
                this.printAllWords(nNode, chars, index+1)
            });
        }
    };
}

let trie = new Trie();

trie.addWord("Hiren");
trie.addWord("Hiten");
trie.addWord("Malay");
trie.addWord("Karan");

trie.printAllWords(trie.root, [], 0);

// trie.search("Hiren");
// trie.search("Hiten");

//console.log(trie.root);
