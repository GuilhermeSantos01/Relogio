const hour = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const relogioDigital = document.getElementById("digital-time");
const calendarTable = document.querySelector(".calendar tbody");

function getTime() {
    const time = new Date();

    const getHoursRot = (360 / 12) * time.getHours();
    const getMinRot = (360 / 60) * time.getMinutes();
    const getSecRot = (360 / 60) * time.getSeconds();

    hour.style.transform = `rotate(${getHoursRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;

}
setInterval(() => {
    getTime();
}, 1000);
getTime();

function obterHoraDigital() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');

    relogioDigital.textContent = `${horas}:${minutos}:${segundos}`;
}

function diasNoMes(ano, mes) {
    return new Date(ano, mes + 1, 0).getDate();
}

function criarCalendario() {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const diaAtual = data.getDate();
    const mesAtual = data.getMonth();
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    let tabelaCalendario = '';

    tabelaCalendario += '<tr>';
    for (let i = 0; i < meses.length; i++) {
        if (i === 4 || i === 8) {
            tabelaCalendario += '</tr><tr>';
        }

        tabelaCalendario += `<td class="month-cell ${meses[i].toLowerCase()}">`;
        tabelaCalendario += `<table>`;
        tabelaCalendario += `<thead><tr><th colspan="7">${meses[i]}</th></tr></thead>`;
        tabelaCalendario += `<tbody>`;

        const qtdeDias = diasNoMes(anoAtual, i);
        let dia = 1;
        for (let row = 0; row < 6; row++) {
            tabelaCalendario += '<tr>';
            for (let col = 0; col < 7; col++) {
                if (dia > qtdeDias) {
                    tabelaCalendario += '<td class="empty-cell"></td>';
                } else {
                    const classeDiaAtual = (dia === diaAtual && i === mesAtual) ? 'dia-atual' : '';
                    tabelaCalendario += `<td class="${classeDiaAtual}">${dia}</td>`;
                    dia++;
                }
            }
            tabelaCalendario += '</tr>';
            if (dia > qtdeDias) break;
        }

        tabelaCalendario += `</tbody></table></td>`;
    }
    tabelaCalendario += '</tr>';

    calendarTable.innerHTML = tabelaCalendario;

    // Atualiza o ano no elemento span
    document.getElementById('current-year').textContent = anoAtual;
}

setInterval(() => {
    obterHoraDigital();
}, 1000);

obterHoraDigital();
criarCalendario();
