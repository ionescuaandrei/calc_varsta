

function calculeaza(){
   setInterval(() => {
    let birthdate = new Date(document.querySelector('#dataNastere').value);

    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();
    let ageInS = ageInMs / 1000;
    let ageInMin = ageInS / 60;
    let ageInHours = ageInMin / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;

    document.querySelector('#ani').innerHTML = Math.floor(ageInYears);
    document.querySelector('#luni').innerHTML = Math.floor(ageInMonths % 12);
    document.querySelector('#zile').innerHTML = Math.floor(ageInDays % 30.4375);
    document.querySelector('#ore').innerHTML = Math.floor(ageInHours % 24 );
    document.querySelector('#minute').innerHTML = Math.floor(ageInMin % 60);
    document.querySelector('#secunde').innerHTML = Math.floor(ageInS % 60);


  }, 1000);
}

function reset(){
  window.location.reload()
}

function clearInput(){
  let getValue= document.querySelector('.clearInput');
    if (getValue.value !="") {
        getValue.value = "";
    }
}