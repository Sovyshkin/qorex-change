<script setup></script>
<template>
  <section class="user-agreement" v-motion-fade-visible>
    <div class="agreement-container">
      <header class="agreement-header" v-motion-slide-visible-top>
        <h1>Пользователское соглашение</h1>
        <p class="agreement-subtitle">
          Настоящее Пользовательское соглашение регулирует отношения между сервисом Qorex Fast Change и любым физическим лицом, пользующимся Сервисом.
        </p>
        <div class="important-note">
          <span class="note-icon">📄</span>
          <p>Используя Сервис, Пользователь подтверждает, что принимает условия данного Соглашения в полном объёме.</p>
        </div>
      </header>

      <div class="agreement-content">
        <!-- Общие положения -->
        <article class="agreement-section" v-motion-slide-visible-left :delay="100">
          <h2>1. Общие положения</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">1.1</span>
              <p>Сервис предоставляет услуги по обмену фиатных средств на цифровые активы (USDT TRC20) при предъявлении Пользователем корректных данных и осуществлении оплаты через сторонние платёжные шлюзы.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">1.2</span>
              <p>Сервис не является банком, кредитной организацией, оператором электронных денег, инвестиционной площадкой или хранителем цифровых активов.</p>
            </div>
            <div class="subsection important">
              <span class="subsection-number">1.3</span>
              <p>Администрация вправе в одностороннем порядке изменять функционал, курс, комиссию и условия использования Сервиса. <strong>Актуальная версия Соглашения всегда доступна на сайте.</strong></p>
            </div>
            <div class="subsection">
              <span class="subsection-number">1.4</span>
              <p>Продолжая использование Сервиса, Пользователь считается принявшим любые изменения в Соглашении.</p>
            </div>
          </div>
        </article>

        <!-- Предмет соглашения -->
        <article class="agreement-section" v-motion-slide-visible-right :delay="200">
          <h2>2. Предмет соглашения</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">2.1</span>
              <p>Сервис предоставляет Пользователю доступ к интерфейсу, позволяющему совершать операции по обмену фиатных средств на цифровые активы.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.2</span>
              <p>Все операции выполняются в соответствии с параметрами, указанными Пользователем.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.3</span>
              <p>Сервис обеспечивает передачу цифровых активов исключительно на адрес USDT TRC20, указанный Пользователем.</p>
            </div>
          </div>
        </article>

        <!-- Права и обязанности Пользователя -->
        <article class="agreement-section highlighted" v-motion-slide-visible-left :delay="300">
          <h2>3. Права и обязанности Пользователя</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">3.1</span>
              <p>Пользователь обязан перед использованием Сервиса ознакомиться с данным Соглашением, Правилами обмена, Политикой конфиденциальности и актуальной информацией на сайте.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">3.2</span>
              <p>Пользователь гарантирует, что:</p>
              <ul class="responsibility-list">
                <li>указывает корректный адрес кошелька</li>
                <li>использует средства, полученные законным путём</li>
                <li>совершает операции от собственного имени</li>
                <li>не использует Сервис для противоправных действий</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">3.3</span>
              <p>Пользователь обязуется:</p>
              <ul class="responsibility-list">
                <li>соблюдать минимальные и максимальные лимиты</li>
                <li>не предоставлять ложные данные</li>
                <li>не пытаться вмешиваться в работу сайта, автоматизировать запросы или обходить защитные механизмы</li>
              </ul>
            </div>
            <div class="subsection critical">
              <span class="subsection-number">3.4</span>
              <p><strong>Пользователь несёт полную ответственность за корректность вводимых данных. В случае ошибочного указания адреса кошелька сервис не несёт ответственности и не осуществляет возврат активов.</strong></p>
            </div>
          </div>
        </article>

        <!-- Права и обязанности Администрации -->
        <article class="agreement-section" v-motion-slide-visible-right :delay="400">
          <h2>4. Права и обязанности Администрации</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">4.1</span>
              <p>Администрация обязуется предоставить Пользователю точную информацию о курсе, комиссии и итоговой сумме до момента оплаты.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">4.2</span>
              <p>Администрация вправе:</p>
              <ul class="responsibility-list">
                <li>приостанавливать операции при подозрении на мошенничество или AML-риски</li>
                <li>запрашивать дополнительные данные для подтверждения личности</li>
                <li>приостанавливать работу Сервиса для технического обслуживания</li>
                <li>отказывать в обслуживании Пользователям, нарушающим условия Соглашения</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">4.3</span>
              <p>Администрация обязуется выполнять обмен только после получения подтверждения платежа от платёжного шлюза.</p>
            </div>
          </div>
        </article>

        <!-- Процедура обмена -->
        <article class="agreement-section" v-motion-slide-visible-left :delay="500">
          <h2>5. Процедура обмена</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">5.1</span>
              <p>Обмен осуществляется в следующем порядке:</p>
              <ul class="responsibility-list">
                <li>Пользователь указывает адрес кошелька и сумму</li>
                <li>Сервис показывает курс и комиссию</li>
                <li>Пользователь переходит к оплате</li>
                <li>после подтверждения оплаты Сервис отправляет цифровые активы</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">5.2</span>
              <p>Среднее время обработки зависит от:</p>
              <ul class="responsibility-list">
                <li>работы платёжных шлюзов</li>
                <li>загруженности блокчейна</li>
                <li>корректности данных, указанных Пользователем</li>
              </ul>
            </div>
            <div class="subsection important">
              <span class="subsection-number">5.3</span>
              <p>Минимальная сумма обмена — <strong>500 ₽</strong>, максимальная сумма одной операции — <strong>513 000 ₽</strong>.</p>
            </div>
          </div>
        </article>

        <!-- Остальные разделы в компактном виде -->
        <div class="compact-sections">
          <article class="agreement-section compact" v-motion-slide-visible-right :delay="600">
            <h2>6. Комиссии и курсы</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">6.1</span>
                <p>Курс и комиссия фиксируются на момент создания заявки и отображаются Пользователю.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">6.2</span>
                <p>Комиссия сети TRC20 может удерживаться автоматически сетью блокчейна.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">6.3</span>
                <p>Пользователь соглашается, что итоговая сумма цифровых активов может незначительно отличаться от расчётной в результате fees сети.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact warning" v-motion-slide-visible-left :delay="700">
            <h2>7. Ответственность сторон</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">7.1</span>
                <p>Сервис несёт ответственность исключительно за отправку цифровых активов на корректный адрес, указанный Пользователем.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">7.2</span>
                <p>Сервис не несёт ответственности за:</p>
                <ul class="responsibility-list">
                  <li>ошибки Пользователя при указании адреса</li>
                  <li>задержки платёжных шлюзов или банков</li>
                  <li>сбои сети Интернет, устройств или ПО Пользователя</li>
                  <li>задержки в сети блокчейна</li>
                  <li>действия третьих лиц</li>
                </ul>
              </div>
              <div class="subsection">
                <span class="subsection-number">7.3</span>
                <p>В случае если ошибка обмена вызвана техническим сбоем Сервиса, Администрация обязуется либо выполнить обмен, либо вернуть средства при условии, что активы ещё не были отправлены.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact" v-motion-slide-visible-right :delay="800">
            <h2>8. Возвраты, отмены и споры</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">8.1</span>
                <p>Отмена заявки возможна только до момента оплаты.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">8.2</span>
                <p>После оплаты возврат возможен, только если цифровые активы ещё не отправлены.</p>
              </div>
              <div class="subsection critical">
                <span class="subsection-number">8.3</span>
                <p><strong>Если транзакция была отправлена на указанный Пользователем адрес, возврат невозможен.</strong></p>
              </div>
              <div class="subsection">
                <span class="subsection-number">8.4</span>
                <p>Споры решаются путём переговоров. В случае невозможности урегулирования — в соответствии с применимым законодательством.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact" v-motion-slide-visible-left :delay="900">
            <h2>9. AML/KYC и безопасность</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">9.1</span>
                <p>Сервис вправе запросить документы, подтверждающие личность или происхождение средств.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">9.2</span>
                <p>При выявлении подозрительной активности Сервис может заблокировать операцию до выяснения обстоятельств.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">9.3</span>
                <p>Пользователь соглашается соблюдать требования законодательства в сфере противодействия отмыванию средств.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact" v-motion-slide-visible-right :delay="1000">
            <h2>10. Персональные данные</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">10.1</span>
                <p>Обработка персональных данных осуществляется согласно Политике конфиденциальности Сервиса.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">10.2</span>
                <p>Пользователь даёт добровольное согласие на обработку данных, необходимых для исполнения заявки.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact" v-motion-slide-visible-left :delay="1100">
            <h2>11. Интеллектуальная собственность</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">11.1</span>
                <p>Все материалы сайта, включая текст, дизайн, элементы интерфейса и программный код, являются собственностью Администрации.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">11.2</span>
                <p>Пользователь не имеет права копировать, распространять или использовать материалы сайта без согласия Администрации.</p>
              </div>
            </div>
          </article>

          <article class="agreement-section compact final" v-motion-slide-visible-right :delay="1200">
            <h2>12. Заключительные положения</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">12.1</span>
                <p>Сервис может обновлять Соглашение без предварительного уведомления. Новая версия вступает в силу с момента публикации.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">12.2</span>
                <p>Недействительность части документа не влияет на юридическую силу остальных положений.</p>
              </div>
              <div class="subsection important">
                <span class="subsection-number">12.3</span>
                <p><strong>Использование Сервиса означает безусловное согласие Пользователя с данным Соглашением.</strong></p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.user-agreement {
  width: 100%;
  padding: 120px 20px 60px;
  background: linear-gradient(135deg, #0A100B 0%, #1a1a1a 50%, #0A100B 100%);
  min-height: 100vh;
}

.agreement-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Заголовок */
.agreement-header {
  text-align: center;
  margin-bottom: 40px;
}

.agreement-header h1 {
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #BEF80D, #7ED321);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.agreement-subtitle {
  color: #9AA0A0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
}

.important-note {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(190, 248, 13, 0.1);
  border: 1px solid rgba(190, 248, 13, 0.3);
  border-radius: 16px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.note-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.important-note p {
  color: #fff;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

/* Основной контент */
.agreement-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.agreement-section {
  background: rgba(10, 16, 11, 0.8);
  border: 1px solid rgba(43, 80, 0, 0.5);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.agreement-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #BEF80D, #7ED321);
  opacity: 0.7;
}

.agreement-section:hover {
  border-color: rgba(190, 248, 13, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(190, 248, 13, 0.1);
}

.agreement-section h2 {
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Специальные стили для разделов */
.agreement-section.highlighted {
  background: linear-gradient(135deg, rgba(190, 248, 13, 0.05) 0%, rgba(10, 16, 11, 0.8) 100%);
  border-color: rgba(190, 248, 13, 0.4);
}

.agreement-section.warning {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(10, 16, 11, 0.8) 100%);
  border-color: rgba(255, 107, 107, 0.3);
}

.agreement-section.warning::before {
  background: linear-gradient(90deg, #ff6b6b, #ee5a5a);
}

/* Подразделы */
.subsections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.subsection {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border-left: 3px solid rgba(190, 248, 13, 0.3);
  transition: all 0.3s ease;
}

.subsection:hover {
  background: rgba(0, 0, 0, 0.4);
  border-left-color: #BEF80D;
}

.subsection-number {
  background: #BEF80D;
  color: #000;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  flex-shrink: 0;
  min-width: 32px;
  text-align: center;
}

.subsection p {
  color: #fff;
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
}

.subsection strong {
  color: #BEF80D;
}

/* Специальные подразделы */
.subsection.important {
  background: rgba(190, 248, 13, 0.1);
  border-left-color: #BEF80D;
}

.subsection.critical {
  background: rgba(255, 107, 107, 0.1);
  border-left-color: #ff6b6b;
}

.subsection.critical .subsection-number {
  background: #ff6b6b;
  color: #fff;
}

/* Списки */
.responsibility-list {
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
}

.responsibility-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #9AA0A0;
}

.responsibility-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #BEF80D;
  font-weight: bold;
}

/* Компактные разделы */
.compact-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
}

.agreement-section.compact {
  padding: 30px;
}

.agreement-section.compact h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.agreement-section.final {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(190, 248, 13, 0.08) 0%, rgba(10, 16, 11, 0.9) 100%);
  border: 2px solid rgba(190, 248, 13, 0.4);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .agreement-container {
    padding: 0 20px;
  }
  
  .agreement-section {
    padding: 30px 20px;
  }
  
  .compact-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .user-agreement {
    padding: 100px 15px 40px;
  }
  
  .agreement-header h1 {
    font-size: 36px;
  }
  
  .agreement-subtitle {
    font-size: 16px;
  }
  
  .important-note {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }
  
  .agreement-section {
    padding: 20px 15px;
  }
  
  .agreement-section h2 {
    font-size: 24px;
  }
  
  .subsection {
    flex-direction: column;
    gap: 12px;
  }
  
  .subsection-number {
    align-self: flex-start;
  }
  
  .compact-sections {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .user-agreement {
    padding: 90px 10px 30px;
  }
  
  .agreement-header h1 {
    font-size: 28px;
  }
  
  .agreement-section {
    padding: 16px 12px;
  }
  
  .agreement-section h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .subsection {
    padding: 12px;
  }
  
  .subsection p {
    font-size: 14px;
  }
}
</style>