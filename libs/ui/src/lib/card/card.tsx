import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode,
  classes?: string,
  clickable?: boolean,
  loading?: boolean
}

export function Card(props: CardProps) {

  const { clickable, classes, children, loading } = props;

  return (
    <div 
      className={
        `border rounded-md p-4 bg-white
        ${classes} ${clickable && !loading && 'cursor-pointer hover:shadow-md'}
        ${loading && 'animate-pulse'}`
      }
    >
      {!loading && children}
    </div>
  );
}

export default Card;
