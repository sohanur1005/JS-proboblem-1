function isLeapear(year){
     if(year%100 !==0 && year%4==0)
     {
        console.log('Leapyear')
     }
     else if(year%400==0 && year%4==0)
     {
        console.log('Leapyear')
     }
     else{
        console.log('Not Leapyear')
     }

}

const year1=isLeapear(2100);
const year2=isLeapear(2000);
const year3=isLeapear(2020);