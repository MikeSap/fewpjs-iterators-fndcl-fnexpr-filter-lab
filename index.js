// Code your solution here
function findMatching(drivers, match){
    return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, match){
    return drivers.filter(driver => driver.toLowerCase().indexOf(match.toLowerCase()) === 0)
}

function matchName(drivers, match){
    return drivers.filter(driver => driver.name === match)
}