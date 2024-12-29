
const Error = ({err}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <h3 className="text-gray-700 leading-[30px] text-[20px] font-semibold">{err}</h3>
    </div>
  )
}

export default Error