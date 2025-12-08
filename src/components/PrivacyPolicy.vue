<script setup></script>
<template>
  <section class="exchange-rules" v-motion-fade-visible>
    <div class="rules-container">
      <header class="rules-header" v-motion-slide-visible-top>
        <h1>Политика конфиденциальности</h1>
        <p class="rules-subtitle">
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных Пользователей сервиса Qorex Fast Change.
        </p>
        <div class="important-note">
          <span class="note-icon">🔒</span>
          <p>Используя Сервис, Пользователь подтверждает согласие с условиями данной Политики.</p>
        </div>
      </header>

      <div class="rules-content">
        <!-- Общие положения -->
        <article class="rule-section" v-motion-slide-visible-left :delay="100">
          <h2>1. Общие положения</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">1.1</span>
              <p>Сервис обрабатывает персональные данные в соответствии с применимым законодательством.</p>
            </div>
            <div class="subsection important">
              <span class="subsection-number">1.2</span>
              <p><strong>Цель обработки данных</strong> — предоставление услуг по обмену фиатных средств на цифровые активы и выполнение обязательств перед Пользователем.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">1.3</span>
              <p>Настоящая Политика распространяется на всех Пользователей Сервиса.</p>
            </div>
          </div>
        </article>

        <!-- Какие данные мы собираем -->
        <article class="rule-section highlighted" v-motion-slide-visible-right :delay="200">
          <h2>2. Какие данные мы собираем</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">2.1</span>
              <p>Данные, предоставленные Пользователем добровольно:</p>
              <ul class="responsibility-list">
                <li>адрес кошелька USDT TRC20</li>
                <li>контактные данные (email, никнейм в мессенджере и др.)</li>
                <li>сумма обмена и реквизиты платёжной операции</li>
                <li>обращения в службу поддержки</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.2</span>
              <p>Автоматически собираемые данные:</p>
              <ul class="responsibility-list">
                <li>IP-адрес и данные устройства</li>
                <li>cookie-файлы</li>
                <li>сведения о взаимодействии с сайтом</li>
                <li>технические данные о браузере и ОС</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.3</span>
              <p>Данные, полученные от платёжных шлюзов:</p>
              <ul class="responsibility-list">
                <li>статус платежа</li>
                <li>идентификатор транзакции</li>
                <li>подтверждение оплаты</li>
              </ul>
            </div>
          </div>
        </article>

        <!-- Как мы используем данные -->
        <article class="rule-section" v-motion-slide-visible-left :delay="300">
          <h2>3. Как мы используем данные</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">3.1</span>
              <p>Мы используем данные Пользователя для:</p>
              <ul class="responsibility-list">
                <li>обработки заявок на обмен</li>
                <li>отправки цифровых активов на указанный адрес</li>
                <li>проверки корректности операций</li>
                <li>улучшения работы Сервиса</li>
                <li>связи с Пользователем по вопросам поддержки</li>
                <li>обеспечения безопасности и предотвращения мошенничества</li>
                <li>выполнения требований законодательства, включая AML/KYC</li>
              </ul>
            </div>
          </div>
        </article>

        <!-- Передача данных третьим лицам -->
        <article class="rule-section warning" v-motion-slide-visible-right :delay="400">
          <h2>4. Передача данных третьим лицам</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">4.1</span>
              <p>Мы можем передавать данные только в следующих случаях:</p>
              <ul class="responsibility-list">
                <li>Платёжным шлюзам — для подтверждения оплаты</li>
                <li>Техническим подрядчикам — для обеспечения работы сайта (хостинг, аналитика)</li>
                <li>Правоохранительным органам — при наличии законного требования</li>
              </ul>
            </div>
            <div class="subsection critical">
              <span class="subsection-number">4.2</span>
              <p><strong>Мы не продаём, не сдаём и не передаём персональные данные третьим лицам для коммерческих целей.</strong></p>
            </div>
          </div>
        </article>

        <!-- Хранение и защита данных -->
        <article class="rule-section" v-motion-slide-visible-left :delay="500">
          <h2>5. Хранение и защита данных</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">5.1</span>
              <p>Мы принимаем все необходимые организационные и технические меры для защиты данных от:</p>
              <ul class="responsibility-list">
                <li>несанкционированного доступа</li>
                <li>изменения или удаления</li>
                <li>распространения</li>
                <li>технических ошибок и утечек</li>
              </ul>
            </div>
            <div class="subsection important">
              <span class="subsection-number">5.2</span>
              <p><strong>Данные хранятся на защищённых серверах</strong>, доступ к которым имеют только уполномоченные сотрудники.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">5.3</span>
              <p>Срок хранения данных определяется целями обработки и требованиями законодательства.</p>
            </div>
          </div>
        </article>

        <!-- Остальные разделы в компактном виде -->
        <div class="compact-sections">
          <article class="rule-section compact" v-motion-slide-visible-right :delay="600">
            <h2>6. Cookies и аналитика</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">6.1</span>
                <p>Сервис может использовать cookie-файлы для:</p>
                <ul class="responsibility-list">
                  <li>корректной работы сайта</li>
                  <li>настройки интерфейса</li>
                  <li>анализа посещаемости</li>
                </ul>
              </div>
              <div class="subsection">
                <span class="subsection-number">6.2</span>
                <p>Пользователь может отключить cookie в браузере, однако это может ограничить работу отдельных функций.</p>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-left :delay="700">
            <h2>7. Права Пользователя</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">7.1</span>
                <p>Пользователь имеет право:</p>
                <ul class="responsibility-list">
                  <li>получать информацию о своих данных</li>
                  <li>требовать уточнения или исправления данных</li>
                  <li>ограничивать обработку в разрешённых законом случаях</li>
                  <li>отзывать согласие на обработку данных (если это не препятствует выполнению обязательств Сервиса)</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-right :delay="800">
            <h2>8. AML/KYC и проверки безопасности</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">8.1</span>
                <p>В отдельных случаях Сервис может запросить документы для подтверждения личности или происхождения средств.</p>
              </div>
              <div class="subsection important">
                <span class="subsection-number">8.2</span>
                <p><strong>Такие проверки проводятся исключительно в целях соблюдения законодательства о противодействии отмыванию средств.</strong></p>
              </div>
              <div class="subsection">
                <span class="subsection-number">8.3</span>
                <p>Все предоставленные документы защищены и используются только для проверки.</p>
              </div>
            </div>
          </article>

          <article class="rule-section compact warning" v-motion-slide-visible-left :delay="900">
            <h2>9. Ограничение ответственности</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">9.1</span>
                <p>Сервис не несёт ответственности за утечку данных, произошедшую в результате:</p>
                <ul class="responsibility-list">
                  <li>действий третьих лиц, не контролируемых Сервисом</li>
                  <li>технических сбоёв оборудования Пользователя</li>
                  <li>вредоносных программ на устройстве Пользователя</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-right :delay="1000">
            <h2>10. Изменения в Политике</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">10.1</span>
                <p>Сервис вправе обновлять настоящую Политику без предварительного уведомления.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">10.2</span>
                <p>Новая версия вступает в силу с момента публикации на сайте.</p>
              </div>
              <div class="subsection important">
                <span class="subsection-number">10.3</span>
                <p><strong>Продолжение использования Сервиса означает согласие Пользователя с обновлёнными условиями.</strong></p>
              </div>
            </div>
          </article>

          <article class="rule-section compact final" v-motion-slide-visible-left :delay="1100">
            <h2>11. Заключительные положения</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">11.1</span>
                <p>Все материалы сайта, включая текст, дизайн, элементы интерфейса и программный код, являются собственностью Администрации.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">11.2</span>
                <p>Пользователь не имеет права копировать, распространять или использовать материалы сайта без согласия Администрации.</p>
              </div>
              <div class="subsection important">
                <span class="subsection-number">11.3</span>
                <p><strong>Использование Сервиса означает безусловное согласие Пользователя с данной Политикой.</strong></p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.exchange-rules {
  width: 100%;
  padding: 120px 20px 60px;
  background: linear-gradient(135deg, #0A100B 0%, #1a1a1a 50%, #0A100B 100%);
  min-height: 100vh;
}

.rules-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Заголовок */
.rules-header {
  text-align: center;
  margin-bottom: 40px;
}

.rules-header h1 {
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #BEF80D, #7ED321);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rules-subtitle {
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
.rules-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.rule-section {
  background: rgba(10, 16, 11, 0.8);
  border: 1px solid rgba(43, 80, 0, 0.5);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.rule-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #BEF80D, #7ED321);
  opacity: 0.7;
}

.rule-section:hover {
  border-color: rgba(190, 248, 13, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(190, 248, 13, 0.1);
}

.rule-section h2 {
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Специальные стили для разделов */
.rule-section.highlighted {
  background: linear-gradient(135deg, rgba(190, 248, 13, 0.05) 0%, rgba(10, 16, 11, 0.8) 100%);
  border-color: rgba(190, 248, 13, 0.4);
}

.rule-section.warning {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(10, 16, 11, 0.8) 100%);
  border-color: rgba(255, 107, 107, 0.3);
}

.rule-section.warning::before {
  background: linear-gradient(90deg, #ff6b6b, #ee5a5a);
}

/* Термины */
.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.term-item {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(190, 248, 13, 0.2);
  transition: all 0.3s ease;
}

.term-item:hover {
  border-color: rgba(190, 248, 13, 0.5);
  transform: translateY(-2px);
}

.term-item h4 {
  color: #BEF80D;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.term-item p {
  color: #9AA0A0;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
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

/* Ссылки */
.telegram-link {
  color: #BEF80D;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.telegram-link:hover {
  color: #7ED321;
  text-decoration: underline;
}

/* Компактные разделы */
.compact-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
}

.rule-section.compact {
  padding: 30px;
}

.rule-section.compact h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.rule-section.final {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(190, 248, 13, 0.08) 0%, rgba(10, 16, 11, 0.9) 100%);
  border: 2px solid rgba(190, 248, 13, 0.4);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .rules-container {
    padding: 0 20px;
  }
  
  .rule-section {
    padding: 30px 20px;
  }
  
  .terms-grid {
    grid-template-columns: 1fr;
  }
  
  .compact-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .exchange-rules {
    padding: 100px 15px 40px;
  }
  
  .rules-header h1 {
    font-size: 36px;
  }
  
  .rules-subtitle {
    font-size: 16px;
  }
  
  .important-note {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }
  
  .rule-section {
    padding: 20px 15px;
  }
  
  .rule-section h2 {
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
  .exchange-rules {
    padding: 90px 10px 30px;
  }
  
  .rules-header h1 {
    font-size: 28px;
  }
  
  .rule-section {
    padding: 16px 12px;
  }
  
  .rule-section h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .subsection {
    padding: 12px;
  }
  
  .subsection p {
    font-size: 14px;
  }
  
  .term-item {
    padding: 16px;
  }
}</style>