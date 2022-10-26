let homecount=document.getElementById("home")
let guestcount=document.getElementById("guest")

let hc=0
let gc=0

function oneh()
{
    hc++;
    homecount.innerText=hc;
    lead();
}
function twoh()
{
    hc+=2;
    homecount.innerText=hc
    lead();
}
function threeh()
{
    hc+=3;
    homecount.innerText=hc
    lead();
}
function oneg()
{
    gc++;
    guestcount.innerText=gc
    lead();
}
function twog()
{
    gc+=2;
    guestcount.innerText=gc
    lead();
}
function threeg()
{
    gc+=3;
    guestcount.innerText=gc
    lead();
}
function reset()
{
    hc=0
    gc=0
    homecount.innerText=hc
    guestcount.innerText=gc
    lead();
}

let h=document.getElementById("H")
let g=document.getElementById("G")



function lead(){
    if(hc>gc)
    {
        h.style.color="#F59E0B"
        g.style.color="#EEEEEE"
    }
    
    else if(hc<gc)
    {
        g.style.color="#F59E0B"
        h.style.color="#EEEEEE"
    }
    else
    {
        h.style.color="#EEEEEE"
        g.style.color="#EEEEEE"
    }
}

