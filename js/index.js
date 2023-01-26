
/* Cambiar el color de fondo */
document.getElementById('informacion').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

/* Cambiar el color de fondo */
document.getElementById('estudios').addEventListener('click', function() {
    document.body.style.backgroundColor = 'salmon';
});

/* Retornar al color de fondo por default */
document.getElementById('header').onclick = function() {
    document.body.style.backgroundColor = 'white';
};

/* Alert con datos del developer */
var presentation = function() {
    alert('Marshall Robertson Web Developer')
};

var skill = document.getElementById('skills');
skill.addEventListener('click', presentation);
