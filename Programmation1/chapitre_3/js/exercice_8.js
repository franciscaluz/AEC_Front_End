/**
 * Created by Francisca on 2019-12-12.
 */

var celcius;

for(var f=-40;f<=40;f+=5){
    celcius = (5/9) * (f-32);
    document.write(f + " Fahrenheits = " + celcius.toFixed(2) + " Celcius<br>");
}




