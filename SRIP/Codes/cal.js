window.onload = function() {
            var dps = []; //dataPoints. 
			var datapts = [];
			
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Accepting DataPoints from User Input"
                },
                data: [{
                    type: "line",
                    dataPoints: dps
                }]
            });
			
var chart1 = new CanvasJS.Chart("chart2", {
                title: {
                    text: "Stress and Strain"
                },
                data: [{
                    type: "line",
                    dataPoints: datapts
                }]
});
           

            function addDataPointsAndRender() {
            var t,o,l;
                torque = Number(document.getElementById("torque").value);
                angleoftwist = Number(document.getElementById("angleoftwist").value);
                dps.push({
                    x:torque ,
                    y: angleoftwist
                });
                chart.render();
                
                t=Number(document.getElementById("torque").value);
                o=Number(document.getElementById("angleoftwist").value);
                l=Number(document.getElementById("length of the member").value);
                d=Number(document.getElementById("diameter").value);
                J=((3.14*Math.pow(d,2))/32);
                G=(t*l)/J;
                S=(t*(d/2)/J);
                s=(t*(d/2)/(J*G));
                document.getElementById("answer").value= G;
                document.getElementById("answer1").value= S;
                document.getElementById("answer2").value= s;
            }
            
            function addDataPointsAndRender9() {
            var t,o,l;
                answer3= Number(document.getElementById("answer1").value);
                answer4 = Number(document.getElementById("answer2").value);
                datapts.push({
                    x:answer3 ,
                    y: answer4
                });
                chart1.render();
            }
            var renderButton = document.getElementById("renderButton");
            renderButton.addEventListener("click", addDataPointsAndRender);
            
            var renderButton9 = document.getElementById("renderButton9");
            renderButton9.addEventListener("click", addDataPointsAndRender9);
        }


        function validateform(){  
            var name= document.getElementById("diameter").value;   
            if (name==null || name==""){  
            alert("Name can't be blank");  
            return false;  
            }
            else if(name < 0){
            alert("Name can't be negative");  
            return false;  
            }
            else if(name.length<6){  
            alert("length must be at least 6 characters long.");  
            return false;  
            }  
    }  

