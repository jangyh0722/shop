var config = {
    apiKey: "AIzaSyAMzQzr8BJcaJH5hbOdrSepJWo7a-D_w0M",
    authDomain: "jangyh0722-mall.firebaseapp.com",
    databaseURL: "https://jangyh0722-mall.firebaseio.com",
    projectId: "jangyh0722-mall",
    storageBucket: "jangyh0722-mall.appspot.com",
    messagingSenderId: "383656927633"
  };
  firebase.initializeApp(config);
var db = firebase.database();
var ref;
(function initTest() {
	ref = db.ref("root/test/");
	ref.on("child_added", testAdd);
	ref.on("child_removed", testRev);
	ref.on("child_changed", testChg);
})();
function testAdd(data) {
	var html = '<li id="'+data.key+'" onclick="dataRemove(this);">';
	html += '<span>'+data.val().title+'</span><br>';
	html += '<span>'+data.val().username+'</span>';
	html += '</li>';
	$(".datas").append(html);
}
function testRev(data) {
	$("#"+data.key).remove();
}
function testChg(data) {

}
function dataRemove(obj) {
	var id = obj.id;
	db.ref("root/test/"+id).remove();
}

$("#bt_add").on("click", function () {
	var title = $("#title").val();
	var username = $("#username").val();
	ref = db.ref("root/test");
	ref.push({
		title: title,
		username:username
	}).key;
});

