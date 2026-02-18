<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Данные формы
const rubAmount = ref('')
const usdtAmount = ref('')
const tgName = ref('')
const email = ref('')
const phoneNum = ref('')
const network = ref('')
const wallet = ref('')
const agreement = ref(false)
const privacy = ref(false)
const geo = ref('')
const exchangeRate = ref(83.53)
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
let priceInterval = null

// Получение курса USDT
const fetchPrice = async () => {
  try {
    const response = await fetch('https://back.qorexchange.com/data_price', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      if (data.price) {
        exchangeRate.value = parseFloat(data.price)
      }
    }
  } catch (error) {
    console.error('Ошибка получения курса:', error)
  }
}

// Получение геоданных при монтировании компонента
onMounted(async () => {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    geo.value = `${data.country_name}, ${data.city}, IP: ${data.ip}`
  } catch (error) {
    console.error('Ошибка получения геоданных:', error)
    geo.value = 'Unknown'
  }
  
  // Получаем курс сразу при загрузке
  await fetchPrice()
  
  // Обновляем курс каждые 15 секунд
  priceInterval = setInterval(fetchPrice, 15000)
})

// Очистка интервала при размонтировании
onUnmounted(() => {
  if (priceInterval) {
    clearInterval(priceInterval)
  }
})

// Автоматический пересчет USDT при изменении RUB
const updateUsdt = () => {
  const rub = parseFloat(rubAmount.value)
  if (!isNaN(rub) && rub > 0) {
    usdtAmount.value = (rub / exchangeRate.value).toFixed(2)
  } else {
    usdtAmount.value = ''
  }
}

// Автоматический пересчет RUB при изменении USDT
const updateRub = () => {
  const usdt = parseFloat(usdtAmount.value)
  if (!isNaN(usdt) && usdt > 0) {
    rubAmount.value = (usdt * exchangeRate.value).toFixed(2)
  } else {
    rubAmount.value = ''
  }
}

// Вычисляемые значения для лимитов RUB
const minRub = computed(() => {
  return (5 * exchangeRate.value).toFixed(0)
})

const maxRub = computed(() => {
  return (5000 * exchangeRate.value).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})

// Валидация формы
const validateForm = () => {
  if (!tgName.value.trim()) {
    errorMessage.value = 'Укажите ваш телеграмм'
    return false
  }
  
  if (!email.value.trim() || !email.value.includes('@')) {
    errorMessage.value = 'Укажите корректный email'
    return false
  }
  
  if (!phoneNum.value.trim()) {
    errorMessage.value = 'Укажите номер телефона СБП'
    return false
  }
  
  if (!usdtAmount.value || parseFloat(usdtAmount.value) < 5) {
    errorMessage.value = 'Минимальная сумма обмена - 5 USDT'
    return false
  }
  
  if (!usdtAmount.value || parseFloat(usdtAmount.value) > 5000) {
    errorMessage.value = 'Максимальная сумма обмена - 5000 USDT'
    return false
  }
  
  if (!network.value) {
    errorMessage.value = 'Выберите сеть кошелька'
    return false
  }
  
  if (!wallet.value.trim()) {
    errorMessage.value = 'Укажите реквизиты кошелька'
    return false
  }
  
  if (!agreement.value) {
    errorMessage.value = 'Необходимо согласиться с пользовательским соглашением'
    return false
  }
  
  if (!privacy.value) {
    errorMessage.value = 'Необходимо согласиться с политикой конфиденциальности'
    return false
  }
  
  errorMessage.value = ''
  return true
}

