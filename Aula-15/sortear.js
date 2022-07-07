const intRandom = (min, max) => {
    const numero = Math.trunc(
        Math.random()*
        (max-min)
    )+min;
    return (numero>=min && numero<=max)? numero : intRandom(min, max);
}

const elRandom = (array) => array[intRandom(0,array.length)];

export default elRandom;