import { useState } from 'react';

const Wallet = ({walletInfo}) => {
  return (
    <>
      <div className='wallet-container'>
        <div className='label'>Wallet Address</div>
        <div className='profile-info'>{walletInfo.address}</div>
      </div>
      <style jsx>{`
        .label {
          font-size: 12px;
          color: #6851ff;
        }
        .profile-info {
          font-size: 17px;
          word-wrap: break-word;
        }
        .wallet-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.5em;
          border: solid 1px #eee;
          padding: 0.5em;
        }
      `}</style>
    </>
  );
};

export default Wallet;
