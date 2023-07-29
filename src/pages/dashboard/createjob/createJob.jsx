import React from 'react'
import { JobImport } from './jobimport';
import { JobExport } from './jobexport';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "../../../../public/css/textcolor.css";

export function CreateJob() {
    const [isshown, setIsShown] = useState("import");
    // const [textColor, setTextColor] = useState("textgray");
    // const handletextcolor = () => {
    //     setTextColor(textColor === 'blue' ? 'black' : 'blue');
    //     setTextColor(textblue)

    // }
    // const [isActive, setIsActive] = useState(false);
    // const handleActive = event => {
    //     setIsActive(now => !now);
    // }
    // const handleClick = event => {
    //     setIsShown(current => !current);
    // }
    // state={
    //     isEdit:false,
    // }
  return (  
    <div>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2" onClick={() => {setIsShown("import")}}>
                <div class="inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 hover:bg-gray-50">
                    Import
                    {/* {isshown} */}
                </div>
            </li>
            <li class="mr-2" onClick={() => {setIsShown("export")}}>
                <div class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                    Export
                    {/* {isshown && <JobExport />} */}
                </div>
            </li>
        </ul>
        {/* {isActive === true && <JobImport />} */}
        {isshown === "import" && <JobImport />}
        {isshown === "export" && <JobExport />}
        {/* {isActive && <JobImport />} */}
        {/* {if(handleActive == isActive) } */}
        {/* {isActive ? isshown && <JobImport /> : !isActive}
        {!isshown ? <JobExport /> : isshown} */}
        {/* {(this.state.isEdit) ? <JobImport /> : <JobExport />} */}
        {/* <JobImport /> */}
        {/* <JobExport /> */}
    </div>
  )
}

export default CreateJob;