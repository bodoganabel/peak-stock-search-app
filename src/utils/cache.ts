class Cache {
    private store = new Map<string, any>();
  
    get(key: string) {
      return this.store.get(key);
    }
  
    set(key: string, value: any) {
      this.store.set(key, value);
    }
  }
  
  export const cache = new Cache();
  