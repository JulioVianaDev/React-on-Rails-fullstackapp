export const Image =({src,handleClick})=>{
  return(
    <div onClick={handleClick}>
      <img src={src} alt="" />
    </div>
  )
}