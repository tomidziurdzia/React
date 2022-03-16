const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 font-bold mb-3 rounded-xl'>
      <p>{children}</p>
    </div>
  )
}

export default Error