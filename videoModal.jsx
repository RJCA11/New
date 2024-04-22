import { Modal } from "antd";

const VideoModal = ({ visible, onCancel, selectedNodeImage, videoPlaying }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true} // Optional: Destroys modal content on close to stop video
      width={800}
    >
      <div>
        {selectedNodeImage && (
          <video
            src={selectedNodeImage}
            alt="3D VIDEO"
            style={{ width: "100%" }}
            autoPlay={videoPlaying}
            loop
            muted
          />
        )}
      </div>
    </Modal>
  );
};

export default VideoModal;
