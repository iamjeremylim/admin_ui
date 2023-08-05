import { Profile } from '@/components/profile';
import { singleUser } from '../../../data';
import '../style/user.scss';

export const User = () => {
  // Fetch data and send to Single Component

  return (
    <div className="user">
      <Profile {...singleUser} />
    </div>
  );
};
