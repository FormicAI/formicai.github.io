var i = 0
var arr = ["engineers", "scientists", "programmers", "decision-makers", "humans!"];
var hero_h1 = document.getElementById("hero_h1");

function loop_personas()
{
  setInterval(_change_persona, 1500);
}

function _change_persona()
{
  hero_h1.innerText = arr[i];
  i++;
  i = i % arr.length;
}

