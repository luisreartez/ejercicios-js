let ahorroTotal = 0;

while (ahorroTotal < 1000) {
    let monto = Number(prompt("💰 Ingresa el monto que deseas ahorrar:"));

    if (monto < 0) {
        console.log("❌ No puedes ingresar montos negativos.");
    } else {
        ahorroTotal += monto;
        console.log(`💵 Ahorro acumulado: $${ahorroTotal}`);
    }
}

console.log("🎉 ¡Objetivo alcanzado! Has ahorrado $" + ahorroTotal);