// Отправка формы
const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    // Формируем query параметры
    const params = new URLSearchParams({
      tg_name: tgName.value,
      email: email.value,
      phone_num: phoneNum.value,
      count_usdt: usdtAmount.value,
      network: network.value,
      wallet: wallet.value,
      geo: geo.value
    })
    
    const response = await fetch(`https://back.qorexchange.com/data_buy?${params.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!response.ok) {
      throw new Error('Ошибка при создании заявки')
    }
    
    const data = await response.json()
    successMessage.value = 'Заявка успешно создана! Мы свяжемся с вами в ближайшее время.'
    
    // Очистка формы после успешной отправки
    rubAmount.value = ''
    usdtAmount.value = ''
    tgName.value = ''
    email.value = ''
    phoneNum.value = ''
    network.value = ''
    wallet.value = ''
    agreement.value = false
    privacy.value = false
    
  } catch (error) {
    console.error('Ошибка:', error)
    errorMessage.value = 'Произошла ошибка при создании заявки. Попробуйте еще раз.'
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
    <div class="wrap" v-motion-fade-visible>
        <div class="left" v-motion-slide-visible-left :delay="200">
            <div class="rub" v-motion-slide-visible-top :delay="800">
                <h3>Отправляете</h3>
                <div class="group-input">
                    <input 
                      type="text" 
                      v-model="rubAmount"
                      @input="updateUsdt"
                      :placeholder="minRub + ' RUB'"
                    >
                    <span>RUB</span>
                    <img src="../assets/rub.svg" alt="rub">
                </div>
                <span>мин. {{ minRub }} RUB</span>
                <span>макс. {{ maxRub }} RUB</span>
            </div>
            <div class="wrap-img" v-motion-fade-visible :delay="600">
                <img src="../assets/change-usdt-rub.svg" alt="change_rub_usdt">
            </div>
    
            <div class="usdt" v-motion-slide-visible-bottom :delay="400">
                <h3>Получаете</h3>
                <div class="group-input">
                    <input 
                      type="text" 
                      v-model="usdtAmount"
                      @input="updateRub"
                      placeholder="5 USDT"
                    >
                    <span>USDT</span>
                    <img src="../assets/usdt.svg" alt="usdt">
                </div>
                <span>мин. 5 USDT</span>
                <span>макс. 5 000 USDT</span>
            </div>
        </div>
        <form 
          class="right" 
          @submit="handleSubmit"
          v-motion-slide-visible-right 
          :delay="200" 
          role="form" 
          aria-labelledby="exchange-title"
        >
            <h3 id="exchange-title">Персональные данные</h3>
            <span class="exchange-rate" style="color: white;">Курс: 1 USDT = {{ exchangeRate }} RUB</span>
            <span class="exchange-subtitle">Курс обновляется каждые несколько секунд.</span>
            
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            
            <input 
              type="text" 
              v-model="tgName"
              placeholder="Ваш телеграмм (@username)" 
              aria-label="Ваш телеграмм"
              required
            >
            <input 
              type="email" 
              v-model="email"
              placeholder="Ваш email" 
              aria-label="Ваш email"
              required
            >
            <h4>Реквизиты SBP RUB</h4>
            <input 
              type="text" 
              v-model="phoneNum"
              placeholder="Номер телефона СБП"
              required
            >
            <h4>Реквизиты кошелька</h4>
            <select v-model="network" required>
                <option value="" disabled selected>Сеть кошелька</option>
                <option value="TRC20">TRC20</option>
                <option value="ERC20">ERC20</option>
                <option value="TON">TON</option>
            </select>
            <input 
              type="text" 
              v-model="wallet"
              placeholder="Реквизиты кошелька Tether"
              required
            >
            <div class="group-checkbox">
                <input type="checkbox" id="agreement2" v-model="agreement" required>
                <label for="agreement2">
                  Я согласен с 
                  <a href="/user-agreement" class="agreement-link" target="_blank">Пользовательским соглашением</a>
                </label>
            </div>
            <div class="group-checkbox">
                <input type="checkbox" id="privacy" v-model="privacy" required>
                <label for="privacy">
                  Я согласен с 
                  <a href="/privacy-policy" class="agreement-link" target="_blank">Политикой конфиденциальности</a>
                </label>
            </div>
            <button type="submit" class="btn" :disabled="isLoading">
              {{ isLoading ? 'Отправка...' : 'Создать заявку' }}
            </button>
        </form>
    </div>
</template>
<style scoped>
.wrap {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
    padding: 20px 40px;
    box-sizing: border-box;
    width: 100%;
}

.left, .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-width: 0;
    box-sizing: border-box;
}

.left {
    justify-content: space-between;
}

.right {
    border: 1px solid #2B5000;
    border-radius: 16px;
    background-color: #0A100B;
    padding: 20px;
}

.usdt, .rub {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #2B5000;
    border-radius: 16px;
    background-color: #0A100B;
    padding: 20px;
}

.wrap-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 10px;
    background-color: #BEF80D;
    border-radius: 100%;
}

.group-input {
    position: relative;
    width: 100%;
}

.group-input input {
    width: 100%;
    box-sizing: border-box;
    background-color: #010B03;
    padding: 16px 80px 16px 20px;
    border: 1px solid #010B03;
    border-radius: 100px;
    transition: all 500ms ease;
    outline: none;
}

.group-input span {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    font-size: 16px;
    color: #BEF80D;
    pointer-events: none;
}

.group-input img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none;
}

h3 {
    color: #BEF80D;
    font-weight: 600;
    font-size: 32px;
}

h4 {
    color: white;
    font-weight: 500;
    font-size: 20px;
}

span {
    color: #9AA0A0;
    font-size: 16px;
}

input, select {
    width: 100%;
    box-sizing: border-box;
    background-color: #010B03;
    padding: 16px 20px;
    border: 1px solid #010B03;
    border-radius: 100px;
    transition: all 500ms ease;
    outline: none;
}

input:hover, input:focus, select:hover, select:focus {
    border: 1px solid #BEF80D;
}

.group-input input:hover, 
.group-input input:focus {
    border: 1px solid #BEF80D;
}

.group-checkbox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
}

/* Скрываем стандартный checkbox */
.group-checkbox input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
}

/* Создаем кастомный checkbox */
.group-checkbox input[type="checkbox"] + label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: transparent;
    border: 2px solid #666;
    border-radius: 3px;
    position: relative;
    vertical-align: top;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

/* Состояние hover */
.group-checkbox input[type="checkbox"]:not(:checked) + label:hover::before {
    border-color: #BEF80D;
}

/* Состояние checked */
.group-checkbox input[type="checkbox"]:checked + label::before {
    background-color: #BEF80D;
    border-color: #BEF80D;
}

/* Галочка */
.group-checkbox input[type="checkbox"]:checked + label::after {
    content: '✓';
    position: absolute;
    left: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #000;
    line-height: 20px;
    text-align: center;
}

.group-checkbox label {
    font-size: 14px;
    color: #ccc;
    cursor: pointer;
    line-height: 1.4;
    flex: 1;
    position: relative;
    display: flex;
    align-items: flex-start;
    user-select: none;
}

.agreement-link {
    color: #BEF80D;
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 0 4px;
}

.agreement-link:hover {
    color: #7ED321;
    text-decoration: underline;
}

.btn {
    background-color: #BEF80D;
    padding: 16px 28px;
    border-radius: 100px;
    color: #2B5000;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
}

.btn:hover:not(:disabled) {
    background-color: #A8D90F;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(190, 248, 13, 0.3);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.error-message {
    background-color: rgba(255, 59, 48, 0.1);
    border: 1px solid rgba(255, 59, 48, 0.3);
    border-radius: 12px;
    padding: 12px 16px;
    color: #FF3B30;
    font-size: 14px;
    margin: 10px 0;
}

.success-message {
    background-color: rgba(52, 199, 89, 0.1);
    border: 1px solid rgba(52, 199, 89, 0.3);
    border-radius: 12px;
    padding: 12px 16px;
    color: #34C759;
    font-size: 14px;
    margin: 10px 0;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .wrap {
    padding: 20px;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .wrap {
    flex-direction: column;
    padding: 20px;
    gap: 40px;
    align-items: center;
  }
  
  .left, .right {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
  }
  
  .left {
    order: -1; /* Отправляете/Получаете вверху на мобильных */
  }
  
  .right {
    padding: 20px;
  }
  
  .usdt, .rub {
    margin: 0;
    width: 100%;
  }
  
  .wrap-img {
    display: none; /* Скрыть стрелку на мобильных */
  }
}

@media (max-width: 480px) {
  .wrap {
    padding: 15px 10px;
    align-items: center;
  }
  
  .left {
    padding: 0 15px;
    width: 100%;
    margin: 0;
    align-items: center;
  }
  
  .right {
    padding: 15px;
    margin: 0;
    width: 100%;
  }
  
  .usdt, .rub {
    padding: 15px;
    margin: 0;
    width: 100%;
  }
  
  .right h3 {
    font-size: 16px;
  }
  
  .right h4 {
    font-size: 14px;
  }
  
  .right input, .right select {
    padding: 12px;
    font-size: 14px;
  }
  
  .btn {
    padding: 14px;
    font-size: 14px;
  }
  
  .group-input input {
    font-size: 14px;
  }
  
  .group-checkbox label {
    font-size: 12px;
  }
}
</style>