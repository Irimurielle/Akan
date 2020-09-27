function akanName() {
    var YY = parseInt(document.getElementById('year').value);
    var MM = parseInt(document.getElementById('month').value);
    var DD = parseInt(document.getElementById('day').value);
    var genders = document.getElementsByName('gender');  
    var myGender = function gender() {
        for (var gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    var month = function() {
        if (MM <= 0 || MM > 12) {
            return alert("Enter a valid month");
        }
    }
    var day = function() {
        if (DD <= 0 || DD > 31) {
            return alert("Enter a valid day");
        }
    }
    var dayOfWeek = Math.floor(((((YY.slice(0, 2)) / 4) - 2 * (YY.slice(0, 2)) - 1) + ((5 * (YY.slice(2, 4)) / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (myGender == "M" && month && day) {
        switch (dayOfWeek) {
            case 1:
                document.getElementById('akan').textContent = "You were born on Sunday, your Akan name is " + maleAkanNames[0];
                break;
            case 2:
                document.getElementById('akan').textContent = "You were born on Monday, your Akan name is " + maleAkanNames[1];
                break;
            case 3:
                document.getElementById('akan').textContent = "You were born on Tuesday, your Akan name is " + maleAkanNames[2];
                break;
            case 4:
                document.getElementById('akan').textContent = "You were born on Wednesday, your Akan name is " + maleAkanNames[3];
                break;
            case 5:
                document.getElementById('akan').textContent = "You were born on Thursday, your Akan name is " + maleAkanNames[4];
                break;
            case 6:
                document.getElementById('akan').textContent = "You were born on Friday, your Akan name is " + maleAkanNames[5];
                break;
            case 7:
                document.getElementById('akan').textContent = "You were born on Saturday, your Akan name is " + maleAkanNames[6];
                break;
            case 0:
                document.getElementById('akan').textContent = "You were born on Sunday, your Akan name is " + maleAkanNames[0];
        }
    } else if (myGender == "F" && month && day) {
        switch (dayOfWeek) {
            case 1:
                document.getElementById('akan').textContent = "You were born on Sunday, your Akan name is " + femaleAkanNames[0];
                break;
            case 2:
                document.getElementById('akan').textContent = "You were born on Monday, your Akan name is " + femaleAkanNames[1];
                break;
            case 3:
                document.getElementById('akan').textContent = "You were born on Tuesday, your Akan name is " + femaleAkanNames[2];
                break;
            case 4:
                document.getElementById('akan').textContent = "You were born on Wednesday, your Akan name is " + femaleAkanNames[3];
                break;
            case 5:
                document.getElementById('akan').textContent = "You were born on Thursday, your Akan name is " + femaleAkanNames[4];
                break;
            case 6:
                document.getElementById('akan').textContent = "You were born on Friday, your Akan name is " + femaleAkanNames[5];
                break;
            case 7:
                document.getElementById('akan').textContent = "You were born on Saturday, your Akan name is " + femaleAkanNames[6];
                break;
            case 0:
                document.getElementById('akan').textContent = "You were born on Sunday, your Akan name is " + femaleAkanNames[0];
        }
    }
}
    