import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

export function useToggleItemInArrayLocalStorage<T>(
  name: string,
): [T[], (item: T) => void] {
  const storedCarts = useReadLocalStorage<T[] | null>(name);
  const [carts, setCarts]
    = useLocalStorage<T[]>(name, storedCarts === null ? [] : storedCarts);

  const toggleCart = (item: T) => {
    const index = carts.indexOf(item);
    const newArray = [...carts];

    newArray.splice(index, 1);

    const newCarts = index !== -1 ? newArray : [...carts, item];

    setCarts(newCarts);
  };

  return [carts, toggleCart];
}
