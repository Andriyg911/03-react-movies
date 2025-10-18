import { useRef } from 'react';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit?: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleAction(formData: FormData) {
    const query = formData.get('query')?.toString().trim();

    if (!query) {
      toast.error('Введіть запит для пошуку');
      return;
    }

    if (onSubmit) {
      onSubmit(query);
    }
  }

  return (
    <form action={handleAction}>
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
