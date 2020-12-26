const txt = document.querySelectorAll('svg g path');
console.log(txt);
    for(let i =0;i<txt.length;i++){
        console.log('Letter '+i+' is '+txt[i].getTotalLength());
    }