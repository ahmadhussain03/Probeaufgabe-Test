import useLocalStorage from './useLocalStorage';

function useWatchProducts() {
    const { storedValue, setValue } = useLocalStorage<number[]>('watch-products', [])

    function deleteProduct(id: number) {
        setValue([...storedValue.value.filter((value: number) => value !== id)])
    }
    
    function addProduct(id: number) {
        const isExists = storedValue.value.findIndex(value => value === id)
        if(isExists === -1) {
            setValue([...storedValue.value, id])
        }
    }

    function isWatch(id: number) {
        return storedValue.value.findIndex(value => value === id) !== -1
    }

    return { deleteProduct, watchProducts: storedValue, addProduct, isWatch }
}

export default useWatchProducts