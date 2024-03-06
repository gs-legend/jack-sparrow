export const Card = ({ children }) => {
    return <div className="flex flex-col gap-2 items-center justify-center w-80 h-80 border-[1px] rounded-lg border-blue-800  transition-all duration-700 hover:scale-110">
        {children}
    </div>
};
