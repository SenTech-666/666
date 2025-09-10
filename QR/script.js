// Получаем элементы DOM
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');

const generateQRcode = () => {
    // Получаем и очищаем введенный текст
    const text = document.getElementById('text-url').value.trim();
    
    if (!text) {
        alert('Введите URL или текст');
        return;
    }

    // Получаем размер QR-кода
    const size = parseInt(document.querySelector("input[name='qr-size']:checked").value) || 200;

    // Получаем canvas и контекст
    const canvas = document.getElementById('qrcode');
    const ctx = canvas.getContext('2d');
    
    // Исправляем опечатки в свойствах width и height
    canvas.width = size;
    canvas.height = size;

    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Создаем QR-код
    const qr = new QRious({
        element: canvas,  // Добавляем элемент canvas
        level: 'H',
        size: size,
        value: text
    });

    // Добавляем возможность скачивания
    downloadBtn.href = qr.toDataURL('image/png');
    downloadBtn.download = 'qrcode.png';
};

// Добавляем обработчик события
generateBtn.addEventListener('click', generateQRcode);