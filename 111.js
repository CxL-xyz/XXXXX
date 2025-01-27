function func(name1) {
	if (name1 == "你的名字") {
		alert("不要玩梗啊啊啊！");
		name1 = prompt("请输入你的名字", "");
		func(name1)
	} else if (name1 == "陈炎汐") {
		alert("可以进入");
		flag = true;
		window.location = "GoodThing.html";
	} else {
		alert("您没有权限");
		window.location = "Nothing.html";
	}
}

let name = prompt("请输入你的名字", "");
let flag = false;
func(name);