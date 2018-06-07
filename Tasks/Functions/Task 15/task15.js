function func() {
    var param = function inner() { return typeof inner; };
    alert(param());
}
func();
