import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedTool = ({tool, selectedTools, setSelectedTools,carts, setCarts}) => {
    console.log(selectedTools, "Selected tools")
    const handleDeleteTools = (tool)=>{
        console.log(selectedTools, "selectedTools")
    const filteredTools = selectedTools.filter(selectedtool=>selectedtool.name != tool.name)
    setSelectedTools(filteredTools)
    // const newCoins = parseInt(selectedTools.price)
    // setCoins(coins + newCoins)

    // const updatedTools = ([...selectedTools, tool])
    //     // console.log(updatedTools.length)
    //     setSelectedTools(updatedTools)      
    //     setCarts(carts + updatedTools.length)
  }

    return (
        
        <div>
            <div className="space-y-3 border my-3 rounded-2xl overflow-hidden">
        <div className="card card-side bg-base-100 shadow-sm items-center px-3 ">
      <div>
        <img
          src={tool.icon} className="w-20 object-cover rounded-2xl h-20 p-6"
          alt="Movie"
        />
      </div>
      <div className="card-body ">
        <h2 className="card-title">{tool.name}</h2>
        <p>$ {tool.price}</p>
      </div>
      <div className=" cursor-pointer" onClick={()=>handleDeleteTools(tool)}>
          <span className='text-red-500 font-bold pr-4'>Remove</span>
        </div>
    </div>
    
    </div>
    
        </div>
        
    );
};

export default SelectedTool;