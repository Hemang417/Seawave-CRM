import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData } from "@/data";
  
  export function JobExport() {
    return (      
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div>
              {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class=" w-32 h-8 mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job No./BL No." /> */}
              
          </div>
          
<form>
    <div class="grid gap-2 mb-3 md:grid-cols-3 m-2">
        <div>
            <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Received On</label>
            <input type="date" id="job_received_on" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="job_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job No.</label>
            <input type="text" id="job_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exporter Name</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mode</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select</option>
                <option value="US">Sea</option>
                <option value="CA">Air</option>
            </select>
            {/* <label for="mode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mode</label>
            <input type="text" id="mode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> */}
            
        </div>
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Container Type</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select</option>
                <option value="US">20</option>
                <option value="CA">40</option>
                <option value="CA">LCL</option>
            </select>
            {/* <label for="container_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Container Type</label>
            <input type="text" id="container_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> */}
        </div>
        <div>
            <label for="sb_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SB No.</label>
            <input type="text" id="sb_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="sb_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SB Date</label>
            <input type="date" id="sb_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="custom_house" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custom House</label>
            <input type="text" id="custom_house" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="destination_port" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination Port</label>
            <input type="text" id="destination_port" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="no_of_container" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. of Conatiner</label>
            <input type="text" id="no_of_container" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        {/* <div>
            <label for="shipping_line" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Line/Carrier</label>
            <input type="text" id="shipping_line" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="cfs_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CFS Name</label>
            <input type="text" id="cfs_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="custom_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custom Location</label>
            <input type="text" id="custom_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> */}
        {/* <div>
            <label for="remarks" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Remarks</label>
            <input type="text" id="remarks" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> */}
    </div>
    <div class="mb-5 h-40 m-2">
        <label for="remarks" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remarks</label>
        <input type="text" id="remarks" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-36" placeholder="" required />
    </div> 
    {/* <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> */}
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">Submit</button>
</form>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  {/* <th scope="col" class="p-4">
                      <div class="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                      </div>
                  </th> */}
                  {/* <th scope="col" class="px-6 py-3">
                      Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Accesories
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Available
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Weight
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Action
                  </th> */}
              </tr>
          </thead>
          {/* <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">
                      Silver
                  </td>
                  <td class="px-6 py-4">
                      Laptop
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $2999
                  </td>
                  <td class="px-6 py-4">
                      3.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                      White
                  </td>
                  <td class="px-6 py-4">
                      Laptop PC
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $1999
                  </td>
                  <td class="px-6 py-4">
                      1.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">
                      Black
                  </td>
                  <td class="px-6 py-4">
                      Accessories
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      $99
                  </td>
                  <td class="px-6 py-4">
                      0.2 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Watch
                  </th>
                  <td class="px-6 py-4">
                      Black
                  </td>
                  <td class="px-6 py-4">
                      Watches
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      $199
                  </td>
                  <td class="px-6 py-4">
                      0.12 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple iMac
                  </th>
                  <td class="px-6 py-4">
                      Silver
                  </td>
                  <td class="px-6 py-4">
                      PC
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $2999
                  </td>
                  <td class="px-6 py-4">
                      7.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple AirPods
                  </th>
                  <td class="px-6 py-4">
                      White
                  </td>
                  <td class="px-6 py-4">
                      Accessories
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $399
                  </td>
                  <td class="px-6 py-4">
                      38 g
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      iPad Pro
                  </th>
                  <td class="px-6 py-4">
                      Gold
                  </td>
                  <td class="px-6 py-4">
                      Tablet
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $699
                  </td>
                  <td class="px-6 py-4">
                      1.3 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Keyboard
                  </th>
                  <td class="px-6 py-4">
                      Black
                  </td>
                  <td class="px-6 py-4">
                      Accessories
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      $99
                  </td>
                  <td class="px-6 py-4">
                      453 g
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple TV 4K
                  </th>
                  <td class="px-6 py-4">
                      Black
                  </td>
                  <td class="px-6 py-4">
                      TV
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      $179
                  </td>
                  <td class="px-6 py-4">
                      1.78 lb.
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                      <div class="flex items-center">
                          <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                      </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      AirTag
                  </th>
                  <td class="px-6 py-4">
                      Silver
                  </td>
                  <td class="px-6 py-4">
                      Accessories
                  </td>
                  <td class="px-6 py-4">
                      Yes
                  </td>
                  <td class="px-6 py-4">
                      No
                  </td>
                  <td class="px-6 py-4">
                      $29
                  </td>
                  <td class="px-6 py-4">
                      53 g
                  </td>
                  <td class="flex items-center px-6 py-4 space-x-3">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
          </tbody> */}
      </table>
  </div>
  
    );
  }
  
  export default JobExport;
  