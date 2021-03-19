import useLocalStorage from './useLocalStorage';


const useAddState = initialValue =>{ 
    const [item, setItem] = useLocalStorage('books', initialValue);

    return [item,setItem]
}

export default useAddState