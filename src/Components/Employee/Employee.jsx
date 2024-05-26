
const Employee = ({empArrrr,addEmployee}) => {
  
    return (
        <section  className="emp-box w-[93%] min-[400px]:w-[80%] min-[768px]:w-[40%] min-[1256px]:w-[30%] max-h-[70%] h-[400px]
        min-[768px]:h-[70%]  overflow-y-auto">
            <h1 className="py-2 text-[30px] font-semibold text-center bg-[#010a129c] text-white">Employee List</h1>
              <table className="emp-list px-3 bg-[#2486e75e] w-[100%] text-center  h-[100%]" style={{listStyle:"none"}}>
                    {
                        empArrrr.map((item,idx)=>{
                            return(
                                <tr key={idx} className="px-3">
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.id}</td>
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.first_name}</td>
                                    <td className="text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[25px] font-semibold border-b-[1px] border-red-300">{item.age}</td>
                                    <td className="add-btn text-[15px] min-[350px]:text-[20px] min-[1024px]:text-[20px] py-2 px-3 min-[1024px]:px-5 border-b-[1px] border-red-300">
                                    <button className="bg-[#08ed085e] rounded-[10px] hover:bg-[white] transition ease-in duration-200 hover:text-black py-2 px-5 cursor-pointer" onClick={()=>addEmployee(item,item.id)}>Add</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
              </table>
        </section>
       
    );
}

export default Employee;
