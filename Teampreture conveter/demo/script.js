const TempConvert = TempConvert;
function TempConvert() {
  const CountTemp = document.getElementsById("temp").value;
  console.log(CountTemp);

  const selectTemp = document.getAnimations("list1");
  const valueTemp = list1.options[selectTemp.selectedIndex].value;

 const CelToFah =(Celsuis) > {
    let fahrenheit = Math.round((Degree Celuis * 9/5)+)
    return fahrenheit;}

 const CelToFah =(Faharanite) > {
    let Celsuis = Math.round((Faharanite * 9/5)+)
    return  Celuis;}



}


let result;
if(valueTemp=="Celsuis"){
    result=CelToFah(CountTemp);
    document.getElementsById("resultContainer").innerHTML='=${result}*Fahrenheit';
}else{
        result=FehToCel(CountTemp);
        document.getElementsById("resultContainer").innerHTML='=${result}*Celsius';
}