import { defineStore } from 'pinia';
import { baseURL } from '@/constants';
import { usePopupStore } from './PopupStore';

const RetryTimeInterval = 60000 * 3;

export const useHealthStore = defineStore('healthStore', {
  state: () => ({
    dbStatus: 'Healthy',
    lastHealthCheck: null,
    retryIntervalId: null // Holds the interval ID for retries
  }),

  actions: {
    // Fetch backend health status
    async fetchHealthStatus() {
      const popupStore = usePopupStore();
      const previousStatus = this.dbStatus; // Store previous status to detect transitions
      const now = new Date().getTime();
      this.lastHealthCheck = now;
      try {
        const url = new URL('health/', baseURL);
        const response = await fetch(url);
        const data = await response.json();
        this.dbStatus = data.db_status;

        if (this.dbStatus === 'Unhealthy') {
          throw new Error('Backend is unhealthy');
        } else if (previousStatus === 'Unhealthy' && this.dbStatus === 'Healthy') {
          popupStore.show({
            message: 'Backend is back online. All systems operational.',
            type: 'alert-success'
          });
          this.stopRetry();
        } else {
          // Here, means healthCheck is alright
        }
      } catch {
        this.dbStatus = 'Unhealthy';
        popupStore.show({
          message: 'Backend is currently unavailable. Authentication and posts are not accessible.',
          type: 'alert-error'
        });
        this.startRetry();
      }
    },

    // Start retry mechanism
    startRetry() {
      if (!this.retryIntervalId) {
        this.retryIntervalId = setInterval(() => this.fetchHealthStatus(), RetryTimeInterval); // Retry every 3 minutes
      }
    },

    // Stop retry mechanism
    stopRetry() {
      if (this.retryIntervalId) {
        clearInterval(this.retryIntervalId);
        this.retryIntervalId = null;
      }
    }
  }
});
