window.onload = tab;
 	function tab(){
        var timer=null;
        var num = 0;
        var oli = $('title').getElementsByTagName('li');
 		    var items = $('item').getElementsByTagName('ul');
        for (var i = 0; i < oli.length; i++) {
        	oli[i].index = i;
        	oli[i].onmouseover = function(){
        		if (timer) {clearTimeout(timer);}
        	     autoplay(this.index);
        	}
        	oli[i].onmouseout =function(){
        		timer = setInterval(auto,1000);
     
        	}
        	$("item").onmouseover = function(){
        	 	clearInterval(timer);
        	 }

		      $("item").onmouseout = function(){
			    timer = setInterval(auto,2000);
            }
        }
        if(timer){clearTimeout(timer);timer =null;}
        timer = setInterval(auto,1000);
        function auto(){
       	      num ++;
              if (num >= oli.length) { num = 0;}
              autoplay(num);
       }
 		   function autoplay(target){
      	console.log(target);
      	for (var i = 0; i < oli.length; i++) {
 		 			oli[i].className = '';
 		 			items[i].style.display ='none'
 		 		}
 	 		    oli[target].className = 'here';
 		 		items[target].style.display = 'block';
 		 		num = target;
 		       }
 		}

function $(str){
 			return typeof str ==='string'?document.getElementById(str):str;
 		}
