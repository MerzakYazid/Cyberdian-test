<template>
  <section>
    <header class="logo">
        <img alt="coreui logo" src="../assets/cib-coreui.svg">
    </header>
    <article>
        <div>
            <img alt="coreui logo" src="../assets/dashboard-icon.svg" class="icons">
                Dashboard
            <img alt="coreui logo" src="../assets/new-icon.svg" class="arrow">
        </div>
    </article>
    <article>
        <header class="titles">
            THEME
        </header>
        <div>
            <img alt="coreui logo" src="../assets/colors-icon.svg" class="icons">
            Colors
        </div>
        <div>
            <img alt="coreui logo" src="../assets/typo-icon.svg" class="icons">
            Typography
        </div>
    </article>
    <article>
        <header class="titles">
            COMPONENTS
        </header>
        <div>
            <img alt="coreui logo" src="../assets/colors-icon.svg" class="icons">
            Base
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
        <div>
            <img alt="coreui logo" src="../assets/typo-icon.svg" class="icons">
            Buttons
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
        <div>
            <img alt="coreui logo" src="../assets/charts-icon.svg" class="icons">
            Charts
        </div>
        <div>
            <img alt="coreui logo" src="../assets/forms-icon.svg" class="icons">
            Forms
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
        <div>
            <img alt="coreui logo" src="../assets/icons-icon.svg" class="icons">
            Icons
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
        <div>
            <img alt="coreui logo" src="../assets/notif-icon.svg" class="icons">
            Notifications
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
        <div>
            <img alt="coreui logo" src="../assets/widgets-icon.svg" class="icons">
            Widgets
            <img alt="coreui logo" src="../assets/new-icon.svg" class="arrow">
        </div>
    </article>
    <article>
        <header class="titles">
            EXTRAS
        </header>
        <div>
            <img alt="coreui logo" src="../assets/icons-icon.svg" class="icons">
            Pages
            <img alt="coreui logo" src="../assets/down-arrow.svg" class="arrow">
        </div>
    </article>
    <article class="other">
        <div>
            <img alt="coreui logo" src="../assets/docs-icon.svg" class="icons">
            Docs
        </div>
        <div>
            <img alt="coreui logo" src="../assets/trycui-icon.svg" class="icons">
            Try CoreUI<strong>PRO</strong>
        </div>
    </article>
    <footer>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
* {
    color: #9ba3af;
}
section{
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 15%;
    background: rgba(60,75,100,255);
    height: 100vh;
}
.logo{
    display: flex;
    justify-content: center;
    height: 10%;
    background: rgba(48,60,84,255);
}
.dashboard {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5%;
}
.titles {
    margin-left: 5%;
    margin-top: 10%;
    font-weight: bold;
    font-size: 14px;
    color: rgba(168,175,186,255);
}
div {
    position: relative;
    display: flex;
    margin-left: 14%;
    align-items: center;
    margin-top: 8%;
}
.icons {
    margin-right: 16%;
}
.arrow {
    position: absolute;
    right: 15%;
}
.other {
    margin-top: 10%;
}
footer {
    display: flex;
    height: 5%;
    width: 100%;
    align-self: flex-end;
    background: rgba(48,60,84,255);
    position: absolute;
    bottom: 0;
    align-items: center;
}
</style>

