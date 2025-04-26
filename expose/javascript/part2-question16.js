for(let prop in statistics) {
    if (Object.hasOwn(statistics, prop)) {
        console.log('statistics.${prop} = ${statistics[prop]}');
    }
}