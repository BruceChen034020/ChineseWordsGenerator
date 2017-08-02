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
        definitionTextBox.value = "";
        if(checkBox1.checked){
            definitionTextBox.innerHTML += "注音: ";
            definitionTextBox.value += "注音: ";
            console.log(self.parent.words);
            for(var i = 0; i<self.parent.words.length; i++){
                console.log(self.parent.words[i].wordID);
                definitionTextBox.innerHTML += Zhuyin[self.parent.words[i].wordID] + "   ";
                definitionTextBox.value += Zhuyin[self.parent.words[i].wordID] + "   ";
            }
            definitionTextBox.innerHTML += "\r\n";
            definitionTextBox.value += "\r\n";
        }
        if(checkBox2.checked){
            self.showRandomDefinition();
        }
    }
    this.showRandomDefinition = function(){
        definitionTextBox.innerHTML += "釋義: ";
        definitionTextBox.value += "釋義: ";
        var s = this.produceRandomDefinition();
        t = this.processRandomDefinition(s);
        definitionTextBox.innerHTML += t;
        definitionTextBox.value += t;
    }
    this.produceRandomDefinition = function(){
        var s = "";
        for(var i = 0; i<self.parent.words.length; i++){
            var v = Definition[self.parent.words[i].wordID];
            var r = Math.random();
            r *= v.length;
            r = Math.floor(r);
            if(typeof(v[r]) !== 'undefined')
                s += v[r];
        }
        return s;
    }
    this.processRandomDefinition = function(s){
        var t = "";
        if(checkBox4.checked) {
            var r2 = Math.random();
            r2 *= prefix.length;
            r2 = Math.floor(r2);
            t += prefix[r2];
        }
        var dontLike = false;
        for(var i=0; i<s.length; i++){
            var c = s[i];
            if(c === '。'){
                var r = Math.random();
                if(this.parent.words.length<7) {
                    if (r < 1 / 3) {
                        c = '之';
                    } else {
                        c = '';
                    }
                }else{
                    if(r < 1/7){
                        var r4 = Math.random();
                        r4 *= connection.length;
                        r4 = Math.floor(r4);
                        t += connection[r4];
                    }
                    c = '';
                }
            }
            if(c ===  '('){
                if( ')' === s[i+1])
                {
                    c = '';
                    i++;
                }
            }
            if(s[i]==='參'){
                if(s[i+1]==='見' && s[i+2] === '「'){
                    i = i+2;
                    c = '';
                    dontLike = true;
                }
            }
            if(dontLike && s[i] === '」'){
                i = i+1;
                c = '';
                dontLike = false;
            }
            t += c;
            pre = c;
        }
        if(checkBox3.checked) {
            var r3 = Math.random();
            r3 *= suffix.length;
            r3 = Math.floor(r3);
            t += suffix[r3];
        }
        return t;
    }
}