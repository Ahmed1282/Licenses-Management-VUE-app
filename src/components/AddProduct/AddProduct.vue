<!-- src/components/AddProduct.vue -->
<template>
  <div class="addProductContainer">
    <h2>Add Product</h2>

    <form>
      <label for="product-name">Product Name:</label>
      <input
        type="text"
        id="product-name"
        v-model="productName"
        @input="updateProductName"
      />

      <label for="product-version">Product Version:</label>
      <input
        type="text"
        id="product-version"
        v-model="productVersion"
        @input="updateProductVersion"
      />

      <label for="product-description">Product Description:</label>
      <textarea
        id="product-description"
        v-model="productDescription"
        @input="updateProductDescription"
      />

      <label for="user-name">User Name:</label>
      <input
        type="text"
        id="user-name"
        v-model="userName"
        @input="updateUserName"
      />

      <button type="button" @click="handleAddProduct">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productName: "",
      productVersion: "",
      productDescription: "",
      userName: "",
    };
  },
  methods: {
    async handleAddProduct() {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/product/add",
          {
            name: this.productName,
            version: this.productVersion,
            description: this.productDescription,
            userName: this.userName,
          }
        );

        if (response.status === 201) {
          // Product added successfully, navigate to the Admin Dashboard
          this.$router.push("/dashboardAdmin");
        } else {
          console.error("Error adding product:", response.data.message);
          // Handle the error (e.g., show an error message to the user)
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle unexpected errors
      }
    },
    updateProductName(event) {
      this.productName = event.target.value;
    },
    updateProductVersion(event) {
      this.productVersion = event.target.value;
    },
    updateProductDescription(event) {
      this.productDescription = event.target.value;
    },
    updateUserName(event) {
      this.userName = event.target.value;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.addProductContainer {
  max-width: 400px;
  margin: 0 auto;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.addProductContainer h2 {
  text-align: center;
}

.addProductContainer form {
  display: flex;
  flex-direction: column;
}

.addProductContainer label {
  margin-bottom: 8px;
}

.addProductContainer input,
.addProductContainer textarea {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: #34495e;
  color: #ecf0f1;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

.addProductContainer button {
  padding: 12px;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.addProductContainer button:hover {
  background-color: #2980b9;
  transition: background-color 0.3s ease;
}
</style>
