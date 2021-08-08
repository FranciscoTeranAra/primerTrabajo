var text;
var jsonPuro = "";

function pruebita() {
    console.log("Hola");
}

function crearDato() {
    var titulo = document.getElementById('tituloInput').value;
    var categoria = document.getElementById('categoriaInput').value;
    var srcImagen = document.getElementById('srcImagenInput').value;
    var numOfertas = document.getElementById('numOfertasInput').value;
    var gradoEducacionObtenido = document.getElementById('gradoEducacionObtenidoInput').value;
    var gradoEducacionRequerido = document.getElementById('gradoEducacionRequeridoInput').value;
    var disponibilidadActual = document.getElementById('disponibilidadActualInput').value;
    var disponibilidadRequerida = document.getElementById('disponibilidadRequeridaInput').value;
    var idiomasRequeridos = document.getElementById('idiomasRequeridosInput').value;
    var idiomasConocidos = document.getElementById('idiomasConocidosInput').value;
    var edadRequerida = document.getElementById('edadRequeridaInput').value;
    var edadActual = document.getElementById('edadActualInput').value;
    var salarioOfrecido = document.getElementById('salarioOfrecidoInput').value;
    var salarioSolicitado = document.getElementById('salarioSolicitadoInput').value;
    var Descripcion = document.getElementById('DescripcionInput').value;
    var jsonSimple = "";
    if (jsonPuro != "")
        jsonSimple += ","
    jsonSimple += '{"titulo":"' + titulo + '", "categoria":"' + categoria + '", "srcImagen":"' + srcImagen + '","numOfertas":"' + numOfertas + '","gradoEducacionObtenido":"' + gradoEducacionObtenido + '","gradoEducacionRequerido":"' + gradoEducacionRequerido + '","disponibilidadActual":"' + disponibilidadActual + '","disponibilidadRequerida":"' + disponibilidadRequerida + '","idiomasRequeridos":"' + idiomasRequeridos + '","idiomasConocidos":"' + idiomasConocidos + '","edadRequerida":"' + edadRequerida + '","edadActual":"' + edadActual + '","salarioOfrecido":"' + salarioOfrecido + '","salarioSolicitado":"' + salarioSolicitado + '","Descripcion":"' + Descripcion + '"}'
    console.log("Objeto: ", jsonSimple);
    jsonPuro += jsonSimple;
    console.log("Objetos: ", jsonPuro);
    console.log("Con headers ", '{"trabajos":[' + jsonPuro + ']}');
    text = '{"trabajos":[' + jsonPuro + ']}';
}

function llenadoDeDatos() {

    var txt;
    var x = 0;
    obj = JSON.parse(text);
    var cumpleSalario;
    var cumpleEdad;
    var cumpleDisponibilidad;


    for (x = 0; x < obj.trabajos.length; x++) {

        cumpleDisponibilidad = obj.trabajos[x].disponibilidadActual >= obj.trabajos[x].disponibilidadRequerida;
        cumpleEdad = obj.trabajos[x].edadRequerida <= obj.trabajos[x].edadActual;
        cumpleSalario = obj.trabajos[x].salarioSolicitado <= obj.trabajos[x].salarioOfrecido;

        txt += '<div class="col-md-4"><div class="panel panel-default"><div class="panel-body"><div class="page-header">' +
            "<h1>" + obj.trabajos[x].titulo + "<small>" + obj.trabajos[x].categoria + '</small> <span class="label label-success">NUEVO TRABAJO</span></h1>' +
            '<a href="#" class="thumbnail">' +
            '<img height="150px" src="' + obj.trabajos[x].srcImagen + '"' +
            'alt="Hombre feliz limpiando baños"></a>' +
            '<button class="btn btn-success" type="button">' +
            'Numero de ofertas <span class="badge">' + obj.trabajos[x].numOfertas + '</span>' +
            '</button><h1>Requisitos cumplidos</h1>' +
            '<div class="alert alert-danger" role="alert">' +
            'Grado de educacion:' + obj.trabajos[x].gradoEducacionObtenido + '<b>' +
            'Grado requerido:' + obj.trabajos[x].gradoEducacionRequerido + '</b></div>';
        if (cumpleDisponibilidad == true) {
            txt += '<div class="alert alert-success" role="alert">';
        } else {
            txt += '<div class="alert alert-danger" role="alert">';
        }
        txt +=
            '<p> Disponibilidad actual:' + obj.trabajos[x].disponibilidadActual + '</p><b>' +
            '<p>Disponibilidad requerida:' + obj.trabajos[x].disponibilidadRequerida + '</p></b></div>' +

            '<div class="alert alert-success" role="alert">' +
            '<p>Idiomas conocidos:' + obj.trabajos[x].idiomasConocidos + ' </p>' +
            '<b><p>Idiomas requeridos:' + obj.trabajos[x].idiomasRequeridos + '</p></b></div>';

        if (cumpleEdad == true) {
            txt += '<div class="alert alert-success" role="alert">';
        } else {
            txt += '<div class="alert alert-danger" role="alert">';
        }
        txt +=
            '<p> Edad actual:' + obj.trabajos[x].edadActual + '</p><b>' +
            '<p>Rango de edad:' + obj.trabajos[x].edadRequerida + '</p></b></div>';

        if (cumpleSalario == true) {
            txt += '<div class="alert alert-success" role="alert">';
        } else {
            txt += '<div class="alert alert-danger" role="alert">';
        }
        txt +=
            '<p>Salario esperado:' + obj.trabajos[x].salarioSolicitado + '</p><b>' +
            '<p> Salario ofrecido:' + obj.trabajos[x].salarioOfrecido + '</p></b></div>' +

            '<div class="panel panel-default"><div class="panel-heading">' +
            '<h3 class="panel-title">' + obj.trabajos[x].Descripcion + '</h3>' +
            '</div><div class="panel-body">' + obj.trabajos[x].Descripcion + '</div></div><button type="button" class="btn btn-primary">Postular</button></div>' +
            ' </div></div></div></div>';
    }

    document.getElementById("tabla").innerHTML = txt;
    console.log("llenado!");
}




