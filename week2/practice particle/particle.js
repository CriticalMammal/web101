var c = document.getElementById("my_canvas");
var ctx = c.getContext("2d");

$('.rect').each(function(i, obj) {
	var rect = obj.getBoundingClientRect();
	ctx.lineWidth="1";
	ctx.strokeStyle="red";
	//ctx.rect(rect.left, rect.top, rect.right, rect.bottom);
	ctx.rect(rect.left, rect.top, rect.width, rect.height);
	console.log("top:" + rect.top, " right:" + rect.right, " bottom:" + rect.bottom, " left:" + rect.left);
	//ctx.rect(rect.top, rect.left, rect.right, rect.bottom);
	ctx.stroke();
});