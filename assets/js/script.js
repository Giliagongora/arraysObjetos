// document.write('<h2>Estadisticas centro medico ñuñoa</h2>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


//Agregar código para el desafio 2 aquí

//RADIOLOGIA
// document.write('<h3>Radiologia</h3>');
let textoRadiologia = "";
// Agrego la etiqueta <table>
textoRadiologia += "<table>";
// Agrego la etiqueta <thead> con los nombres de las columnas
textoRadiologia += "<thead><tr><td><p>Hora</p></td><td><p>Especialista</p></td><td><p>Paciente</p></td><td><p>Rut</p></td><td><p>Prevision</p></td></tr></thead>";
for (let i = 0; i < radiologia.length; i++) {
  textoRadiologia += `<tr>
    <td><p>${radiologia[i].hora}</p></td>
    <td><p> - ${radiologia[i].especialista}</p></td>
    <td><p> - ${radiologia[i].paciente}</p></td>
    <td><p> - ${radiologia[i].rut}</p></td>
    <td><p> - ${radiologia[i].prevision} </p></td>
  </tr>`;
  console.log(textoRadiologia);
}
// Agrego la etiqueta </table>
textoRadiologia += "</table>";
// document.getElementById("lista1"); 
document.write(textoRadiologia);


//TRAUMOTOLOGIA
// document.write('<h3>Traumotologia</h3>');
let textoTraumatologia = "";
// Agrego la etiqueta <table>
textoTraumatologia += "<table>";
// Agrego la etiqueta <thead> con los nombres de las columnas
textoTraumatologia += "<thead><tr><td><p>Hora</p></td><td><p>Especialista</p></td><td><p>Paciente</p></td><td><p>Rut</p></td><td><p>Prevision</p></td></tr></thead>";
for (let i = 0; i < traumatologia.length; i++) {
  textoTraumatologia += `<tr>
    <td><p> - ${traumatologia[i].hora}</p></td>
    <td><p> - ${traumatologia[i].especialista}</p></td>
    <td><p> - ${traumatologia[i].paciente}</p></td>
    <td><p> - ${traumatologia[i].rut}</p></td>
    <td><p> - ${traumatologia[i].prevision}</p></td>
  </tr>`;
  console.log(textoTraumatologia);
}
// Agrego la etiqueta </table>
textoTraumatologia += "</table>";
// document.getElementById("lista1"); 
document.write(textoTraumatologia);


//DENTAL 
// document.write('<h3>Dental</h3>');
let textoDental = "";
// Agrego la etiqueta <table>
textoDental += "<table>";
// Agrego la etiqueta <thead> con los nombres de las columnas
textoDental += "<thead><tr><td><p>Hora</p></td><td><p>Especialista</p></td><td><p>Paciente</p></td><td><p>Rut</p></td><td><p>Prevision</p></td></tr></thead>";
for (let i = 0; i < dental.length; i++) {
  textoDental += `<tr>
    <td><p> - ${dental[i].hora}</p></td>
    <td><p> - ${dental[i].especialista}</p></td>
    <td><p> - ${dental[i].paciente}</p></td>
    <td><p> - ${dental[i].rut}</p></td>
    <td><p> - ${dental[i].prevision}</p></td>
  </tr>`;
  console.log(textoDental);
}
// Agrego la etiqueta </table>
textoDental += "</table>";
// document.getElementById("lista1"); 
document.write(textoDental);

