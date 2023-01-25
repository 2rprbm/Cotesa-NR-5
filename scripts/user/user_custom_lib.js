var operacao = "lancarnotaaulasteoricacanvas";
var idcourse = 49;
var assignment = 347;

var save_score = function (score) {
  console.log("Starting Save Process...");
  var id_user = get_myuser();
  $.ajax({
    type: "POST",
    url:
      "https://app.institutoembelleze.com/apiiesystemcanvas/apiiesystemcanvas.php",
    contentType: "application/json",
    data: jQuery.param({
      operacaocanvas: operacao,
      codcurso: idcourse,
      codassignments: assignment,
      codusuariocanvas: id_user,
      qtdperguntas: 4,
      qtdacertos: score,
    }),
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    success: function (data) {
      console.log("Save with success");
      console.log(data);
    },
    error: function (data) {
      console.log("Save incomplete");
      console.log(data);
    },
  });
};

function get_myuser() {
  let urlParams = new URLSearchParams(window.location.search);
  let user_id = urlParams.get("id-usuario");
  return user_id;
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
