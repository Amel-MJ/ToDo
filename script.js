
   
    
    document.getElementById('btnsub').addEventListener('click', function(e){
        let x = document.querySelector(".add").value;
        let li =`<ul><li><button type="button">Complete</button></li>
        <li><button type="button" id="item" >Delete</button></li>
        <li>${x}</li><ul>`;
        demoList.insertAdjacentHTML("afterend", li);
        document.querySelector(".add").value = "";
    })
    

     


