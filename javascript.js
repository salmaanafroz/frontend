function search()
{
var country = document.querySelector("#cname").value;
  fetch("https://restcountries.eu/rest/v2/name/" + country).then((res)=>{
    res.json().then((data)=>{
      console.log(data);

      var container = document.querySelector(".results");
      for(var i = 0; i < data.length ; i++) {
        hk = document.createElement("div");
        hk.className = "block";
        hk.setAttribute("onclick" , "getDetail(this)");
        textSpan = document.createElement("span");
        textSpan.className = data[i].name;
        flag = document.createElement("img");
        flag.className = "flagimg";
        flag.setAttribute("src" , data[i].flag);
        textSpan.append(data[i].name); 
        hk.append(textSpan);
        hk.append(flag);
        container.append(hk);
      }
    })
  })
}
function getDetail(ele)
{
  var blk = ele.querySelector("span");
  var fname = blk.className;
  location.href = "subpage.html?fname=" + fname;
}