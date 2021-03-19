import useLocalStorage  from './useLocalStorage';

const useCart = (initialValue) => {
  const [localStorage, setLocalStorage] = useLocalStorage("items", initialValue);
  return [localStorage, setLocalStorage]
}

export default useCart;