function noBack(){ window.history.forward();}

function BtnClick(link){   
   location.replace(link);
}

function mbtiCheck(selects){   
   selects.forEach(ans => {
      localStorage[ans] = String(Number(localStorage[ans]) + 1);
   })
}

function init() {
   localStorage["i"] = "0";
   localStorage["n"] = "0";
   localStorage["f"] = "0";
   localStorage["p"] = "0";
   localStorage["e"] = "0";
   localStorage["s"] = "0";
   localStorage["t"] = "0";
   localStorage["j"] = "0";
}

function resultShow(){
   var result="";
   if (localStorage["i"] <= localStorage["e"]) result += 'e'
   else result += 'i'

   if (localStorage["s"] <= localStorage["n"]) result += 'n'
   else result += 's'

   if (localStorage["t"] <= localStorage["f"]) result += 'f'
   else result += 't'

   if (localStorage["p"] <= localStorage["j"]) result += 'j'
   else result += 'p'

   return result;
}
