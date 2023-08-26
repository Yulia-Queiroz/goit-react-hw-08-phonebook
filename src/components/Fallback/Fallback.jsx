import { Puff } from 'react-loader-spinner';
import { FallbackContainer } from './FallbackStyled';

const Fallback = () => {
  return (
    <FallbackContainer>
      <Puff
        height="110"
        width="110"
        radius={1}
        color="#fff"
        ariaLabel="puff-loading"
        visible={true}
      />
    </FallbackContainer>
  );
};

export default Fallback;
