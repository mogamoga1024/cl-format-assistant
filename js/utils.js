
function charEscape(char) {
    if (char === "") return "";
    if (char === "\\") return "'\\\\"
    if (char === "\"") return "'\\\""
    return "'" + char;
}
