import { useRef } from 'react';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit?: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = inputRef.current?.value.trim();
    if (!query) {
      toast.error('Введіть запит для пошуку');
      return;
    }

    if (onSubmit) {
      onSubmit(query);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        ref={inputRef}
        placeholder="Пошук фільмів..."
        autoComplete="off"
      />
      <button type="submit">Пошук</button>
    </form>
  );
}
