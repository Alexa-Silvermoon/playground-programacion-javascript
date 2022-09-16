const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = document.body.offsetWidth;

const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = '#000'; //color fondo negro al iniciar #000
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const posicion_y = Array(cols).fill(0);

function matrix (){
    ctx.fillStyle = '#0001'; //color fondo negro en continuacion #0001
    ctx.fillRect(0, 0 ,w , h); //saturacion de caractres en pantalla y cuanto se mantienen en pantalla

    ctx.fillStyle = '#0f0'; //color de las letras #0f0
    ctx.font = '15pt monospace'; //tamaño de las letras

    posicion_y.forEach((y, ind) => {
        const text = String.fromCharCode(
            Math.random() * 128); //Caracteres ASCII imprimibles, del 32 al 128
            const x = ind * 20; //distancimiento entre columnas
            ctx.fillText(text, x, y);

            if (y > 100
                + Math.random() * 10000){ //afecta lineas horizontales desapareciendo hacia abajo
                    posicion_y[ind] = 0; //punto de origen de la cascada de letras
                }else{
                    posicion_y[ind] = y + 20;
                }
    });
}
setInterval(matrix, 50);
