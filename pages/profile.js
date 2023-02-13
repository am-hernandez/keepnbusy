import { useContext, useState } from 'react';
import { UserContext } from '../lib/UserContext';
import Loading from '../components/loading';
import Wallet from '../components/wallet';

const Profile = () => {
  const [user] = useContext(UserContext);
  const [showWallet, setShowWallet] = useState(false);

  function handleShowWallet () {
    setShowWallet(!showWallet);
  }

  return (
    <div className='user-container'>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            <div className='label'>Email</div>
            <div className='profile-info'>{user.email}</div>

            <div className='label'>User Id</div>
            <div className='profile-info'>{user.issuer}</div>

            <div className='label'>MFA</div>
            <div className='profile-info'>{`${user.isMfaEnabled}`}</div>

            <div className='label'>Phone</div>
            <div className='profile-info'>{`${user.phoneNumber}`}</div>

            

            <button onClick={handleShowWallet}>Show Wallet</button>
            {showWallet ? (
              <Wallet walletInfo={{address: user.publicAddress}}/>
            ):("")}
          </>
        )
      )}
      <style jsx>{`
        .user-container {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
        .label {
          font-size: 12px;
          color: #6851ff;
          margin: 30px 0 5px;
        }
        .profile-info {
          font-size: 17px;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default Profile;
