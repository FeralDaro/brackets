module.exports = function check(str, bracketsConfig) {
    let closeBrackets = [],
        openBrackets = [],
        stack = [];
    for (bracket of bracketsConfig) {
        openBrackets.push(bracket[0])
    }
    for (bracket of bracketsConfig) {
        closeBrackets.push(bracket[1])
    }
    let closeIndex;
    let openIndex;
    for (let i = 0, len = str.length; i < len; i++) {
        openIndex = openBrackets.indexOf(str[i])
        closeIndex = closeBrackets.indexOf(str[i])
        if(openIndex !== -1 && closeIndex !== -1){
            let stackIndex = stack.indexOf(openIndex);
            if(stackIndex === -1){
                stack.push(openIndex);
                continue;
            }
            if(stackIndex !== -1){
                openIndex = stack.pop();
            }
        }

        if (openIndex !== -1 && closeIndex === -1) {
            stack.push(openIndex);
            continue
        }

        if (closeIndex !== -1 && openIndex === -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false
            }
        }
    }
    return stack.length === 0;
    
}
