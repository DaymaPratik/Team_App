
const Team = ({teamArr,removeEmployee,age}) => {
    return (
        <section  className='team-box w-[93%] min-[400px]:w-[80%] min-[768px]:w-[40%] overflow-y-auto min-[1256px]:w-[30%] 
         h-[400px] min-[768px]:h-[70%] '>
            <h1 className="text-[30px] font-semibold text-center  bg-[#010a129c] text-white py-2">Team List</h1>
           
              <table className="emp-list w-[100%] bg-[#2486e75e] text-center px-3 relative" style={{listStyle:"none"}}>
                    {
                        teamArr.map((item,idx)=>{
                            return(
                                <tr key={idx} className="px-3">
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.id}</td>
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.first_name}</td>
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.age}</td>
                                    <td className="add-btn text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[20px] py-2 px-3 min-[1024px]:px-5 border-b-[1px] border-red-300">
                                    <button className="bg-[#ff2a2a9c] rounded-[10px] hover:bg-[white] transition ease-in duration-200 hover:text-black py-2 px-5" onClick={()=>removeEmployee(item,item.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
              </table>
              <div className="age-box flex justify-between items-center p-4 text-[17] min-[350px]:text-[20px] min-[600px]:text-[25px] font-bold 
              bg-[#010a129c] text-white ">
                <p>Average Age</p>
                <p>{age.toFixed(2)}</p>
              </div>
              
        </section>
      
    );
}

export default Team;
