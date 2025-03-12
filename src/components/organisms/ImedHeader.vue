<script setup lang="ts">
import ImedSearch from '../atoms/ImedSearch.vue';

const noop = () => {};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var header = document.getElementById("header");

    var notifications = document.getElementById("notification-headers");

    var offset = 0;

    if (notifications) {
        offset = notifications.childNodes.length * 50;
        notifications.style.marginTop = `${offset}px`;
    }

    if (header && prevScrollpos > currentScrollPos) {
        header.style.top = `${offset}px`;
    } else if (header) {
        header.style.top = `-${header?.clientHeight}px`;
    }
    prevScrollpos = currentScrollPos;
}

</script>

<template>
    <div id="notification-headers" style="margin-top: 50px;">
        <div style="height: 50px; width: 100vw; background-color: brown; position: fixed; z-index: 1; height: 50px; margin-top: -50px;">
            Teste
        </div>
        <div style="height: 50px; width: 100vw; background-color: coral; position: fixed; z-index: 1; height: 50px; margin-top: -100px;">
            Teste 2
        </div>
    </div>
    <header id="header">
        <img id="app-logo" src="https://cdn.imedicina.com.br/app/logo-imed.png" alt="iMedicina">

        <div id="header-menu">
            <ImedSearch @input="noop" />
            <nav>
                <ul>
                    <li>
                        <i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                        Suporte
                    </li>
                    <li>
                        <img src="https://cdn.imedicina.com.br/app/top-nav/checkmark.svg" alt="checkmark-icon" width="17">
                    </li>
                    <li>
                        <img src="https://cdn.imedicina.com.br/app/top-nav/gift.svg" alt="gift-icon" width="17">
                    </li>
                    <li>
                        <img src="https://cdn.imedicina.com.br/app/top-nav/plus.svg" alt="plus-icon" width="17">
                    </li>
                    <li>
                        <img src="https://cdn.imedicina.com.br/app/top-nav/notification.svg" alt="notification-icon" width="11">
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    header {
        height: 50px;

        position: sticky;
        top: -50px;

        background-color: #fff;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        box-shadow: 0px 4px 9px 0px #f1f1f1;

        transition-duration: 0.4s;
    }

    header img#app-logo {
        height: 50px;
        padding: 1px 20px;
    }

    #header-menu {
        display: flex;
        flex-direction: row;
        height: 50px;
        border-left: 1px solid #eaeaea;
        padding-left: 15px;
    }

    #header-menu nav ul {
        list-style-type: none;
        padding-inline-start: 15px;
        padding-inline-end: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #bbc7cd;
    }

    #header-menu nav ul li {
        cursor: pointer;
        border-left: 1px solid #eaeaea;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    #header-menu nav ul li:hover {
        color: #5b707b;
        background-color: #e7ebee !important;
    }

    #header-menu nav ul li:last-of-type {
        border-right: 1px solid #eaeaea;
    }
</style>
