const generator = document.getElementById("button");

var setResult = [
  864, 681, 182, 829, 749, 510, 458, 845, 889, 216, 289, 582, 682, 191, 211,
  176, 777, 387, 398, 658, 200, 810, 368, 265, 372, 598, 19, 524, 173, 249, 102,
  812, 502, 661, 658, 91, 441, 201, 181, 295, 888, 128, 690, 29, 101, 431, 188,
  976, 229, 285, 72, 724, 639, 761, 259, 469, 110, 934, 282, 132, 208, 315, 93,
  893, 288, 127, 269, 39, 932, 638, 298, 512, 317, 286, 371, 66, 485, 250, 741,
  626, 484, 527, 208, 434, 628, 291, 538, 108, 127, 546, 119, 195, 714, 319,
  890, 351, 996, 155, 498, 205, 819, 409, 633, 689, 232, 443, 281, 418, 35, 374,
  228, 359, 510, 916, 139, 791, 198, 238, 167, 347, 628,
];

var count = 0;

result = document.getElementById("result");

generator.onclick = function () {
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;
  var t = new Date();
  var date = ("0" + t.getDate()).slice(-2);
  var month = ("0" + (t.getMonth() + 1)).slice(-2);
  var year = t.getFullYear();
  var hours = ("0" + t.getHours()).slice(-2);
  var minutes = ("0" + t.getMinutes()).slice(-2);
  var seconds = ("0" + t.getSeconds()).slice(-2);
  var time = `${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC`;
  var n = count++;
  if (n >= setResult.length) return;
  result.innerHTML =
    '<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif" alt="Loading..." />';
  setTimeout(function () {
    result.innerHTML = `<center>
      <span style="font-size: 100%; font-weight:bold">
          ${setResult[n]}
          <br>
      </span>
      <span style="font-size: 65%;">
          Min: ${min}, Max: ${max}
          <br>
          ${time}
      </span>
  </center>`;
  }, (Math.floor(Math.random() * 4) + 2) * 100);
};
