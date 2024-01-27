import React, { useState } from "react";
import { Button, Modal } from "antd";

const SellModal = ({ giftId }: { giftId: string }) => {
  console.log(giftId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const modalFooter = [
    <Button key="cancel" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button key="ok" onClick={handleOk}>
      OK
    </Button>,
  ];
  return (
    <div>
      {" "}
      <Button onClick={showModal}>Sell</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={modalFooter}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default SellModal;
