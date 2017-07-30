function SentenceDefinition(){
    this.button; // (Button)
    let self = this; // (SentenceDefinition)
    this.parent; // (Sentence)
    this.initialize = function(){
        this.button = document.createElement("button");
        document.body.appendChild(this.button);
        this.button.innerHTML = "整句注釋";
        this.button.addEventListener("click", this.sentence_click);
    }
    this.sentence_click = function(){
        definitionTextBox.innerHTML = "";
        if(checkBox1.checked){
            definitionTextBox.innerHTML += "注音: ";
            console.log(self.parent.words);
            for(var i = 0; i<self.parent.words.length; i++){
                console.log(self.parent.words[i].wordID);
                definitionTextBox.innerHTML += Zhuyin[self.parent.words[i].wordID] + "   ";
            }
            definitionTextBox.innerHTML += "\r\n";
        }
        if(checkBox2.checked){
            self.showRandomDefinition();
        }
    }
    this.showRandomDefinition = function(){
        definitionTextBox.innerHTML += "釋義: ";
        for(var i = 0; i<self.parent.words.length; i++){
            var v = Definition[self.parent.words[i].wordID];
            var r = Math.random();
            r *= v.length;
            r = Math.floor(r);
            var s = v[r];
            definitionTextBox.innerHTML += s;
        }
    }
}