<script setup lang="ts">
import ImedPageTemplate from '@/components/templates/ImedPageTemplate.vue';

const data = {
    metrics:  [
        { label: 'Users', value: '1,234' },
        { label: 'Sessions', value: '5,678' },
        { label: 'Conversion Rate', value: '42%' }
    ],
    activities:  [
        { description: 'New user registered' },
        { description: 'Order completed' }
    ]
}

</script>

<template>
    <ImedPageTemplate>
        <div style="height: 200vh;">
            <h1> Doctor </h1>

            <main class="dashboard-main">
                <section class="grid-item grid-item-lg">
                    <h2>Key Metrics</h2>
                    <div class="metrics-grid">
                    <div class="metric-card" v-for="(metric, index) in data.metrics" :key="index">
                        <span class="value">{{ metric.value }}</span>
                        <span class="label">{{ metric.label }}</span>
                    </div>
                    </div>
                </section>

                <section class="grid-item">
                    <h2>Recent Activity</h2>
                    <div class="activity-list">
                    <div class="activity-item" v-for="(item, index) in data.activities" :key="index">
                        {{ item.description }}
                    </div>
                    </div>
                </section>

                <section class="grid-item grid-item-md">
                    <h2>Performance Charts</h2>
                    <div class="charts-container">
                    <!-- Chart components go here -->
                    </div>
                </section>
            </main>
        </div>
    </ImedPageTemplate>
</template>

<style scoped>
/* Grid Layout */
.dashboard-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

/* Grid Item Variants */
.grid-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-item-lg {
  grid-column: span 2;
}

.grid-item-md {
  grid-column: span 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-main {
    grid-template-columns: 1fr;
  }

  .grid-item-lg,
  .grid-item-md {
    grid-column: 1 / -1 !important;
  }
}
</style>