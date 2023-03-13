import { BsArrowDownUp, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';
import { Direction, Size } from '../../utils/typings';

type Props = {
  direction: Direction;
  displaySize: Size;
  onClick?: () => void;
};

export default function index(props: Props) {
  const { direction, displaySize, onClick } = props;
  function convertSize() {
    let result = '';
    switch (displaySize) {
      case Size.NORMAL:
        result = '20';
        break;
      case Size.LARGE:
        result = '30';
        break;
      case Size.SMALL:
        result = '15';
        break;
      default:
        result = '20';
    }
    return result;
  }

  function getArrowDirection() {
    if (direction === Direction.UP) {
      return <BsArrowUp size={convertSize()} />;
    }
    if (direction === Direction.DOWN) {
      return <BsArrowDown size={convertSize()} />;
    }
    return <BsArrowDownUp size={convertSize()} />;
  }
  return (
    <div>
      <RoundButton onClick={onClick}>{getArrowDirection()}</RoundButton>
    </div>
  );
}

const RoundButton = styled.button`
  padding: 1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => {
      return `${theme.color.SECONDARY}`;
    }};
  }
  &:active {
    background-color: ${({ theme }) => {
      return `${theme.color.PRIMARY}`;
    }};
  }
`;
