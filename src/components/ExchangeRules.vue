<script setup></script>
<template>
  <section class="exchange-rules" v-motion-fade-visible>
    <div class="rules-container">
      <header class="rules-header" v-motion-slide-visible-top>
        <h1>Правила обмена</h1>
        <p class="rules-subtitle">
          Настоящие Правила обмена регулируют порядок использования сервиса Qorex Fast Change, права и обязанности Пользователя и Администрации Сервиса.
        </p>
        <div class="important-note">
          <span class="note-icon">⚠️</span>
          <p>Используя Сервис, Пользователь подтверждает, что внимательно ознакомился с данным документом и принимает его условия.</p>
        </div>
      </header>

      <div class="rules-content">
        <!-- Термины и определения -->
        <article class="rule-section" v-motion-slide-visible-left :delay="100">
          <h2>1. Термины и определения</h2>
          <div class="terms-grid">
            <div class="term-item">
              <h4>Сервис</h4>
              <p>Qorex Fast Change, онлайн-платформа, предоставляющая услуги по обмену фиатных средств на цифровые активы (USDT TRC20).</p>
            </div>
            <div class="term-item">
              <h4>Пользователь</h4>
              <p>Любое физическое лицо, совершающее обмен через Сервис.</p>
            </div>
            <div class="term-item">
              <h4>Обмен</h4>
              <p>Операция по переводу фиатных средств в цифровые активы согласно условиям Сервиса.</p>
            </div>
            <div class="term-item">
              <h4>Кошелёк Пользователя</h4>
              <p>Адрес USDT TRC20, указанный Пользователем для получения цифровых активов.</p>
            </div>
            <div class="term-item">
              <h4>Платёжный шлюз</h4>
              <p>Сторонняя система, обеспечивающая приём оплаты.</p>
            </div>
          </div>
        </article>

        <!-- Общие положения -->
        <article class="rule-section" v-motion-slide-visible-right :delay="200">
          <h2>2. Общие положения</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">2.1</span>
              <p>Сервис действует в соответствии с действующим законодательством и предоставляет услуги по обмену цифровых активов в пределах своей технической и юридической компетенции.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.2</span>
              <p>Сервис не оказывает услуги хранения цифровых активов, не принимает на хранение фиатные средства и не осуществляет инвестиционную деятельность.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">2.3</span>
              <p>Сервис работает строго в рамках данных Пользователем инструкций: вся ответственность за корректность указанных данных лежит на Пользователе.</p>
            </div>
          </div>
        </article>

        <!-- Условия оказания услуги -->
        <article class="rule-section highlighted" v-motion-slide-visible-left :delay="300">
          <h2>3. Условия оказания услуги</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">3.1</span>
              <p>Для совершения обмена Пользователь обязан указать корректный TRC20-адрес кошелька и точную сумму.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">3.2</span>
              <p>Сервис выполняет обмен только после получения подтверждения платежа от платёжного шлюза.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">3.3</span>
              <p>Время выполнения обмена зависит от скорости обработки платёжным шлюзом и нагрузки сети блокчейна.</p>
            </div>
            <div class="subsection important">
              <span class="subsection-number">3.4</span>
              <p>Минимальная сумма обмена — <strong>500 ₽</strong>. Максимальная сумма одной операции — <strong>513 000 ₽</strong>.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">3.5</span>
              <p>Курс и комиссия фиксируются в момент создания заявки и отображаются в интерфейсе Пользователю до оплаты.</p>
            </div>
          </div>
        </article>

        <!-- Ответственность Пользователя -->
        <article class="rule-section warning" v-motion-slide-visible-right :delay="400">
          <h2>4. Ответственность Пользователя</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">4.1</span>
              <p>Пользователь несёт полную ответственность за корректность:</p>
              <ul class="responsibility-list">
                <li>адреса кошелька</li>
                <li>суммы обмена</li>
                <li>реквизитов, указанных при оплате</li>
              </ul>
            </div>
            <div class="subsection critical">
              <span class="subsection-number">4.2</span>
              <p><strong>В случае указания неверного адреса кошелька цифровые активы не подлежат возврату.</strong></p>
            </div>
            <div class="subsection">
              <span class="subsection-number">4.3</span>
              <p>Пользователь подтверждает, что средства, используемые для обмена, получены им законным путём.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">4.4</span>
              <p>Пользователь обязуется не использовать Сервис для незаконных операций, включая отмывание средств, финансирование запрещённых организаций и т.п.</p>
            </div>
          </div>
        </article>

        <!-- Ответственность Сервиса -->
        <article class="rule-section" v-motion-slide-visible-left :delay="500">
          <h2>5. Ответственность Сервиса</h2>
          <div class="subsections">
            <div class="subsection">
              <span class="subsection-number">5.1</span>
              <p>Сервис несёт ответственность только за отправку цифровых активов на адрес, указанный Пользователем.</p>
            </div>
            <div class="subsection">
              <span class="subsection-number">5.2</span>
              <p>Сервис не несёт ответственности за:</p>
              <ul class="responsibility-list">
                <li>задержки, вызванные работой платёжных шлюзов или банков</li>
                <li>задержки, связанные с подтверждением транзакций блокчейна</li>
                <li>ошибочные действия Пользователя</li>
                <li>действия третьих лиц, не контролируемых Сервисом</li>
              </ul>
            </div>
            <div class="subsection">
              <span class="subsection-number">5.3</span>
              <p>В случае технической неисправности Сервис обязуется выполнить обмен либо вернуть полученные средства, если перевод ещё не был произведён.</p>
            </div>
          </div>
        </article>

        <!-- Остальные разделы в более компактном виде -->
        <div class="compact-sections">
          <article class="rule-section compact" v-motion-slide-visible-right :delay="600">
            <h2>6. Комиссии и курсы</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">6.1</span>
                <p>Комиссия и курс обмена отображаются Пользователю до подтверждения платежа и являются окончательными.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">6.2</span>
                <p>Комиссия сети блокчейна может удерживаться отдельно и зависит от текущей нагрузки сети.</p>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-left :delay="700">
            <h2>7. Отмена и возвраты</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">7.1</span>
                <p>Возможность отмены заявки существует только до момента оплаты.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">7.2</span>
                <p>После совершения оплаты возврат возможен только в случае, если цифровые активы ещё не были отправлены.</p>
              </div>
              <div class="subsection critical">
                <span class="subsection-number">7.3</span>
                <p><strong>Если средства уже отправлены по указанному Пользователем адресу, возврат невозможен.</strong></p>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-right :delay="800">
            <h2>8. Поддержка</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">8.1</span>
                <p>Пользователь вправе обратиться в поддержку в <a href="https://t.me/qorex_support" class="telegram-link">Telegram</a> для решения любых вопросов по обмену.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">8.2</span>
                <p>Сервис вправе запросить дополнительные данные для подтверждения личности и/или проверки операции в целях безопасности.</p>
              </div>
            </div>
          </article>

          <article class="rule-section compact" v-motion-slide-visible-left :delay="900">
            <h2>9. AML/KYC</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">9.1</span>
                <p>Сервис оставляет за собой право приостановить или отменить операцию, если она вызывает признаки подозрительной активности.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">9.2</span>
                <p>В отдельных случаях Администрация вправе запросить документы, подтверждающие личность или происхождение средств.</p>
              </div>
            </div>
          </article>

          <article class="rule-section compact final" v-motion-slide-visible-right :delay="1000">
            <h2>10. Заключительные положения</h2>
            <div class="subsections">
              <div class="subsection">
                <span class="subsection-number">10.1</span>
                <p>Сервис вправе вносить изменения в настоящие Правила без предварительного уведомления.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">10.2</span>
                <p>Все споры решаются путем переговоров. В случае невозможности урегулирования — в соответствии с применимым законодательством.</p>
              </div>
              <div class="subsection">
                <span class="subsection-number">10.3</span>
                <p>Начиная использовать Сервис, Пользователь подтверждает согласие с данным документом.</p>
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
}
</style>