function crearTrabajo() {
    var titulo = document.getElementById('tituloInput').value;
    var categoria = document.getElementById('categoriaInput').value;
    var srcImagen = document.getElementById('srcImagenInput').value;


    var gradoEducacionRequerido = document.getElementById('gradoEducacionRequeridoInput').value;

    var disponibilidadRequerida = document.getElementById('disponibilidadRequeridaInput').value;
    var idiomasRequeridos = document.getElementById('idiomasRequeridosInput').value;

    var edadRequerida = document.getElementById('edadRequeridaInput').value;

    var salarioOfrecido = document.getElementById('salarioOfrecidoInput').value;

    var Descripcion = document.getElementById('DescripcionInput').value;
    var jsonSimple = "";
    if (jsonPuro != "")
        jsonSimple += ","
    jsonSimple += '{"titulo":"' + titulo + '", "categoria":"' + categoria + '", "srcImagen":"' + srcImagen + '","gradoEducacionRequerido":"' + gradoEducacionRequerido + '","disponibilidadRequerida":"' + disponibilidadRequerida + '","idiomasRequeridos":"' + idiomasRequeridos + '","edadRequerida":"' + edadRequerida + '","salarioOfrecido":"' + salarioOfrecido + '","Descripcion":"' + Descripcion + '"}'
    console.log("Objeto: ", jsonSimple);
    jsonPuro += jsonSimple;
    console.log("Objetos: ", jsonPuro);
    console.log("Con headers ", '{"trabajos":[' + jsonPuro + ']}');
    text = '{"trabajos":[' + jsonPuro + ']}';
}


function llenadoDeDatosTrabajos() {

    var txt;
    var x = 0;
    obj = JSON.parse(text);
    var cumpleSalario;
    var cumpleEdad;
    var cumpleDisponibilidad;


    '<div class="col-md-4"><div class="panel panel-default"><div class="panel-body"><div class="page-header">' +
    "<h1>" + obj.trabajos[x].titulo + "<small>" + obj.trabajos[x].categoria + '</small> <span class="label label-success">Nueva oferta</span></h1>' +
        '<a href="#" class="thumbnail">' +
        '<img height="150px" src="' + obj.trabajos[x].srcImagen + '"' +
        'alt="Hombre feliz limpiando baños"></a>' +
        '<button class="btn btn-success" type="button">' +

        '</button><h1>Requisitos para el trabajo</h1>' +
        '<div class="alert alert-danger" role="alert">' +

        'Grado requerido:' + obj.trabajos[x].gradoEducacionRequerido + '</b></div>';
    if (cumpleDisponibilidad == true) {
        txt += '<div class="alert alert-success" role="alert">';
    } else {
        txt += '<div class="alert alert-danger" role="alert">';
    }
    txt +=

        '<p>Disponibilidad requerida:' + obj.trabajos[x].disponibilidadRequerida + '</p></b></div>' +

        '<div class="alert alert-success" role="alert">' +

        '<b><p>Idiomas requeridos:' + obj.trabajos[x].idiomasRequeridos + '</p></b></div>';

    if (cumpleEdad == true) {
        txt += '<div class="alert alert-success" role="alert">';
    } else {
        txt += '<div class="alert alert-danger" role="alert">';
    }
    txt +=

        '<p>Rango de edad:' + obj.trabajos[x].edadRequerida + '</p></b></div>';

    if (cumpleSalario == true) {
        txt += '<div class="alert alert-success" role="alert">';
    } else {
        txt += '<div class="alert alert-danger" role="alert">';
    }
    txt +=

        '<p> Salario ofrecido:' + obj.trabajos[x].salarioOfrecido + '</p></b></div>' +

        '<div class="panel panel-default"><div class="panel-heading">' +
        '<h3 class="panel-title">' + obj.trabajos[x].Descripcion + '</h3>' +
        '</div><div class="panel-body">' + obj.trabajos[x].Descripcion + '</div></div><button type="button" class="btn btn-primary">Postular</button></div>' +
        ' </div></div></div></div>';


    document.getElementById("tabla").innerHTML = txt;
    console.log("llenado!");
}

