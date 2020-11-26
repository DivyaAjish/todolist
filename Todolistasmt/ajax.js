function product(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
         if(this.readyState==4 && this.status==200)
         {
            var response = JSON.parse(this.responseText);
          //console.log(result);
         var output="";
         
         for(var i=0;i<response.length;i++)          {
              var cont=response[i];
 
           console.log(cont);
           if(cont.completed==true){
             output = output+"<tr><td>"+'<input name="product()" checked type="checkbox" value="+cont.id+"/>'+cont.userId+"</td><td>"+cont.id+"</td><td>"+cont.title+"</td><td>"+cont.completed+"</td></tr>"
           }
           else{
             output = output+"<tr><td>"+'<input name="product()" type="checkbox" value="+cont.id+"/>'+cont.userId+"</td><td>"+cont.id+"</td><td>"+cont.title+"</td><td>"+cont.completed+"</td></tr>"
 
           }
             
       //  output = output+"<tr><td>"+'<input name="product()" type="checkbox" value="+cont.id+"/>'+cont.userId+"</td><td>"+cont.id+"</td><td>"+cont.title+"</td><td>"+cont.completed+"</td></tr>"
            
        }
                       }
         document.getElementById("display_area").innerHTML=output;
                
      }
      xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
  } 
  $(document).ready(function(){
   var checkcount=0;
   $('body').on('change','input[type="checkbox"]',function(){
     if($(this).is(':checked')){
       checkcount++;
       if(checkcount==5){
         alert("Congrats!! 5 task has been successfully completed");
       }
     }
   });
  })