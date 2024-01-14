<template>
  <div class="licenseActivationContainer">
    <h2 class="activationHeader">License Activation</h2>
    <input
      type="text"
      placeholder="Enter License Key"
      v-model="licenseKey"
      class="activationInput"
    />
    <button @click="handleActivateLicense" class="activationButton">
      Activate License
    </button>
    <p v-if="activationStatus" class="activationStatus">{{ activationStatus }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      licenseKey: "",
      activationStatus: null,
    };
  },
  methods: {
    async handleActivateLicense() {
      try {
        // Send a POST request to activate the license
        const response = await axios.post(
          "http://localhost:4000/api/license/activate",
          { licenseKey: this.licenseKey }
        );

        if (response.status === 200) {
          this.activationStatus = "License activated successfully";
        } else {
          this.activationStatus = "Error activating license";
        }
      } catch (error) {
        console.error("Error:", error);
        this.activationStatus = "An unexpected error occurred";
      }
    },
  },
};
</script>

<style scoped>
.licenseActivationContainer {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.activationHeader {
  text-align: center;
  color: #ecf0f1;
}

.activationInput {
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #34495e;
  color: #ecf0f1;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

.activationButton {
  padding: 12px;
  background-color: #00ccff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.activationButton:hover {
  background-color: rgb(41, 0, 247);
  transition: background-color 0.3s ease;
}

.activationStatus {
  text-align: center;
  margin-top: 10px;
  color: #ecf0f1;
}
</style>
