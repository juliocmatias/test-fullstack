import tw from 'tailwind-styled-components';

export const StyledContainer = tw.div`
  flex
  flex-col
  mb-4
`;

export const StyledSelect = tw.select`
  max-w-60
  p-2
  border
  rounded
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  bg-white
  text-gray-700
`;

export const StyledLabel = tw.label`
  text-gray-700
  font-semibold
`;

export const StyledError = tw.p`
  text-red-500
  text-sm
`;
