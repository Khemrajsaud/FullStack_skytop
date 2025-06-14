import  'react'
import data from '../contentdata/data'

const Teams = () => {
  return (   
  
  <div className=' mt-[150px] mb-10'>
      <h1  className='text-center font-semibold text-2xl py-6'>Meet Our Teams</h1>
 
      
     <div className='flex items-center justify-center gap-8'>
    

      {data.map((item,index)=>(

        <div key={index} className=' bg-sky-200 shadow-md rounded-md translate-x-5 p-3 ' >
          <img className=' w-[250px] rounded-md hover:translate-x-4 ease-in ' src={item.image} alt="" />
           <h3 className='text-center text-xl font-semibold py-2'>{item.name}</h3>
          <p className='text-center  '>{item.role}</p>
         
        </div>
      ))}

     </div>
    </div>
  )
}

export default Teams
