const Button = ({type, children}) => {
    return ( 
        <button 
            type={type}
            className="bg-gradient-to-r from-primary to-secondary w-full text-neutral px-6 py-3 rounded-lg font-semibold tracking-wide  transition-all duration-1000 ease-in-out cursor-pointer hover:scale-105">
            {children}
        </button>
    );
}

export default Button;