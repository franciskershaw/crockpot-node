import Icon from '../../components/icons/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const PlusMinus = ({ addInput, minusInput, classes }) => {
  const inputClasses = classes ? ` ${classes}` : '';

  return (
    <div className={`flex justify-center${inputClasses}`}>
      <div onClick={minusInput}>
        <Icon classes={'mx-2'} type={'secondary'}>
          <FontAwesomeIcon icon={faMinus} />
        </Icon>
      </div>
      <div onClick={addInput}>
        <Icon classes={'mx-2'} type={'secondary'}>
          <FontAwesomeIcon icon={faPlus} />
        </Icon>
      </div>
    </div>
  );
};

export default PlusMinus
