moment.locale("es");

let outputDate = "";
let fechaHoraIntervalID = setInterval(() => {
    outputDate = moment().format("DD [de] MMMM [del año] YYYY [, Hora: ]  h:mm:ss a'");

    document.getElementById("hora-sistema").textContent = outputDate;
}, 1000);
