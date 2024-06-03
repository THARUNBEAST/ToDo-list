  
         function addtohtml(){
            let htmlstorage='';
            let i=0;
            while(arr.length !=i){
                 html=` <div class="tharun2">${arr[i].name}</div> 
                 <div class="tharun2">${arr[i].date}</div>
                 <div class="tharun2"><button  class="del" onclick="arr.splice(${i},1); addtohtml();">  <img src="img/bin.png"></button></div>`;
                 htmlstorage+=html;
               
                i++;
            }
            document.querySelector('.div1').innerHTML=htmlstorage;
               
            console.log(htmlstorage);
         }
         let arr=[{name:'tharun',date:0}];
        
         function addfun(){
            let obj=document.querySelector('.input_element');
            let obj2=document.querySelector('.datebutton');
            
            let name=obj.value;
            let date=obj2.value;
            if(name !='' && date !=''){ arr.push({name,date});}
           
            console.log(arr);
            obj.value='';
            obj2.value='dd-mm-yyyy';
           
            addtohtml();
          }