function getTemp() {
  var response = UrlFetchApp.fetch("http://api.openweathermap.org/data/2.5/weather?q=Singapore,SG&appid=8d1517971ebf34d8840cc7557ecd3847&units=metric");
  Logger.log(response.getContentText());
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  var sheet = SpreadsheetApp.getActiveSheet();
    
  sheet.getRange(2,1).setValue(data["main"]["temp"]);
  sheet.getRange(2,2).setValue(data["main"]["pressure"]);
  sheet.getRange(2,3).setValue(data["main"]["humidity"]);
  sheet.getRange(2,4).setValue(data["main"]["temp_min"]);
  sheet.getRange(2,5).setValue(data["main"]["temp_max"]);
  sheet.getRange(2,6).setValue(data["weather"][0]["main"]);
}
