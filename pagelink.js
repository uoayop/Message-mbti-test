// import question_style from "./Style/question_style.css";
import font_style from "./Style/font.css";
import start_style from "./Style/start_style.css";
// import result_style from "./Style/result_style.css";

export function noBack() {
  window.history.forward();
}

export function BtnClick(link) {
  location.replace(link);
}

export function mbtiCheck(selects) {
  selects.forEach((ans) => {
    localStorage[ans] = String(Number(localStorage[ans]) + 1);
  });
}

export function init() {
  localStorage["i"] = "0";
  localStorage["n"] = "0";
  localStorage["f"] = "0";
  localStorage["p"] = "0";
  localStorage["e"] = "0";
  localStorage["s"] = "0";
  localStorage["t"] = "0";
  localStorage["j"] = "0";
}

export function resultShow() {
  var result = "";
  if (localStorage["i"] <= localStorage["e"]) result += "e";
  else result += "i";

  if (localStorage["s"] <= localStorage["n"]) result += "n";
  else result += "s";

  if (localStorage["t"] <= localStorage["f"]) result += "f";
  else result += "t";

  if (localStorage["p"] <= localStorage["j"]) result += "j";
  else result += "p";

  return result;
}

// export { question_style, start_style, result_style };
