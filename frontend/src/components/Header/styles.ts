import tw from 'tailwind-styled-components';

export const Container = tw.header`
	fixed 
	z-40 
	h-16 
	flex 
	w-full 
	items-center 
	bg-secundary 
	shadow-lg 
	backdrop-blur-md 
	transition-all 
	duration-300 
	ease-in-out
`

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-center
  px-4
`;