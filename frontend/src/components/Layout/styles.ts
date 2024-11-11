import tw from 'tailwind-styled-components';

export const Container = tw.div`
  mx-auto
  w-full
  max-w-4xl
  lg:max-w-5xl
  px-5
`;

export const Content = tw.div`
  mb-5
  flex
  flex-row
  items-center
  justify-start
  border-b
  border-gray-300
  pb-5
  pt-20
`;

export const Title = tw.h1`
  ml-2
  text-2xl
`;
