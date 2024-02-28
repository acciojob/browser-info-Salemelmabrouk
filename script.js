//your JS code here. If required.
 
        document.addEventListener("DOMContentLoaded", function() {
            var browserInfoDiv = document.getElementById("browser-info");

            var browserName = navigator.appName;
            var browserVersion = navigator.appVersion;

         
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                browserName = "Firefox";
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
                browserName = "Chrome";
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
                browserName = "Safari";
            } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
                browserName = "Internet Explorer";
            }

            browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
        });