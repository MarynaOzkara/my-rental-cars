import { ButtonLearnMore } from "./Buttons.styled";

const LearnMoreBtn = ({ setIsModalOpen }) => {
  return (
    <ButtonLearnMore onClick={() => setIsModalOpen(true)}>
      Learn more
    </ButtonLearnMore>
  );
};

export default LearnMoreBtn;
