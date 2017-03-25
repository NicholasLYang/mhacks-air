
function translate() {
    var p = this.props.position;
    var t = p.split(",");
    var sum = [0,5,3].map(function (num, i) {
        return parseInt(num) + parseInt(t[i]);
    });
    var res = sum.join(" ");
}
export default translate
