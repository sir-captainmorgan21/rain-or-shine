import type { ComponentStory, Meta } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalProps } from './modal';

interface ModalStoryContainerProps {
  children: any
}

const ModalStoryContainer = ({children}: ModalStoryContainerProps) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      {children && children({open: showModal, onClose: toggleModal})}
      <button className='rounded-md bg-green-500 p-3' onClick={toggleModal}>Open Modal</button>
    </div>
  );
}

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
  argTypes: {
    onClose: { action: 'onClose executed!' },
  }
};
export default Story;

const Template: ComponentStory<typeof Modal> = (args) => (
  <ModalStoryContainer>
    {
      ({open, onClose}: ModalProps) => (
        <Modal {...args} open={open} onClose={onClose}></Modal>
      )
    }
  </ModalStoryContainer>
);

const modalContent = (<div className='border border-dashed h-[300px] border-green-600 rounded-sm'></div>);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  heading: 'Modal Heading',
  children: modalContent,
}

export const CloseOnBackDropClick = Template.bind({});
CloseOnBackDropClick.args = {
  heading: 'Modal Heading',
  children: modalContent
}

export const NoCloseOnBackDropClick = Template.bind({});
NoCloseOnBackDropClick.args = {
  heading: 'Modal Heading',
  children: modalContent,
  closeOnBackDropClick: false
}

export const LargeContent = Template.bind({});
LargeContent.args = {
  heading: 'Modal Heading',
  children: <div className='border border-dashed h-[600px] border-green-600 rounded-sm'></div>
}
