
function needParam(param, defaultParam) {
    return param !== defaultParam && param !== ""
}

function charEscape(char) {
    if (char === "") return "";
    if (char === "\\") return "'\\\\"
    if (char === "\"") return "'\\\""
    return "'" + char;
}
