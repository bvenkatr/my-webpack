export default function (val) {
    return Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, "$1");
};
