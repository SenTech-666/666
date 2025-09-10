const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');


const generateQRcode = () => {
    const text = document.getElementById('text-url').value.trim
    ();
    if(!text) {
        alert('Введите URL или текст');
        return;
    }

    const size = parseInt(document.querySelector("input [name='qr-size']:checed").value) || 200;

    const canvas = document.getElementById('qrcode');
    const ctx = canvas.getContext('2d');
    
    canvas.wigth = size;
    canvas.heitght = size;

ctx.clearRect(0,0,canvas.wigth,canvas.heitght);
 

const qr = new QRious({
  level: 'H',
  size: size,
  value: text
});

const img = new Image();
img.src = qr.toDataURL();

img.onload = () => {
    ctx.drawImage(img,0,0,size,size)
};

}


generateBtn.addEventListener('click',generateBtn);