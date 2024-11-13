import tw from 'tailwind-styled-components';

export const StyledContainer = tw.div`
  flex
  flex-col
  mb-4
`;

export const StyledSelect = tw.select<{ $hasError: boolean }>`
  max-w-60
  p-2
  border
  rounded
  focus:outline-none
  focus:ring-2
  bg-white
  text-gray-700
   ${(props) =>
     props.$hasError
       ? 'border-red-500 focus:ring-red-500'
       : 'border-gray-300 focus:ring-blue-500'}
`;

export const StyledLabel = tw.label<{ $hasError: boolean }>`
  font-semibold
  ${(props) => (props.$hasError ? 'text-red-500' : 'text-gray-700')}
`;

export const StyledError = tw.p`
  text-red-500
  text-sm
`;
