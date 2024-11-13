import tw from 'tailwind-styled-components';

export const ButtonSecondary = tw.button`
  relative
  overflow-hidden
  rounded
  border
  border-primaryButton
  bg-white
  px-8
  py-1
  text-primaryButton
  shadow-md
  hover:bg-primaryButton
  hover:text-white
  hover:shadow-lg
  transition
  duration-300
  ease-in-out
  active:scale-95
  focus:outline-none
`;
