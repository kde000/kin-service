---
layout: base.njk
title: Контакты
description: Контактная информация КИНЕМАТИКА СЕРВИС. Телефоны, адрес, электронная почта и форма обратной связи.
permalink: /contact/
---

<section class="contacts">
  <div class="container">
    <h1 class="page-title">Наши контакты</h1>
    
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-card">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Адрес</h3>
          <p>г. Москва, ул. Промышленная, 15</p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <i class="fas fa-phone"></i>
          </div>
          <h3>Телефоны</h3>
          <p>+7 (XXX) XXX-XX-XX (основной)</p>
          <p>+7 (XXX) XXX-XX-XX (техподдержка)</p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h3>Электронная почта</h3>
          <p>info@kin-service.ru (общие вопросы)</p>
          <p>support@kin-service.ru (техподдержка)</p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Режим работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: выходной</p>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>Форма обратной связи</h2>
        <form id="feedback-form" netlify>
          <div class="form-group">
            <label for="name">Ваше имя</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
          </div>
          
          <div class="form-group">
            <label for="message">Сообщение</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="button">Отправить сообщение</button>
        </form>
      </div>
    </div>
    
    <div class="map-container">
      <h2>Мы на карте</h2>
      <div class="map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</section>