$(document).ready(function () {
    var init = false;
    var now = moment().format('LLLL');
    let now24 = moment().format('H'); 
    let now12 = moment().format('h'); 
    if (init) {
        now24 = 13;
        now12 = 1;
    }
    const currentDate = $('#currentDay');
    currentDate.text(now);
    var cal = new Date(); 
    var currentHour = cal.getHours(); 
    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
     {
        $('.saveBtn').click(function () {
            var hr6 = document.getElementById('6').value;
			localStorage.setItem('text6', hr6);

			var hr7 = document.getElementById('7').value;
			localStorage.setItem('text7', hr7);

			var hr8 = document.getElementById('8').value;
			localStorage.setItem('text8', hr8);

			var hr9 = document.getElementById('9').value;
			localStorage.setItem('text9', hr9);

			var hr10 = document.getElementById('10').value;
			localStorage.setItem('text10', hr10);

			var hr11 = document.getElementById('11').value;
			localStorage.setItem('text11', hr11);

			var hr12 = document.getElementById('12').value;
			localStorage.setItem('text12', hr12);

			var hr1 = document.getElementById('1').value;
			localStorage.setItem('text1', hr1);

			var hr2 = document.getElementById('2').value;
			localStorage.setItem('text2', hr2);

			var hr3= document.getElementById('3').value;
			localStorage.setItem('text3', hr3);
            
        });
     }
     var saved6 = localStorage.getItem('text6');
     document.getElementById('6').value = saved6;

     var saved7 = localStorage.getItem('text7');
     document.getElementById('7').value = saved7;

     var saved8 = localStorage.getItem('text8');
     document.getElementById('8').value = saved8;

     var saved9 = localStorage.getItem('text9');
     document.getElementById('9').value = saved9;

     var saved10 = localStorage.getItem('text10');
     document.getElementById('10').value = saved10;

     var saved11 = localStorage.getItem('text11');
     document.getElementById('11').value = saved11;

     var saved12 = localStorage.getItem('text12');
     document.getElementById('12').value = saved12;

     var saved1 = localStorage.getItem('text1');
     document.getElementById('1').value = saved1;

     var saved2 = localStorage.getItem('text2');
     document.getElementById('2').value = saved2;

     var saved3 = localStorage.getItem('text3');
     document.getElementById('3').value = saved3;
});