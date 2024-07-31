let words = ["memek", "kontol", "babi", "anjing"];
let text = document.getElementById("text");

//Minimum wait time for next character to be added
let minAddTime = 50;

//Minimum wait time for previous character to be deleted
let minDeleteTime = 25;

//Maximum wait time for next character to be added
let maxAddTime = 200;

//Recursively add new words:
let recursive_add = (i, new_word)=>{
    //i (int) = index of word in words[]
    //new_word (string) = the new word being constructed
    
    let word = words[i];
    let timeout = Math.floor(Math.random()*maxAddTime) + minAddTime;

    if (word == new_word){
        timeout = 400;
    } else {
        new_word = new_word + word.charAt(new_word.length + 1);
    }

    setTimeout(()=>{
        (word == new_word) ? text.innerHTML = new_word : recursive_delete (i, new_word);
    }, timeout)

}

let recursive_delete = (i, new_word)=>{

    

}

recursive_add(Math.floor(Math.random() * words.length), "");