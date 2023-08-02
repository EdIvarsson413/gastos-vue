<template>
    <form class="presupuesto" @submit.prevent="definirPresupuesto" autocomplete="off">
        
        <Alerta v-if="error">
            {{ error }}
        </Alerta>
        
        <div class="campo">
            <label for="nuevo-presupuesto">Definir presupuesto</label>
            <input 
                id="nuevo-presupuesto" 
                type="number"
                class="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                min="0"
                v-model.number="presupuesto"
            >
        </div>
        
        <input 
            type="submit" 
            value="Definir Presupuesto"
        >
    </form>
</template>

<script setup>
import { ref } from 'vue'
import Alerta from '@cmp/Alerta.vue'

const presupuesto = ref(0);
const error = ref('');

const emits = defineEmits([
    'definir-presupuesto',
])

const definirPresupuesto = () => {
    // Valida si el presupues no es 0 o una cantidad negativa
    if( presupuesto.value <= 0 || presupuesto.value === '') {
        error.value = 'Presupuesto no valido';

        // Despues de 2s desaparece la alerta
        setTimeout(() => {
            error.value  = '';
        }, 2000)

        return
    }

    // SI la cantidad es válida
    emits('definir-presupuesto', presupuesto.value)
}
</script>

<style scoped>
.presupuesto {
    width: 100%;
}

.campo {
    display: grid;
    gap: 2rem;
}

.presupuesto input[type="number"] {
    background-color: var(--gris-claro);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
    text-align: center;
}

.presupuesto label {
    font-size: 2.8rem;
    text-align: center;
    color: var(--azul);
}

.presupuesto input[type="submit"] {
    background-color: var(--azul);
    border: none;
    padding: 1rem;
    text-align: center;
    color: var(--blanco);
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: 900;
    width: 100%;
    transition: background-color 300ms ease;
}

.presupuesto input[type="submit"]:hover {
    background-color: #1048a4;
    cursor: pointer;

}
</style>