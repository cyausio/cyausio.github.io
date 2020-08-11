$( document ).ready(function() {
    var url_path = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYP647FOGURUacX3nFKQ5VEd6bA_hl5uyKp7HazXKZt2UJK_FTwHjpnwoE3alJsvk3vXCakW43G1TA/pubhtml";
    
    /*
    var data_values = Papa.parse(url_path, {
        download: true
    });
    */
    console.log("hello");
    
    Papa.parse(url_path, {
      download: true,
      header: true,
      complete: function(results) {
        var data = results.data
        console.log(data)
      }
    });
    
});
