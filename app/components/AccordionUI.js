import React from "react";
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

    return (
        <>
            <div
                onClick={() => handleSetIndex(Id)}
                className={`cursor-pointer w-9/12 p-5 mb-5 rounded-md bg-white shadow-[0_0_10px_0_#080F340F] transition-all duration-100 ${Index === Id && ('border-l-4 border-[#092413] py-3')}`}
            >
                <div className="flex justify-between">
                    <div className="text-[#092413] font-bold">
                        {title}
                    </div>
                    <div className="flex items-center justify-center">
                        {Index !== Id ? (
                            <FiPlusCircle className="w-6 h-6 text-[#092413]" />
                        ) : (
                            <FiMinusCircle className="w-6 h-6 text-[#092413]" />
                        )}
                    </div>
                </div>
                {Index === Id && (
                    <div className="w-4/5 text-[#092413] font-medium mt-2 ">
                        {children}
                    </div>
                )}
            </div>
        </>
    );
};

export default AccordionUI;