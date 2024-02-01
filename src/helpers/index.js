export function getCardPattern(num) {
    let str = ''
    let count = 0
    for (let i = 0; i < num?.length; i++) {
        if (count >= 4) {
            count = 0
            str += ' '
        }
        str += num[i]
        count++
    }
    return str
}