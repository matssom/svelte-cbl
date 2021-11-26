export const size = (str, wrapper) => {
    let result = ''
    switch (str) {
        case 'huge':
            result = '16rem;'
            break;
        case 'large':
            result = '11rem;'
            break;
        case 'medium':
            result = '6rem;'
            break;
        case 'small':
            result = '3rem;'
            break;
        case 'tiny':
            result = '1rem;'
            break;
        default:
            result = `${str}`;
            break;
    }
    if (typeof wrapper === 'function') result = wrapper(result)
    return result
}