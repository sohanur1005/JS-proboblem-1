function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}
const height=inchToFeet(80);
console.log(height)


function inchToFeet2(inch){
    const feetFraction=inch/12;
    const feetNumber=parseInt(feetFraction)
    const inchRemaining=inch%12;
    const reault=feetNumber + ' fit ' +inchRemaining +' inch'
     return reault;
   

}const inch=inchToFeet2(80)
console.log(inch)


// Mile to kilometer
function mileTokilo(mile){
    const kilo=mile * 1.60934;
    return kilo;
}
const mile=mileTokilo(10)
console.log(mile + ' Kilometer')




