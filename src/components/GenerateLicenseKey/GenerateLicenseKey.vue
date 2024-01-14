<template>
  <div class="generateKeyContainer">
    <h2 class="generateKeyHeader">Generate License Key</h2>
    <p v-if="error" class="errorMessage">{{ error }}</p>
    <label for="product-name" class="generateKeyLabel">Product Name:</label>
    <input
      type="text"
      id="product-name"
      v-model="productName"
      class="generateKeyInput"
    />
    <button @click="handleGenerateKey" class="generateKeyButton">Generate Key</button>
    <div v-if="licenseKey">
      <p class="generatedKeyLabel">Generated License Key:</p>
      <p class="generatedKey">{{ licenseKey }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productName: "",
      licenseKey: "",
      error: null,
    };
  },
  methods: {
    async handleGenerateKey() {
      try {
        // Send a POST request to the server to generate a license key
        const response = await axios.post(
          "http://localhost:4000/api/product/generatekey",
          {
            name: this.productName,
          }
        );

        if (response.status === 200) {
          // License key generated successfully
          this.licenseKey = response.data.key;
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        console.error("Error:", error);
        this.error = "An unexpected error occurred.";
      }
    },
  },
};
</script>

<style scoped>
.generateKeyContainer {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.generateKeyHeader {
  text-align: center;
  color: #ecf0f1;
}

.errorMessage {
  color: red;
}

.generateKeyLabel {
  margin-top: 10px;
  color: #ecf0f1;
}

.generateKeyInput {
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #34495e;
  color: #ecf0f1;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

.generateKeyButton {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.generateKeyButton:hover {
  background-color: #45a049;
  transition: background-color 0.3s ease;
}

.generatedKeyLabel {
  margin-top: 15px;
  color: #ecf0f1;
}

.generatedKey {
  font-size: 18px;
  padding: 10px;
  background-color: #34495e;
  color: #ecf0f1;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}
</style>
