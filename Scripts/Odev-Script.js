function scriptOdev(number) {

    //open modal window 
    var modal = document.getElementById("modal" + number);
    if(modal != null){
        modal.style.display = "block";
    } 
     window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

var span = document.getElementsByClassName("close")[0] && document.getElementById(number);
    if(span != null){
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    $(document).keyup(function(e) {
        if (e.key === "Escape") { 
            modal.style.display = "none";
       }
   });

 }; 

 function soruon() {
    var a = document.getElementById("soru10-A").value;
    var b = document.getElementById("soru10-B").value;
    var c = document.getElementById("soru10-C").value;

    var d = b*b - 4*a*c;

    if(d < 0){
        var sonuc = "Denklemin reel kökü yoktur.<br> Denklemin kökleri sanaldır. <br> Kökler: " + (-b/(2*a)) + " + " + (Math.sqrt(-d)/(2*a)) + "i ve " + (-b/(2*a)) + " - " + (Math.sqrt(-d)/(2*a)) + "i <br> Denklem: " + a + "x<sup>2</sup>+ " + b + "x + " + c + " = 0";
    }else if(d == 0){
        var sonuc = "Denklemin reel kökü 1 tane vardır. Kök: " + (-b/(2*a)) + " <br> Denklem: " + a + "x<sup>2</sup>+ " + b + "x + " + c + " = 0";
    }else{
        var sonuc = "Denklemin reel kökü 2 tane vardır. Kökler: " + ((-b + Math.sqrt(d))/(2*a)) + " ve " + ((-b - Math.sqrt(d))/(2*a)) + " <br> Denklem: " + a + "x<sup>2</sup>+ " + b + "x + " + c + " = 0";
    }
    
    document.getElementById("sonuc10").innerHTML = sonuc;

};

function yirmibir() {

    var x = document.getElementById("soru21").value;

    if(x > 100) {
        var sonuc21 = "Girilen sayı 0-100 aralığında değildir. (Geçersiz)." + "<br> Sayı: " + x;
    }else if(x < 0){
        var sonuc21 = "Girilen sayı 0-100 aralığında değildir. (Geçersiz)." + "<br> Sayı: " + x;
    } else {
        var sonuc21 = "Girilen sayı 0-100 aralığındadır. (Geçerli)." + "<br> Sayı: " + x;
    }

    document.getElementById("sonuc21").innerHTML = sonuc21;
};

function otuziki() {

    var y = [
        document.getElementById("soru32").value, 
        document.getElementById("soru32-2").value, 
        document.getElementById("soru32-3").value,
        document.getElementById("soru32-4").value,
        document.getElementById("soru32-5").value,
        document.getElementById("soru32-6").value,
        document.getElementById("soru32-7").value,
        document.getElementById("soru32-8").value,
        document.getElementById("soru32-9").value,
        document.getElementById("soru32-10").value
    ]
    var x = y.map(Number);
    toplam = x[0] + x[1] + x[2] + x[3] + x[4] + x[5] + x[6] + x[7] + x[8] + x[9];
    sonuc32 = "Girilen sayıların toplamı: " + toplam;
    document.getElementById("sonuc32").innerHTML = sonuc32;

};

function kirkuc() {

    var y = [
        document.getElementById("soru43").value, 
        document.getElementById("soru43-2").value, 
        document.getElementById("soru43-3").value
    ]
    var x = y.map(Number);
    for(var i = 0; i < x.length; i++){
        for (var j = 0; j < x.length; j++){
            if(x[j] > x[j+1]) {
                var bos = x[j];
                x[j] = x[j+1];
                x[j+1] = bos;
            }
        }
    }
    sonuc43 = "Girilen sayıların küçükten büyüğe sıralanmış hali: " + x + "<br> Girilen sayıların en büyüğü:" + x[2]; 
    document.getElementById("sonuc43").innerHTML = sonuc43;
    

};

function kirkyedi() {
    var sayac = 0;
    var x = [];
    for(var i = 1; i <= 40; i++){
        if(i % 5 == 0){
            
            x[sayac] = i;
            sayac++;
        }
    }
var y = " ";
    for(var i = 0; i < x.length; i++){
        y += x[i] + ", ";
    }
    sonuc47= "1 den 40 a kadar olan sayılardan 5 e bölünenler: <br>" + y;
    document.getElementById("sonuc47").innerHTML = sonuc47;

};

function elliyedi() {

    var x = document.getElementById("soru57").value;
    
    if(x > 9 && x < 16) {
        var sonuc57 = "Girilen sayı 10-15 aralığında." + "<br> Sayı: " + x;
        document.getElementById("soru57").setAttribute("disabled", "")
    }else{ 
        var sonuc57 = "Girilen sayı 10-15 aralığında değil." + "<br> Sayı: " + x;
        
    }


    document.getElementById("sonuc57").innerHTML = sonuc57;
};

function yetmissekiz() { 

    var xx = document.getElementById("soru78").value;
    var yy = document.getElementById("soru78-2").value;
    var zz = document.getElementById("soru78-3").value;

    if(xx != zz) {
        if(xx == 1) {
            if(zz == 2) {
                deger = 180 * (yy / 100) + 32;
                sonuc78 = "Celcius - Fahrenheit; <br>" + yy + "°C =" + deger + "°F";
            } else if(zz == 3) {
                deger = yy + 273;
                sonuc78 = "Celcius - Kelvin; <br>" + yy + "°C =" + deger + "K";
            } 
        } else if(xx == 2) {
            if(zz == 1) {
                deger= (yy - 32) * 5 / 9;
                sonuc78 = "Fahrenheit - Celcius; <br>" + yy + "°F =" + deger + "°C";
            } else if(zz == 3) {
                deger = (yy - 32) * 5 / 9 + 273;
                sonuc78 = "Fahrenheit - Kelvin; <br>" + yy + "°F =" + deger + "K"; 
            }
        } else if(xx == 3) {
            if(zz == 1) {
                deger = yy - 273;
                sonuc78 = "Kelvin - Celcius; <br>" + yy + "K =" + deger + "°C";
            } else if(zz == 2) {
                deger = (yy - 273) * 9 / 5 + 32;
                sonuc78 = "Kelvin - Fahrenheit; <br>" + yy + "K =" + deger + "°F";
            }
        }

    } else {
        sonuc78 = "Girilen birimler aynı lütfen bir birimi değiştirip tekrar deneyiniz.";
    }

    document.getElementById("sonuc78").innerHTML = sonuc78;

}