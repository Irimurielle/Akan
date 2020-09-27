function akanName() {
    var YY = document.getElementById('year').value;
    var MM = parseInt(document.getElementById('month').value);
    var DD = parseInt(document.getElementById('day').value);
    var genders = document.getElementsByName('gender');
    var myGender = function() {
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
    var d = Math.floor(((((parseInt(YY.slice(0, 2))) / 4) - 2 * (parseInt(YY.slice(0, 2))) - 1) + ((5 * (parseInt(YY.slice(2, 4))) / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var i;
    if (d == 0) {
      i = 6;
    } else {
      i = d - 1;
    }
    if (myGender == "M" && month && day) {
        document.getElementById('akan').textContent = "You were born on a " + daysOfWeek[i] + " , your Akan name is " + maleAkanNames[i];
    } else {
        document.getElementById('akan').textContent = "You were born on a " + daysOfWeek[i] + " , your Akan name is " + femaleAkanNames[i];
    }
}
  