<!-- src/components/Login.vue -->
<template>
  <div class="loginContainer">
    <h2>Login</h2>
    <form>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        v-model="username"
        @input="updateUsername"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @input="updatePassword"
      />
      <button type="button" @click="handleLogin">Login</button>
      <div class="signupButton" @click="handleSignupClick">Signup</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$axios.post(
          "http://localhost:4000/api/user/login",
          {
            username: this.username,
            password: this.password,
          }
        );

        // Check if the login was successful
        if (response.status === 200) {
          const { role } = response.data;
          console.log(role);
          // Redirect based on the user's role
          if (role === "admin") {
            this.$router.push("/dashboardAdmin");
          } else if (role === "user") {
            console.log("iamuser");
            this.$router.push("/dashboardClient");
          }
        }
      } catch (error) {
        // Handle unsuccessful login
        console.error(error);
        alert("Login information is not correct.");
      }
    },
    handleSignupClick() {
      this.$router.push("/signup");
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
.loginContainer {
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

.signupButton {
  margin-top: 10px;
  color: #45a049;
}

.signupButton:hover {
  color: #3498db;
}
</style>


<!-- Disable ESLint rule for multi-word component names -->
<!-- eslint-disable vue/multi-word-component-names -->