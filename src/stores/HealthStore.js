import { defineStore } from 'pinia';
import { baseURL } from '@/constants';

const RetryTimeInterval = 60000 * 3;

export const useHealthStore = defineStore('healthStore', {
  state: () => ({
    usePopups: false,
    blogAPIStatus: 'ok', // Django returns 'ok' or 'error' in the data object
    lastHealthCheck: null,
    retryIntervalId: null // Holds the interval ID for retries
  }),

  actions: {
    // Fetch backend health status
    async fetchHealthStatus() {
      let popupStore = null;
      if (this.usePopups) {
        const { usePopupStore } = await import('./PopupStore');
        popupStore = usePopupStore();
      }
      const previousStatus = this.blogAPIStatus; // Store previous status to detect transitions
      const now = new Date().getTime();
      this.lastHealthCheck = now;
      try {
        const url = new URL('health/', baseURL);
        const response = await fetch(url);
        const data = await response.json();
        //LOLLOLOLOLOL
        this.blogAPIStatus = data.db_status;

        if (this.blogAPIStatus === 'error') {
          throw new Error('Backend is error');
        } else if (previousStatus === 'error' && this.blogAPIStatus === 'ok') {
          if (this.usePopups) {
            popupStore.show({
              message: 'Backend is back online. All systems operational.',
              type: 'alert-success'
            });
          }
          this.stopRetry();
        } else {
          // Here, means healthCheck is alright
        }
      } catch {
        this.blogAPIStatus = 'error';
        if (this.usePopups) {
          popupStore.show({
            message:
              'Backend is currently unavailable. Authentication and posts are not accessible.',
            type: 'alert-error'
          });
        }
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
