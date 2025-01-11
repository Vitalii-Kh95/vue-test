import { defineStore } from 'pinia';
import { baseURL } from '@/constants';

export const useHealthStore = defineStore('healthStore', {
  state: () => ({
    dbStatus: 'Healthy',
    lastHealthCheck: null,
    retryInterval: null // Holds the interval ID for retries
  }),

  actions: {
    // Fetch backend health status
    async fetchHealthStatus(popupInstance, force = false) {
      const now = new Date().getTime();
      const oneHour = 60 * 60 * 1000;

      if (!force && this.lastHealthCheck && now - this.lastHealthCheck < oneHour) {
        return;
      }

      const previousStatus = this.dbStatus; // Store previous status to detect transitions

      try {
        const url = new URL('health/', baseURL);
        const response = await fetch(url);
        const data = await response.json();
        this.dbStatus = data.db_status;
        this.lastHealthCheck = now;

        if (this.dbStatus === 'Unhealthy') {
          popupInstance.show(); // Show popup if backend is unhealthy
          popupInstance.setMessage('Backend is currently unavailable. Retrying health check...');
          this.startRetry(popupInstance); // Start retry mechanism
        } else if (previousStatus === 'Unhealthy' && this.dbStatus === 'Healthy') {
          popupInstance.show(); // Show popup if backend recovers
          popupInstance.setMessage('Backend is back online. All systems operational.');
          this.stopRetry(); // Stop retries if backend becomes healthy
        }
      } catch (error) {
        this.dbStatus = 'Unhealthy';
        this.lastHealthCheck = now;
        popupInstance.show(); // Show popup on error
        popupInstance.setMessage(
          'Backend is currently unavailable. Authentication and posts are not accessible.'
        );
        this.startRetry(popupInstance); // Start retry mechanism
      }
    },

    // Start retry mechanism
    startRetry(popupInstance) {
      if (!this.retryInterval) {
        this.retryInterval = setInterval(
          () => this.fetchHealthStatus(popupInstance, true),
          60000 * 3
        ); // Retry every 3 minutes
      }
    },

    // Stop retry mechanism
    stopRetry() {
      if (this.retryInterval) {
        clearInterval(this.retryInterval);
        this.retryInterval = null;
      }
    }
  }
});
