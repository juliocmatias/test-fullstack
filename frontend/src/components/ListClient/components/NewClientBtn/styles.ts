import tw from 'tailwind-styled-components';

export const NewClientBtn = tw.button`
  relative
  overflow-hidden
  rounded
  bg-primaryButton
  px-2
  py-1
  text-white
  shadow-md
  hover:bg-tertiaryButton
  hover:shadow-lg
  transition
  duration-300
  ease-in-out
  mr-9
  focus:outline-none
  active:scale-95
`;
