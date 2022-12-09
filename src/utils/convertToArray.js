export const toRegexifiedRelativesArray = (input) => {
    const array = input.split(/[,;\uFFFD\n](?![^()]*\))/g);

    if (array[0] === "-") {
        array[0] = "no relatives known"
    }
    return array
}

export const toRegexifiedAffiliationsArray = (input) => {
    const array = input.split(/[,;\uFFFD\n](?![^()]*\))/g);

    if (array[0] === "-") {
        array[0] = "no affiliations known"
    }
    return array
} 