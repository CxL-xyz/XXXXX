let map = new Map();

map.set("陈炎汐", "123456");
map.set("沈子翔", "123456");
map.set("陈许乐", "654321");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");
// map.set("陈炎汐", "123456");

let name, password;

function check(n, p) {
	if (map.has(n) && map.get(n) == p) {
		return true;
	}
	return false;
}

function func() {
	name = document.getElementById("name").value;
	password = document.getElementById("pw").value;
	if (check(name, password)) {
		alert("登录成功");
		// window.location.href = "GoodThing.html";
		window.open('GoodThing.html','_blank');
	} else {
		alert("用户名或密码错误");
	}
}
