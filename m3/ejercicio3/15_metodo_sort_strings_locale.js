//SOLUCIÓN ORDENAMIENTO CON COMPARACIÓN LOCALE -> CONSIDERA TILDES, Ñ, POSICIÓN DE MAYÚSCULAS Y MINÚSCULAS

const items = ["réservé", "premier", "Communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b, "es"));

console.log(items);