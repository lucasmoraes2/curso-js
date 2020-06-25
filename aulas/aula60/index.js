// Função recursiva
function recursiva(max) {
    console.log(max);
    if (max >= 11000) return;
    max++;
    recursiva(max);
}

recursiva(0);