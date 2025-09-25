

const TextAreaInput = ({label, placeholder, name, id, error, success, value, cols = 5, rows = 5, onChange}) => {
    return (  
        <div className="flex flex-col space-y-2">
            {label && (
                <label 
                    className="font-medium text-[clamp(1rem,2vw,1.125rem)] text-left flex items-center justify-start gap-x-2"
                    htmlFor={id}>
                        {label} <span>*</span> 
                </label>
                )}
            
                <textarea 
                error={error}
                onChange={onChange}
                name={name} 
                id={id}
                placeholder={placeholder}
                value={value}
                cols={cols}
                rows={rows}
                className={`outline-none border-2 border-solid px-3 py-2 caret-secondary rounded-lg ${error ? 'border-error': success ? 'border-success' : 'border-secondary'}`}></textarea>
            
            {error && (
                <p className="text-error text-xs text-left">{error}</p>
            )}
            {success && (
                <p className="text-success text-xs text-left">{success}</p>
            )}
        </div>
    );
}

export default TextAreaInput;