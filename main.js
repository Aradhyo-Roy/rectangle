function calculate(){
    var number_1= Number(document.getElementById("Height").value)
    var number_2= Number(document.getElementById("breadth").value)

    area= number_1*number_2;
    perimeter= 2*number_1+number_2;

    document.getElementById("Area").innerHTML=area;
    document.getElementById("Perimeter").innerHTML=perimeter;
}