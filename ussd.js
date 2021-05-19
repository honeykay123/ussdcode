// // Bankable ussd code
// // Account Balance
var initialBalance = 100000

var ussd = prompt("Enter USSD code");

if (ussd == "*123#") {
    var entry = prompt(
        "Enter 1 to buy Airtime\n" +
        "Enter 2 to buy Data\n" +
        "Enter 3 to Transfer\n" +
        "Enter 4 to check Balance\n" +
        "Enter 5 for cable subscription"
    );

    if(entry == 1) { 
        var airtime = Number(prompt("Enter Airtime amount"));
        if(airtime <= 10000){
            var phone = prompt("Enter phone number");
            if(phone.length == 11){
                alert(`${phone} has been credited with the sum of ${airtime}`);
                alert("Thanks for Banking with us");
            } else {
                alert("Sorry we cant process this transaction");
            }
        }
    } else if (entry == 2) {
            var data =Number(prompt("Enter Data Amount"));
            if (data <= 10000){
                var tel =prompt("Enter Phone Number");
                if (tel.length <=11){
                    alert("data has been credited" + tel);
                
                    alert("thanks for Banking with us");
                }
            } else { alert("sorry we cant process this transaction");
        }
    }else if (entry == 3) { 
        var tranF = Number(prompt("Enter account number"));
        if(tranF.length = 10){
            var tran = Number(prompt("Enter amount"));
        }
        if (tran<= 10000){
            alert("Transfer successful");
        }else{
            alert("insufficient Amount");
        }
    }else if (entry == 4) { 
        alert("Balance" + initialBalance);
    } else if(entry == 5) {
        var cable=prompt(
            "Enter 1 for DSTV subscription\n"+
            "Enter 2 for Bills subscription\n"+
            "Enter 3 for water subscription\n"+
            "Enter 4 for utility subscription\n"+
            "Enter 5 for salary payment");
        if(cable == 1){
            var cab = prompt("Enter your smart card number");
            if (cab.length === 10){
                var cabs = Number(prompt("Enter Amount"));
                if(cabs <= 100000){
                    alert("Payment successful");
                } else {
                    alert("You have exceeded the payment range");
                }
            } else {
                alert("invalid smart card number");
            }
        }
    } else{
        alert("Invalid Selection");
    }
} else {
    alert("Invalid USSD code");
}


             if (cable == 2) {
                var bill=prompt("Enter your smart card number");
                if(bill.length = 10) {
                    var bil = prompt("Enter your Smartcard password");
                    if(bil.length = 4){
                        var sent = prompt("Enter amount");
                        if(sent <=100000){
                            alert("transaction successful");
                        }else{
                            alert("You've spent more  than your budget");
                        }
                    }else {
                        alert("invalid transaction");
                    }
                }
            }else if(cable == 3){
                var water = prompt("Enter your water water ID");
                if (water.length = 10 ){
                    var wat = prompt("please enter Your pin password");
                    if(wat.length = 4){
                        var wats = prompt("Enter subscription amount");
                        if(wats<=100000){
                            alert("subscription successful");
                            if(wats>100000){
                                alert("Amount overpaid")
                            }
                        }else{
                            alert("Subscription invalid");
                        }
                    }
                } 
            } 
        

