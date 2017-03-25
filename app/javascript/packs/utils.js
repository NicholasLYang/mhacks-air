
function translate(props) {
    console.log(props);
    var position = props.position;
    var t = position.split(",");
    var sum = [0,5,3].map(function (num, i) {
        return parseInt(num) + parseInt(t[i]);
    });
    return sum.join(" ");
}
export default translate
