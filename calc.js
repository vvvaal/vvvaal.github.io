document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('orderForm');
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const resultDisplay = document.getElementById('resultDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем перезагрузку страницы

        // Очищаем предыдущий результат
        resultDisplay.innerHTML = '';
        resultDisplay.className = 'result-box';

        const price = parseInt(productSelect.value, 10);
        const quantityString = quantityInput.value.trim();

        // 1. Проверка: выбран ли товар
        if (isNaN(price)) {
            resultDisplay.textContent = 'Пожалуйста, выберите товар из списка.';
            resultDisplay.classList.add('error');
            return;
        }

        // 2. Проверка корректности ввода регулярным выражением (только цифры)
        const numberRegex = /^\d{1,6}$/;

        if (!numberRegex.test(quantityString)) {
            resultDisplay.textContent = 'Ошибка: введите корректное количество (целое число от 1 до 999999).';
            resultDisplay.classList.add('error');
            return;
        }

        const quantity = parseInt(quantityString, 10);

        if (quantity <= 0) {
            resultDisplay.textContent = 'Ошибка: количество должно быть больше нуля.';
            resultDisplay.classList.add('error');
            return;
        }

        // 3. Расчет стоимости
        const totalCost = price * quantity;

        // Вывод результата (с разделением тысяч)
        resultDisplay.textContent = `Итого к оплате: ${totalCost.toLocaleString('ru-RU')} ₽`;
        resultDisplay.classList.add('success');
    });
});
