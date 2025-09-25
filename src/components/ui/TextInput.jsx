



const TextInput = ({label, placeholder, name, type, id, value, icon, error, success, onChange}) => {
    return ( 
        <div className="flex flex-col space-y-2">
            {label && (
                <label 
                    className="font-medium text-[clamp(1rem,2vw,1.125rem)] text-left flex items-center justify-start gap-x-2"
                    htmlFor={id}>
                        {label} <span>*</span> 
                </label>
            )}
            <div className={`flex items-center border-2 rounded-lg border-solid px-3 py-2 gap-x-2 ${error ? "border-error":  success ? 'border-success' : 'border-secondary'}`}>
                {icon && <span  className={`${error ? 'text-error' : success ? 'text-success' : 'text-secondary'}`}>{icon}</span>}
                <input 
                error={error}
                onChange={onChange}
                type={type} 
                name={name} 
                value={value}
                id={id} 
                placeholder={placeholder} 
                
                className="outline-none flex-1 bg-transparent caret-secondary tracking-wide"/>
                
            </div>

            {error && (
                <p className="text-error text-xs text-left">{error}</p>
            )}
            {success && (
                <p className="text-success text-xs text-left">{success}</p>
            )}
        </div>
    );
}

export default TextInput;