function crearDatoBusqueda() {
    var titulo = document.getElementById('tituloInput').value;
    var categoria = document.getElementById('categoriaInput').value;
    var srcImagen = document.getElementById('srcImagenInput').value;

    var gradoEducacionObtenido = document.getElementById('gradoEducacionObtenidoInput').value;

    var disponibilidadActual = document.getElementById('disponibilidadActualInput').value;


    var idiomasConocidos = document.getElementById('idiomasConocidosInput').value;

    var edadActual = document.getElementById('edadActualInput').value;

    var salarioSolicitado = document.getElementById('salarioSolicitadoInput').value;
    var Descripcion = document.getElementById('DescripcionInput').value;
    var jsonSimple = "";
    if (jsonPuro != "")
        jsonSimple += ","
    jsonSimple += '{"titulo":"' + titulo + '", "categoria":"' + categoria + '", "srcImagen":"' + srcImagen + '","gradoEducacionObtenido":"' + gradoEducacionObtenido + '","disponibilidadActual":"' + disponibilidadActual + '","idiomasConocidos":"' + idiomasConocidos + '","edadActual":"' + edadActual + '","salarioSolicitado":"' + salarioSolicitado + '","Descripcion":"' + Descripcion + '"}'
    console.log("Objeto: ", jsonSimple);
    jsonPuro += jsonSimple;
    console.log("Objetos: ", jsonPuro);
    console.log("Con headers ", '{"trabajos":[' + jsonPuro + ']}');
    text = '{"trabajos":[' + jsonPuro + ']}';
}

function llenadoDeDatosBusqueda() {

    var txt;
    var x = 0;
    obj = JSON.parse(text);
    var cumpleSalario;
    var cumpleEdad;
    var cumpleDisponibilidad;

    cumpleDisponibilidad = obj.trabajos[x].disponibilidadActual >= obj.trabajos[x].disponibilidadRequerida;
    cumpleEdad = obj.trabajos[x].edadRequerida <= obj.trabajos[x].edadActual;
    cumpleSalario = obj.trabajos[x].salarioSolicitado <= obj.trabajos[x].salarioOfrecido;

    txt += '<div class="col-md-4"><div class="panel panel-default"><div class="panel-body"><div class="page-header">' +
        "<h1>" + obj.trabajos[x].titulo + "<small>" + obj.trabajos[x].categoria + '</small> <span class="label label-success">Nuevo perfil</span></h1>' +
        '<a href="#" class="thumbnail">' +
        '<img height="150px" src="' + obj.trabajos[x].srcImagen + '"' +
        'alt="Hombre feliz limpiando baños"></a>' +


        '</button><h1>Oferta laboral</h1>' +
        '<div class="alert alert-danger" role="alert">' +
        'Grado de educacion:' + obj.trabajos[x].gradoEducacionObtenido + '<b>' +

        '<p> Disponibilidad actual:' + obj.trabajos[x].disponibilidadActual + '</p><b>' +


        '<div class="alert alert-success" role="alert">' +
        '<p>Idiomas conocidos:' + obj.trabajos[x].idiomasConocidos + ' </p>' +



        '<p> Edad actual:' + obj.trabajos[x].edadActual + '</p><b>' +



        '<p>Salario esperado:' + obj.trabajos[x].salarioSolicitado + '</p><b>' +


        '<div class="panel panel-default"><div class="panel-heading">' +
        '<h3 class="panel-title">' + obj.trabajos[x].Descripcion + '</h3>' +
        '</div><div class="panel-body">' + obj.trabajos[x].Descripcion + '</div></div><button type="button" class="btn btn-primary">Postular</button></div>' +
        ' </div></div></div></div>';

    document.getElementById("tabla").innerHTML = txt;
    console.log("llenado!");
}



$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);

$("#slideshow2 > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow2 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow2');
}, 3000);
$("#slideshow3 > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow3 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow3');
}, 3000);

var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });