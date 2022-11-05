import { ref } from 'vue';

function getValue<T>(key: string, initialValue: T) {

    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
} 

function useLocalStorage<T>(key: string, initialValue: T) {

    const storedValue = ref<T>(getValue(key, initialValue))

    function setValue (value: Function | T) {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        storedValue.value = valueToStore;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
  }

  return {storedValue, setValue};
}

export default useLocalStorage