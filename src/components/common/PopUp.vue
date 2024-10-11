<template>
    <div></div>
    <dialog open>
        <section>
            <slot></slot>
        </section>
    </dialog>
</template>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
dialog {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: #f5f2f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
    z-index: 20;
}


</style>