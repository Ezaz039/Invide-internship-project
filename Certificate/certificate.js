var today = new Date(),
month = '' + (today.getMonth() + 1),
day = '' + today.getDate(),
year = today.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;
document.getElementById('date').innerHTML = month+"/"+day+"/"+year;

var myApp = new function () {
    this.printTable = function () {
        var win = window.open('', '', 'height=700,width=700');
        var is_crome = Boolean(win.chrome);
        var tab = document.getElementById('tab');
        win.document.write(tab.outerHTML);
        win.document.close();
        if(is_crome){
            win.onload = function(){
                win.focus();
                win.print();
                win.close();
            };
        }
        else{
            win.document.close();
            win.focus();
            win.print();
            win.close();
        }
    }
}