import tw from 'tailwind-styled-components';

export const ButtonPrimary = tw.button`
  rounded
  border
  border-primaryButton
  bg-primaryButton
  px-8
  py-1
  text-white
  hover:bg-white
  hover:text-primaryButton
  transition
  duration-300
  ease-in-out
`;
