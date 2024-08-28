function saveNoteToLocalStorage(obj){
    window.localStorage.setItem(obj.key, obj.task);
}

function getNoteFromLocalStorage(key){
    return window.localStorage.getItem(key);
}

let taskObj = {
    key: "1",
    task: "cut the vegetables"
};

saveNoteToLocalStorage(taskObj);

console.log(getNoteFromLocalStorage(taskObj.key));
