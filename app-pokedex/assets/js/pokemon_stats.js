import { getPokemonApi } from "./utils.js";

const mostrarGrafico = (data) => {
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Stats base del pokémon",
        },
        axisY: {
            title: "Puntos",
            suffix: "",
            interval: 15,
            minimum: 30,
            maximum: 150
        },
        axisX: {
            title: "Stats",
        },
        data: [
            {
                type: "column",
                yValueFormatString: "#,##0.0#",
                dataPoints: data,
            },
        ],
    });
    chart.render();
};

const main = async () => {
    // 1. Obtener los parámetros de la URL actual
    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    if (id) {
        let dataPokemon = await getPokemonApi(id);

        let { stats, name } = dataPokemon;

        document.getElementById("nombre-pokemon").textContent = name;

        //{ label: "India", y: 7.1 } -> formato del gráfico
        let dataStats = stats.map(dataStat => {
            let obj = {
                label: dataStat.stat.name,
                y:dataStat.base_stat
            }
            return obj;
        })

        mostrarGrafico(dataStats);
    }
};

main();
