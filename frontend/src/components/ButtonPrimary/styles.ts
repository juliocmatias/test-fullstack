import tw from 'tailwind-styled-components';

export const ButtonPrimary = tw.button`
  relative
  overflow-hidden
  rounded
  border
  border-primaryButton
  bg-primaryButton
  px-8
  py-1
  text-white
  shadow-md
  hover:bg-white
  hover:text-primaryButton
  hover:shadow-lg
  transition
  duration-300
  ease-in-out
  active:scale-95
  focus:outline-none
`;
