<template>
    <div
        class="alerta"
    >
        <slot></slot>
    </div>
</template>

<style scoped>
.alerta {
    padding: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    background-color: rgba(150, 0, 0, 0.2);
    font-size: 1.6rem;
    text-align: center;
    border-left: .5rem solid #b91c1c;
    color: #b91c1c;
    margin-bottom: 2rem;
}
</style>