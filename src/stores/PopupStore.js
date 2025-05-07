// stores/popupStore.js
import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popupStore', {
  state: () => {
    return {
      popups: []
    };
  },

  actions: {
    show(config) {
      // Add the new popup to the array
      const id = Symbol();
      this.popups.push({ id, ...config });
    },

    close(id) {
      const idx = this.popups.findIndex((p) => p.id === id);
      if (idx !== -1) this.popups.splice(idx, 1);
    }
  }
});
