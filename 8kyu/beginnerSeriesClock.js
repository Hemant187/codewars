// PREP

// P: h-hour, m-minute,s-seconds return miliseconds

// R: console 

// E: 

// h=0, m=0, s=1 => 1000

// h=0, m=1 , s=0  => 60000

// h=1, m=0 , s=0  => 3600000

function inMiliseconds(h,m,s){
    return h*60*60*1000 + m*60*1000 + s*1000 ;
}