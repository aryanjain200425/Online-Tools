document.getElementById("convertBtn").addEventListener("click", function() {
    var timeInput = document.getElementById("time").value;
    var fromTimezoneSelect = document.getElementById("fromTimezone");
    var toTimezoneSelect = document.getElementById("toTimezone");
    var fromTimezone = fromTimezoneSelect.value;
    var toTimezone = toTimezoneSelect.value;
    
    var options = { timeZone: fromTimezone, hour: "numeric", minute: "numeric" };
    var fromTime = new Date().toLocaleTimeString([], options);
  
    options.timeZone = toTimezone;
    var toTime = new Date().toLocaleTimeString([], options);
    
    var conversionResult = "Converted Time: " + fromTime + " (" + fromTimezone + ") to " + toTime + " (" + toTimezone + ")";
    document.getElementById("convertedTime").textContent = conversionResult;
  });
  