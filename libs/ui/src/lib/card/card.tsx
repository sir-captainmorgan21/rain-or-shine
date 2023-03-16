import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode,
  className: string,
  clickable: boolean
}

export function Card(props: CardProps) {

  const { clickable, className, children } = props;

  return (
    <div className={`border rounded-md p-4 ${className} ${clickable ? 'cursor-pointer hover:shadow-md' : ''}`}>
      {children}
    </div>
  );
}

export default Card;
