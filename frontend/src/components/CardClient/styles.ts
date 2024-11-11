import tw from 'tailwind-styled-components';

export const CardClientContainer = tw.div`
  flex
  w-full
  flex-wrap
  items-center
  justify-between
  justify-items-center
  border
  border-gray-300
  px-8
  py-2
  shadow-sm
`;

export const CardClientInfo = tw.div`
  mb-4
  flex
  flex-col
  justify-center
`;

export const CardClientInfoText = tw.p`
  text-lg
  font-semibold
`;

export const CardClientInfoSubText = tw.p`
  text-gray-600
`;

export const CardClientStatus = tw.div`
  mb-4
  flex
  items-center
  justify-start
  w-40
`;

export const CardClientStatusText = tw.p`
  ml-1
  text-lg
  font-semibold
  text-primary
  whitespace-normal
  sm:whitespace-nowrap
  sm:max-w-[100px]
`;
