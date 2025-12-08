<script setup></script>
<template>
    <div class="wrap" v-motion-fade-visible>
        <div class="left" v-motion-slide-visible-left :delay="200">
            <div class="rub" v-motion-slide-visible-top :delay="800">
                <h3>Отправляете</h3>
                <div class="group-input">
                    <input type="text" placeholder="50 RUB">
                    <span>RUB</span>
                    <img src="../assets/rub.svg" alt="rub">
                </div>
                <span>мин. 500 RUB</span>
                <span>макс. 513 000 RUB</span>
            </div>
            <div class="wrap-img" v-motion-fade-visible :delay="600">
                <img src="../assets/change-usdt-rub.svg" alt="change_rub_usdt">
            </div>
    
            <div class="usdt" v-motion-slide-visible-bottom :delay="400">
                <h3>Получаете</h3>
                <div class="group-input">
                    <input type="text" placeholder="50 USDT">
                    <span>USDT</span>
                    <img src="../assets/usdt.svg" alt="usdt">
                </div>
                <span>мин. 5 USDT</span>
                <span>макс. 5 000 USDT</span>
            </div>
        </div>
        <form class="right" v-motion-slide-visible-right :delay="200" role="form" aria-labelledby="exchange-title">
            <h3 id="exchange-title">Персональные данные</h3>
            <span class="exchange-rate" style="color: white;">Курс: 1 USDT = 83.53 RUB</span>
            <span class="exchange-subtitle">Курс обновляется каждые несколько секунд.</span>
            <input type="text" placeholder="Ваш телеграмм" aria-label="Ваш телеграмм">
            <input type="email" placeholder="Ваш email" aria-label="Ваш email">
            <h4>Реквизиты SBP RUB</h4>
            <input type="text" placeholder="Номер телефона СБП">
            <h4>Реквизиты кошелька</h4>
            <select name="" id="">
                <option value="" disabled selected>Сеть кошелька</option>
                <option value="trc20">TRC20</option>
                <option value="erc20">ERC20</option>
                <option value="ton">TON</option>
            </select>
            <input type="text" placeholder="Реквизиты кошелька Tether">
            <div class="group-checkbox">
                <input type="checkbox" id="agreement2">
                <label for="agreement2">
                  Я согласен с 
                  <a href="/user-agreement" class="agreement-link" target="_blank">Пользовательским соглашением</a>
                </label>
            </div>
            <div class="group-checkbox">
                <input type="checkbox" id="privacy">
                <label for="privacy">
                  Я согласен с 
                  <a href="/privacy-policy" class="agreement-link" target="_blank">Политикой конфиденциальности</a>
                </label>
            </div>
            <button type="submit" class="btn">Создать заявку</button>
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