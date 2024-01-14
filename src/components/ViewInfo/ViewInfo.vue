<template>
  <div class="viewInfoContainer">
    <h2 class="infoHeader">View License Info</h2>
    <table class="infoTable">
      <thead>
        <tr>
          <th>License</th>
          <th>Activation Status</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="license in licenses" :key="license._id">
          <td>{{ license.licence }}</td>
          <td>{{ license.validity ? 'Activated' : 'Not Activated' }}</td>
          <td>{{ license.user.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'; // Import axios

export default {
  data() {
    return {
      licenses: [],
    };
  },
  mounted() {
    // Fetch licenses data from the server
    this.fetchLicenses();
  },
  methods: {
    async fetchLicenses() {
      try {
        const response = await axios.get("http://localhost:4000/api/product/licenses");
        this.licenses = response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Your existing scoped styles */
.viewInfoContainer {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.infoHeader {
  text-align: center;
  color: #ecf0f1;
}

.infoTable {
  width: 100%;
  margin-top: 15px;
  border-collapse: collapse;
}

.infoTable th,
.infoTable td {
  padding: 12px;
  border: 1px solid #2c3e50;
}

.infoTable th {
  background-color: rgb(94, 76, 175);
  color: white;
}

.infoTable td {
  text-align: center;
}

.infoTable tr:nth-child(even) {
  background-color: #34495e;
}

.infoTable tr:hover {
  background-color: #2c3e50;
}
</style>