// Agregar horas a traumatologia,  push(), shift(), split() en base a nuevo array de traumotologia
let traumatologia1 = [
  {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
  {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
  {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
  {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
  {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
  {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
  {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];
// Añado los nuevos elementos a traumotologia1
traumatologia1.push( 
{hora: '09:00',  especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA',     rut: '13123329-7', prevision: 'ISAPRE'},
{hora: '09:30',  especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE',     rut: '12221451-K', prevision: 'FONASA'} , 
{hora: '10:00',  especialista: 'RAUL LOYOLA ', paciente: 'CARMEN ISLA',     rut: '10112348-3', prevision: 'ISAPRE'} , 
{hora: '10:30',  especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',     rut: '13453234-1', prevision: 'ISAPRE'} , 
{hora: '12:00',  especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE',     rut: '14345656-6', prevision: 'FONASA'});


// //TRAUMOTOLOGIA
document.write('<h3>Traumotologia</h3>');
let textoTraumatologia1 = "";
// Agrego la etiqueta <table>
textoTraumatologia1 += "<table>";
// Agrego la etiqueta <thead> con los nombres de las columnas
textoTraumatologia1 +=  "<thead><tr><td><p>Hora</p></td><td><p>Especialista</p></td><td><p>Paciente</p></td><td><p>Rut</p></td><td><p>Prevision</p></td></tr></thead>";
for (let i = 0; i < traumatologia1.length; i++) {
  textoTraumatologia1 += `<tr>
    <td><p> - ${traumatologia1[i].hora}</p></td>
    <td><p> - ${traumatologia1[i].especialista}</p></td>
    <td><p> - ${traumatologia1[i].paciente}</p></td>
    <td><p> - ${traumatologia1[i].rut}</p></td>
    <td><p> - ${traumatologia1[i].prevision}</p></td>
  </tr>`;
  console.log(textoTraumatologia1);
}
// Agrego la etiqueta </table>
textoTraumatologia1 += "</table>";
// document.getElementById("lista1"); 
document.write(textoTraumatologia1);


//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);


// Eliminar primer y ultimo arreglo de Radiologia
let radiologia1 = [
  {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
  {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
  {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
  {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
  {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

// // En este console.log tenemos 5 elementos
console.log(radiologia1);
//  Elimina el ultimo elemento de un arreglo
radiologia1.pop();
// En este console.log tenemos 4 elementos
console.log(radiologia1);
//  Elimina el primer elemento de un arreglo
radiologia1.shift();
// En este console.log tenemos 3 elementos
console.log(radiologia1);

//RADIOLOGIA
document.write('<h3>Radiologia</h3>');
let textoRadiologia1 = "";
// Agrego la etiqueta <table>
textoRadiologia1 += "<table>";
// Agrego la etiqueta <thead> con los nombres de las columnas
textoRadiologia1 += "<thead><tr><td>Hora</td><td>Especialista</td><td>Paciente</td><td>Rut</td><td>Prevision</td></tr></thead>";
for (let i = 0; i < radiologia1.length; i++) {
  textoRadiologia1 += `<tr>
    <td><p>${radiologia1[i].hora}</p></td>
    <td><p>${radiologia1[i].especialista}</p></td>
    <td><p>${radiologia1[i].paciente}</p></td>
    <td><p>${radiologia1[i].rut}</p></td>
    <td><p>${radiologia1[i].prevision}</p></td>
  </tr>`;
  console.log(textoRadiologia1);
}
// Agrego la etiqueta </table>
textoRadiologia1 += "</table>";
// document.getElementById("lista1"); 
document.write(textoRadiologia1);


//Lista de nombres
document.write('<h3>Nombres pacientes</h3>');

let todosLosPacientes = [...radiologia, ...traumatologia, ...dental];

console.log(todosLosPacientes);

let nombresPacientes = todosLosPacientes.map(paciente => paciente.paciente);

console.log(nombresPacientes);

console.log('Nombres de los pacientes:');
nombresPacientes.forEach(nombre => document.write("<p> "+ nombre +"</p>"));    


// Lista de isapre y pacientes dental
document.write('<h3>Nombres pacientes que son de isapres en dental</h3>');

let todosLosPacientesIsapre = dental;

let pacientesConIsapre = todosLosPacientesIsapre.filter(paciente => paciente.prevision === 'ISAPRE');

console.log('Pacientes con ISAPRE:');
pacientesConIsapre.forEach(paciente => document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`));

// Lista de fonasa y pacientes traumatología

document.write('<h3>Nombres pacientes que son de fonasa en traumatologia</h3>');

let todosLosPacientesFonasa = traumatologia;

let pacientesConFonasa = todosLosPacientesFonasa.filter(paciente => paciente.prevision === 'FONASA');

console.log('Pacientes con ISAPRE:');
pacientesConFonasa.forEach(paciente => document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`));