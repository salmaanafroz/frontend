var url_name = document.URL;
var url = new URL(url_name);
var fname = url.searchParams.get("fname");

fetch("https://restcountries.eu/rest/v2/name/" + fname + "?fullText=true").then((res) =>{
  res.json().then((data)=>{
  
    var container = document.querySelector(".container");
  
    flag = document.createElement("img");
    flag.className = "flagimg";
    flag.setAttribute("src" , data[0].flag);
    container.append(flag);



    hk = document.createElement("div");
    hk.append("Name: " + data[0].name);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Capital: " +data[0].capital);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Calling Codes: " +data[0].callingCodes[0]);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Region: " +data[0].region);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Subregion: " +data[0].subregion);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Population: " +data[0].population);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Languages: " +data[0].languages[0].name);
    container.append(hk);



    hk = document.createElement("div");
    hk.append("Currency: " +data[0].currencies[0].name);
    container.append(hk);


    hk = document.createElement("div");
    hk.append("Regional Blocs: " +data[0].regionalBlocs[0].name);
    container.append(hk);



  





    hk = document.createElement("div");
    container.append(hk);
    container.append(hk);




  })
})


function goBack() {
  window.history.back();
}