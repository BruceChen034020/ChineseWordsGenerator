function Sentence(){
    this.words = []; // (Word array)
    this.sentenceDefinition; // (SentenceDefinition)
    this.clear = function(){
        for(var i = 0; i < this.words.length; i++){
            console.log(this.words[i]);
            this.words[i].button.remove();
        }
        this.words = [];
        this.sentenceDefinition.button.remove();
    }
}