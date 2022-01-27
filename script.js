
  function myFunction(){  
      link(); 
    function link(){
        let a = document.querySelectorAll("a");

            a.forEach((x)=>{
                x.onmouseover = ()=>{
                    x.style.color = "rgb(255,255,255)"
                };

                x.onmouseout =()=>{
                    x.style.color = "hsl(236, 100%, 87%)"
                }
            });
    };

        daily();
    function daily(){
        let day = document.querySelector("#daily");
        day.onclick =()=>{
            let h5 = document.querySelectorAll("h5");
            h5[0].innerHTML = "Last 24hrs - 2hrs";
            h5[1].innerHTML = "Last 24hrs - 9hrs";
            h5[2].innerHTML = "Last 24hrs - 4hrs";
            h5[3].innerHTML = "Last 24hrs - 2hrs";
            h5[4].innerHTML = "Last 24hrs - 1hr";
            h5[5].innerHTML = "Last 24hrs - 0hr";

            let hours = document.querySelectorAll(".hours");
           hours[0].innerHTML = 1;
           hours[1].innerHTML = 5;
           hours[2].innerHTML = 2;
           hours[3].innerHTML = 3;
           hours[4].innerHTML = 2;
           hours[5].innerHTML = 1;

          
        }
    };

    weekly();
    function weekly(){
        let week = document.querySelector("#weekly");
        week.onclick =()=>{
            let h5 = document.querySelectorAll("h5");
                 h5[0].innerHTML = "Last Week - 36hrs";
                 h5[1].innerHTML = "Last Week - 8hrs";
                 h5[2].innerHTML = "Last Week - 7hrs";
                 h5[3].innerHTML = "Last Week - 5hrs";
                 h5[4].innerHTML = "Last Week - 10hrs";
                 h5[5].innerHTML = "Last Week - 2hrs";

            let hours = document.querySelectorAll(".hours");
           hours[0].innerHTML = 32;
           hours[1].innerHTML = 10;
           hours[2].innerHTML = 4;
           hours[3].innerHTML = 4;
           hours[4].innerHTML = 5;
           hours[5].innerHTML = 2;
        }
    }

    
    monthly();
    function monthly(){
        let month = document.querySelector("#monthly");
        month.onclick =()=>{
            
            let h5 = document.querySelectorAll("h5");
            h5[0].innerHTML = "Last Month - 119hrs";
            h5[1].innerHTML = "Last Month - 88hrs";
            h5[2].innerHTML = "Last Month - 103hrs";
            h5[3].innerHTML = "Last Month - 77hrs";
            h5[4].innerHTML = "Last Month - 80hrs";
            h5[5].innerHTML = "Last Month - 72hrs";

            let hours = document.querySelectorAll(".hours");
           hours[0].innerHTML = 78;
           hours[1].innerHTML = 120;
           hours[2].innerHTML = 54;
           hours[3].innerHTML = 90;
           hours[4].innerHTML = 109;
           hours[5].innerHTML = 47;
        }
    }
}
                