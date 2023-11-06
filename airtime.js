let random = document.getElementById("random")
console.log(Math.random()* 10)
console.log(Math.floor(Math.random()*10))
random.innerHTML = (Math.floor(Math.random()*10))
let netWork = document.getElementById("net-work")
let amount = document.getElementById("amount")



// airtime generator
console.log(Math.floor(Math.random() * 10))
let load_airtime = document.getElementById("load_airtime")
let airtimeArr = []
let airtime;

function genAirtime(){
    airtime = (Math.floor(Math.random() * 100000))
    airtime_screen.innerHTML = airtime
}

function loadAirtime(){
    if(load_airtime.value.startsWith("*555*") && netWork.value == "MTN" && !amount.value == "" && load_airtime.value.includes(airtime) && load_airtime.value.endsWith("#")){
        console.log(load_airtime.value.startsWith("*555*"), "Start with" );
        console.log(load_airtime.netWork == "MTN", "Network" );
        // console.log(load_airtime.amount.value, "Amount");
        // console.log(load_airtime.value.endWith("#"), "End with" );
        // console.log(load_airtime.value.includes(airtime), "includes" );

        if (airtimeArr.includes(airtime)){
            alert("You have loaded this airtime before")
        }
        else{
            airtimeArr.push(airtime)
            alert(`You have successfully recharged MTN worth ${amount.value}`)
        }
    }
    else if(load_airtime.value.startsWith("*123*") && netWork.value == "GLO" && !amount.value == "" && load_airtime.value.includes(airtime) && load_airtime.value.endsWith("#")){
        if (airtimeArr.includes(airtime)){
            alert("You have loaded this airtime before")
        }
        else{
            airtimeArr.push(airtime)
            alert(`You have successfully recharged GLO worth ${amount.value}`)
        }
    }
    else if(load_airtime.value.startsWith("*126*") && netWork.value == "AIRTEL" && !amount.value == "" && load_airtime.value.includes(airtime) && load_airtime.value.endsWith("#")){
        if (airtimeArr.includes(airtime)){
            alert("You have loaded this airtime before")
        }
        else{
            airtimeArr.push(airtime)
            alert(`You have successfully recharged Airtel worth ${amount.value}`)
        }
    }
    else if(load_airtime.value.startsWith("*333*") && netWork.value == "ETISALAT" && !amount.value == "" && load_airtime.value.includes(airtime) && load_airtime.value.endsWith("#")){
        if (airtimeArr.includes(airtime)){
            alert("You have loaded this airtime before")
        }
        else{
            airtimeArr.push(airtime)
            alert(`You have successfully recharged Etisalat worth ${amount.value}`)
        }
    }
    else{
        alert("Invalid airtime")
    }
  
    // if(load_airtime.value.startsWith("*555*") && load_airtime.value.endsWith("#")){
    //     alert("You have successfully recharge")
    // }
    // else{
    //     alert("You entered an inccorrect pin")
    // }
}
