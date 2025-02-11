export const ButtonBox = ({ style, children, handleAction }) => {
return <a onClick={() => handleAction()} className={`${ style } flex items-center justify-center px-4 h-[40px] rounded-md cursor-pointer`}>{children} </a>
}