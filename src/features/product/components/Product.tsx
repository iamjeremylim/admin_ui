import { Profile } from '@/components/profile';
import { singleProduct } from '../../../data';
import '../style/product.scss';

export const Product = () => {
  // Fetch data and send to Single Component

  return (
    <div className="product">
      <Profile {...singleProduct} />
    </div>
  );
};
