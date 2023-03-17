export interface SearchIconProps {
  size: number;
}

export const SearchIcon = ({size}: SearchIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.35 8.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM8.6 2.5a6.25 6.25 0 1 0 3.847 11.176l3.481 3.48a1 1 0 0 0 1.415-1.413l-3.536-3.536A6.25 6.25 0 0 0 8.6 2.5Z"/></svg>
  );
}
