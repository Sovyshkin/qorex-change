<template>
    <div class="container-account">
        <div class="sidebar">
            <div class="info">
                <div class="avatar">
                    <img src="../assets/avatar.svg" alt="">
                </div>
                <div class="user-data">
                    <span class="username">Имя пользователя</span>
                    <span class="email">user@example.com</span>
                </div>
            </div>
            <nav class="account-nav">
                <li class="nav-item active">Панель инструментов</li>
                <li class="nav-item">Мои заказы</li>
                <li class="nav-item">Адрес</li>
                <li class="nav-item">Личные данные</li>
                <li class="nav-item">Избранное</li>
            </nav>
            <span class="exit">Выйти</span>
        </div>
        <div class="main"></div>
    </div>
</template>
<style scoped>
.container-account {
  display: flex;
  gap: 20px;
}

.sidebar {
    width: 333px;
    height: 488px;
    background: #F2F4F3;
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
}

.user-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.username {
    font-size: 16px;
    font-weight: 500;
    color: #3C4534;
}

.email {
    color: #3C4534;
    opacity: .5;
    font-size: 16px;
    font-weight: 600;
}

.account-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
}

.nav-item {
    color: #3C4534;
    font-size: 12px;
    font-weight: 400;
}

.active {
    color: #3C7A55;
}

.exit {
    font-size: 12px;
    color: #989898;
    font-weight: 400;
}

input {
    background-color: #F2F4F3;
    border-radius: 8px;
    padding: 12px;
}

button {
    background-color: #3C4534;
    padding: 14px 24px;
    border-radius: 44px;
    width: 100%;
    height: 45px;
}
</style>
