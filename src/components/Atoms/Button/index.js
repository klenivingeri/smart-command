export const ButtonBox = ({ style, children }) => {
return <div className={`${ style } flex items-center justify-center px-2 h-[40px] min-w-[45px] rounded-md cursor-pointer`}>{children} </div>
}