import React from 'react';
import ModalVideo from 'react-modal-video';
import FittedImage from 'react-fitted-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IVideoModalProps {
  videoId: string;
  photo: TexImageSource;
}

interface IVideoModalState {
  isOpen: boolean;
}

class VideoModal extends React.Component<IVideoModalProps, IVideoModalState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { videoId, photo } = this.props;
    const { isOpen } = this.state;
    return (
      <section id="tratamento-section" className="infoContainerFlex position-relative">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="h-100 w-100" onClick={this.openModal}>
          <FittedImage src={photo} fit="cover" />
          <FontAwesomeIcon
            icon="play-circle"
            className="position-absolute"
            style={{ top: '50%', left: '50%' }}
            size="5x"
          />
        </div>
      </section>
    );
  }
}

export default VideoModal;
