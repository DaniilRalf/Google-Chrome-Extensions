function getAllBlock(){
    let elems = document.querySelectorAll('div');
    let check = 0;
    elems.forEach(item => {
        check++;
    })
    return check;
}
getAllBlock();
