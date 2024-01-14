<template>
  <div class="clientDashboardContainer">
    <h2 class="dashboardHeader">Client Dashboard</h2>
    <div class="dashboardOptions">
      <router-link to="/licenceActive" class="optionButton">Activate Licence</router-link>
    </div>
  </div>
</template>

<style scoped>
.clientDashboardContainer {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.dashboardHeader {
  text-align: center;
  color: #ecf0f1;
}

.dashboardOptions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.optionButton {
  padding: 12px;
  background-color: #00b5f7;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 200px;
  transition: background-color 0.3s ease;
}

.optionButton:hover {
  background-color: #0479ff;
  transition: background-color 0.3s ease;
}
</style>
