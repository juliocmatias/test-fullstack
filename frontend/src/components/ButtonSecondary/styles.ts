import tw from 'tailwind-styled-components';

export const ButtonSecondary = tw.button`
  rounded
  border
  border-primaryButton
  bg-white
  px-8
  py-1
  text-primaryButton
  hover:bg-primaryButton
  hover:text-white
  transition
  duration-300
  ease-in-out
`;
