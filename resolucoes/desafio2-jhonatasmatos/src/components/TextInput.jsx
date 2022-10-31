export function TextInputInput({id, type, placeholder, width, onChange}){
    return (  
        <div className={`flex items-center rounded ${width} h-12 px-2 bg-white focus-within:ring-2 ring-green-900`}>
            <input className={`bg-transparent ${width} flex-1 px-1 text-md text-green-900 outline-none`} onChange={onChange} type={type} id={id} placeholder={placeholder} />
        </div>
    )
}




