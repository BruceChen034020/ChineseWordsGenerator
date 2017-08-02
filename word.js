function Word(){
    this.word; // (char)
    this.wordID; // (int)
    this.button; // (Button)
    this.ID; // (int)
    let self = this; // (Word)
    this.initialize = function(id){
        this.ID = id;
        var r = Math.random();
        r *= 4800;
        r = Math.floor(r);
        this.wordID = r;
        this.word = wordBank[r];
        this.button = document.createElement("button");
        document.body.appendChild(this.button);
        this.button.innerHTML = this.word;
        this.button.style.fontFamily = "標楷體";
        this.button.style.fontSize = "36px";
        this.button.addEventListener("click", this.word_Click);
    }
    this.word_Click = function(){ // onclick event
        console.log("word_Click");
        console.log(checkBox1.checked);
        definitionTextBox.innerHTML = "";
        definitionTextBox.value = "";
        if(checkBox1.checked){
            definitionTextBox.innerHTML = "注音: ";
            definitionTextBox.innerHTML += Zhuyin[self.wordID] + "\r\n";
            definitionTextBox.value = "注音: ";
            definitionTextBox.value += Zhuyin[self.wordID] + "\r\n";
        }
        if(checkBox2.checked){
            definitionTextBox.innerHTML += "釋義: \r\n" + FullDefinition[self.wordID] + "\r\n";
            definitionTextBox.value += "釋義: \r\n" + FullDefinition[self.wordID] + "\r\n";
        }
    }
    this.update = function(){

    }
    this.show = function(){

    }
}