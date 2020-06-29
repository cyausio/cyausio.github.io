$( document ).ready(function() {
    var url_path = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtsURGSP_i0fGHWdLnHjmiaWZjGApXR73bQIOhhJe3RrZvC4hE0DuWkpfoA4XEEXeTxFobGg2WPat_/pub?gid=1017603615&single=true&output=csv";
    
    var data_values = Papa.parse(url_path, {
        download: true
    });
    
    console.log(String(data_values));
});