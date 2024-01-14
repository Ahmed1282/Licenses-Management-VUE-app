<!-- src/components/Signup.vue -->
<template>
  <div class="signupContainer">
    <h2>Signup</h2>
    <form>
      <label for="signup-username">Username:</label>
      <input
        type="text"
        id="signup-username"
        v-model="username"
        @input="updateUsername"
      />
      <label for="signup-password">Password:</label>
      <input
        type="password"
        id="signup-password"
        v-model="password"
        @input="updatePassword"
      />
      <button type="button" @click="handleSignup">Signup</button>
      <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/register",
          {
            username: this.username,
            password: this.password,
            role: "user", // Set the role as needed
          }
        );

        this.message = response.data.message;

        // If the signup was successful, redirect the user to the "/" route
        if (response.status === 201) {
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
        this.message = "An error occurred during signup.";
      }
    },
    updateUsername(event) {
      this.username = event.target.value;
    },
    updatePassword(event) {
      this.password = event.target.value;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.signupContainer {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin-top: 50px;
  background-color: #2c3e50;
  color: #ecf0f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  color: #ecf0f1;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #34495e;
  color: #ecf0f1;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
  transition: background-color 0.3s ease;
}
</style>


<!-- Disable ESLint rule for multi-word component names -->
<!-- eslint-disable vue/multi-word-component-names -->