$( document ).ready(function() {
    var url_path = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgSC1yRweXMwb3YagDHJ8q3JBcRqoKgeAVsdVlsrOdXIV7qtb9Xlzfsd0Eeo18wUlGCTqW65mg50Lr/pub?gid=347326324&sinsgle=true&output=csv";
    
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
