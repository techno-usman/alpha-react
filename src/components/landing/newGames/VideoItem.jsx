import React from 'react';
import Classes from '../../scss/VideoItem.module.scss';
import BannerOneImg from '../../../assets/images/banner.webp';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play.svg';

const VideoItem = () => {
  return (
    <div className={Classes.videoItemWrapper}>
      <img src={BannerOneImg} alt='BannerOneImg' className={Classes.imgItem} />
      <div className={`position-absolute p-5 ${Classes.metaInfo}`}>
        <h1 className={`${Classes.title} text-white`}>THE WITCHER 3</h1>
        <div className='d-flex align-items-center gap-2' >
          <PlayIcon />
          <p className='text-white mb-0'>View Demo</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
