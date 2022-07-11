import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import userProfile from '../services/userProfile';
import { setFirstName, setLastName } from '../features/profile/profileSlice';
import Account from '../components/Account';
import { accountsList } from '../data/accountsList';
import ProfileInformations from '../components/ProfileInformations';
import ProfileEditor from '../components/ProfileEditor';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);
  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const editMode = useSelector((state) => state.profile.editMode);

  useEffect(() => {
    if (!isUserLogedIn) {
      navigate('/');
      return;
    }
    document.title = 'Argent Bank - Profile Page';
    userProfile(token).then((data) => {
      if (firstName === null) {
        dispatch(setFirstName(data.body.firstName));
      }
      if (lastName === null) {
        dispatch(setLastName(data.body.lastName));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        {editMode ? <ProfileEditor /> : <ProfileInformations />}
        <h2 className="sr-only">Accounts</h2>
        {accountsList.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
