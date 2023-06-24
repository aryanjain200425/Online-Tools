
document.getElementById("convertBtn").addEventListener("click", function() {
    var timeInput = document.getElementById("time").value;
    var timezoneSelect = document.getElementById("timezone");
    var selectedTimezone = timezoneSelect.value;
    
    var options = { timeZone: selectedTimezone, hour: "numeric", minute: "numeric" };
    var convertedTime = new Date().toLocaleTimeString([], options);
    
    document.getElementById("convertedTime").textContent = "Converted Time: " + convertedTime;
  });
  