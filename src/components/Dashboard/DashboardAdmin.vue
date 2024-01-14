<template>
  <div class="dashboardContainer">
    <div class="dashboardHeader">Admin Dashboard</div>
    <div class="dashboardOptions">
      <button class="optionButton" @click="handleCreateProductClick">
        Create Product
      </button>
      <button class="optionButton" @click="handleGenerateLicenseKeyClick">
        Generate License Key
      </button>
      <button class="optionButton" @click="handleViewInfoClick">View Info</button>
      <!-- Add more buttons/options as needed -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCreateProductClick() {
      // Navigate to the '/addproduct' route
      this.$router.push("/addproduct");
    },
    handleGenerateLicenseKeyClick() {
      // Navigate to the '/generatelicense' route
      this.$router.push("/generatelicense");
    },
    handleViewInfoClick() {
      // Navigate to the '/viewinfo' route
      this.$router.push("/viewinfo");
    },
    // Add more methods as needed
  },
};
</script>

<style scoped>
.dashboardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.dashboardHeader {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.dashboardOptions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.optionButton {
  padding: 10px;
  background-color: #0307f1;
  color: #fff;
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
  background-color: rgb(15, 136, 243);
  transition: background-color 0.3s ease;
}
</style>
