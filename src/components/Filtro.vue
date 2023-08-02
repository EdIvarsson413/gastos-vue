<template>
    <div class="filtros sombra contenedor">
        <form class="campo">
            <label for="filtro">Filtrar Gastos</label>
            <select 
                name="filtro" 
                id="filtro" 
                :value="filtro"
                @input="$emit('update:filtro', $event.target.value)"
            >
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    filtro: {
        type: [ String, null ],
        required: true
    }
})

defineEmits([
    'update:filtro'
])
</script>

<style scoped>
.filtros {
    margin-top: 10rem;
}

.filtros .campo {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.filtros label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--gris-oscuro);
}

.filtros select {
    flex: 1;
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--gris-claro);
    text-align: center;
}
</style>