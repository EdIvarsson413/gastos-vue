<template>
    <div class="dos-columnas">
        <!-- Grafica -->
        <div class="contenedor-grafico">
            <p class="porcentaje">{{ porcentaje }}%</p>

            <CircleProgress 
                :percent="porcentaje" 
                :size="200" 
                :border-width="20"
                :border-bg-width="10"
                :is-gradient="true"
                :gradient="gradient"
                empty-color="#e5e5e5"
            />
        </div>

        <!-- Gastos, disponible, Gastado -->
        <div class="contenedor-presupuesto">
            <button 
                type="button"
                class="reset-app" 
                @click="$emit('reiniciar')"
            >
                Resetear APP
            </button>

            <!-- Detalles -->
            <p>
                <span>Presupuesto:</span>
                {{ formatearCantidad( presupuesto ) }}
            </p>
            
            <p>
                <span>Disponible:</span>
                {{ formatearCantidad( disponible ) }}
            </p>
            
            <p>
                <span>Gastado:</span>
                {{ formatearCantidad( gastado ) }}
            </p>
        </div>
    </div>
</template>

<script setup>
import CircleProgress from "vue3-circle-progress"
import "vue3-circle-progress/dist/circle-progress.css"
import { formatearCantidad } from '../helpers'
import { computed } from "vue";

const props = defineProps({
    presupuesto: {
        type: Number,
        required: true
    },
    disponible: {
        type: Number,
        required: true
    },
    gastado: {
        type: Number,
        required: true
    }
})

defineEmits( [ 'reiniciar' ] )

const gradient = {
    angle: 130,
    startColor: '#3b82f6',
    stopColor: '#ef4444'
}

const porcentaje = computed(() => {
    const { gastado, presupuesto } = props;
    return (gastado * 100) / presupuesto;
})
</script>

<style scoped>
/* Contenedor del control de presupuesto */
.dos-columnas {
    display: flex;
    flex-direction: column;
}

.dos-columnas > :first-child {
    margin-bottom: 3rem;
}

@media (min-width: 768px) {
    .dos-columnas {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
    }

    .dos-columnas > :first-child {
        margin-bottom: 0;
    }
}

/* Grafica */
.contenedor-grafico {
    position: relative;
}

.porcentaje {
    position: absolute;
    margin: auto;
    top: calc(50% - 1.5rem);
    left: 0;
    right: 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    color: var(--gris-oscuro);
}

/* Detalles */
.contenedor-presupuesto {
    width: 100%;
}

.contenedor-presupuesto p {
    font-size: 2.4rem;
    text-align: center;
    color: var(--gris-oscuro);
}

        /* Arrelanfo el texto centrado en pantallas grandes */
@media (min-width: 768px) {
    .contenedor-presupuesto p {
        text-align: left;
    }
}
.contenedor-presupuesto span {
    font-weight: 900;
    color: var(--azul);
}

/* Boton de reseteo */
.reset-app {
    width: 100%;
    background-color: #db2777;
    color: var(--blanco);
    font-weight: 900;
    text-transform: uppercase;
    border: none;
    padding: 1rem;
    border-radius: .5rem;
    transition: background-color 300ms ease;
}

.reset-app:hover {
    cursor: pointer;
    background-color: #b92266;
}
</style>