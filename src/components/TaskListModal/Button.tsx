interface ButtonType {
   target: string
   text: string
   variant: string
}

function Button(props : ButtonType) {
   const className = `block text-white bg-${props.variant}-700 hover:bg-${props.variant}-800 focus:ring-4 focus:outline-none focus:ring-${props.variant}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${props.variant}-600 dark:hover:bg-${props.variant}-700 dark:focus:ring-${props.variant}-800`

   return (
      <>
         <button data-modal-target={props.target} data-modal-toggle={props.target} className={className} type="button">
            {props.text}
         </button>
      </>
   );
}

export default Button;