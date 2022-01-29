const arr = ["skills","My-Hobbies","home"]


function borderBottom(myClass){
        for(let i = 0; i<3; i=i+1)
        {
            if(arr[i]==myClass){
                document.querySelector(`.${myClass}`).classList.add('border-bottom');
            }
            else{
                document.querySelector(`.${arr[i]}`).classList.remove('border-bottom');
            }
            
        }
    

}

function secondFunction(){

    for(let i = 0; i<3; i=i+1)
        {
            if(arr[i]=="home"){
                document.querySelector('.home').classList.add('border-bottom');
            }
            else{
                document.querySelector(`.${arr[i]}`).classList.remove('border-bottom');
            }
            
        }
    
    
}