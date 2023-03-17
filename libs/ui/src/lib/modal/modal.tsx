import { MouseEvent, ReactNode, useRef } from 'react';

export interface ModalProps {
  open: boolean,
  onClose: () => void,
  closeOnBackDropClick: boolean,
  heading: string,
  children: ReactNode
}

export function Modal(props: ModalProps) {

  const {
    open,
    onClose,
    closeOnBackDropClick = true,
    heading,
    children
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackDropClick = (event: MouseEvent) => {
    if (closeOnBackDropClick && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  }

  return (
    <div>
      {
        open &&
        <div 
          className='absolute w-screen h-screen flex justify-center bg-gray-900/30 items-center'
          onClick={(event) => handleBackDropClick(event)}
        >
          <div 
            className='flex flex-col w-full h-full bg-white px-4 lg:px-6 lg:w-fit lg:w-max-[700px] lg:min-w-[400px] lg:max-h-[500px] lg:h-fit lg:rounded-md'
            ref={modalRef}
          >
            <div className='flex justify-between items-center border-b border-b-slate-200 py-4 lg:pt-6'>
              <div className='text-lg'>{heading}</div>
              <button onClick={() => onClose()} className='rounded-md p-2 hover:bg-slate-200'>Close</button>
            </div>
            <div className='py-4 lg:pb-6 flex-1 overflow-scroll no-scrollbar'>
              {children}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Modal;
