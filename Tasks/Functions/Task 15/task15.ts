function func()
{
    var param: any = function inner(): any { return typeof inner; }
    alert(param());
}
func();