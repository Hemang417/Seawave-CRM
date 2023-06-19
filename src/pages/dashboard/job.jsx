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
  
  export function Job() {
    return (
      // <div className="mt-12 mb-8 flex flex-col gap-12">
      //   <Card>
      //     <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
      //       <Typography variant="h6" color="white">
      //         Authors Table
      //       </Typography>
      //     </CardHeader>
      //     <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
      //       <table className="w-full min-w-[640px] table-auto">
      //         <thead>
      //           <tr>
      //             {["author", "function", "status", "employed", ""].map((el) => (
      //               <th
      //                 key={el}
      //                 className="border-b border-blue-gray-50 py-3 px-5 text-left"
      //               >
      //                 <Typography
      //                   variant="small"
      //                   className="text-[11px] font-bold uppercase text-blue-gray-400"
      //                 >
      //                   {el}
      //                 </Typography>
      //               </th>
      //             ))}
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {authorsTableData.map(
      //             ({ img, name, email, job, online, date }, key) => {
      //               const className = `py-3 px-5 ${
      //                 key === authorsTableData.length - 1
      //                   ? ""
      //                   : "border-b border-blue-gray-50"
      //               }`;
  
      //               return (
      //                 <tr key={name}>
      //                   <td className={className}>
      //                     <div className="flex items-center gap-4">
      //                       <Avatar src={img} alt={name} size="sm" />
      //                       <div>
      //                         <Typography
      //                           variant="small"
      //                           color="blue-gray"
      //                           className="font-semibold"
      //                         >
      //                           {name}
      //                         </Typography>
      //                         <Typography className="text-xs font-normal text-blue-gray-500">
      //                           {email}
      //                         </Typography>
      //                       </div>
      //                     </div>
      //                   </td>
      //                   <td className={className}>
      //                     <Typography className="text-xs font-semibold text-blue-gray-600">
      //                       {job[0]}
      //                     </Typography>
      //                     <Typography className="text-xs font-normal text-blue-gray-500">
      //                       {job[1]}
      //                     </Typography>
      //                   </td>
      //                   <td className={className}>
      //                     <Chip
      //                       variant="gradient"
      //                       color={online ? "green" : "blue-gray"}
      //                       value={online ? "online" : "offline"}
      //                       className="py-0.5 px-2 text-[11px] font-medium"
      //                     />
      //                   </td>
      //                   <td className={className}>
      //                     <Typography className="text-xs font-semibold text-blue-gray-600">
      //                       {date}
      //                     </Typography>
      //                   </td>
      //                   <td className={className}>
      //                     <Typography
      //                       as="a"
      //                       href="#"
      //                       className="text-xs font-semibold text-blue-gray-600"
      //                     >
      //                       Edit
      //                     </Typography>
      //                   </td>
      //                 </tr>
      //               );
      //             }
      //           )}
      //         </tbody>
      //       </table>
      //     </CardBody>
      //   </Card>
      //   <Card>
      //     <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
      //       <Typography variant="h6" color="white">
      //         Projects Table
      //       </Typography>
      //     </CardHeader>
      //     <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
      //       <table className="w-full min-w-[640px] table-auto">
      //         <thead>
      //           <tr>
      //             {["companies", "members", "budget", "completion", ""].map(
      //               (el) => (
      //                 <th
      //                   key={el}
      //                   className="border-b border-blue-gray-50 py-3 px-5 text-left"
      //                 >
      //                   <Typography
      //                     variant="small"
      //                     className="text-[11px] font-bold uppercase text-blue-gray-400"
      //                   >
      //                     {el}
      //                   </Typography>
      //                 </th>
      //               )
      //             )}
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {projectsTableData.map(
      //             ({ img, name, members, budget, completion }, key) => {
      //               const className = `py-3 px-5 ${
      //                 key === projectsTableData.length - 1
      //                   ? ""
      //                   : "border-b border-blue-gray-50"
      //               }`;
  
      //               return (
      //                 <tr key={name}>
      //                   <td className={className}>
      //                     <div className="flex items-center gap-4">
      //                       <Avatar src={img} alt={name} size="sm" />
      //                       <Typography
      //                         variant="small"
      //                         color="blue-gray"
      //                         className="font-bold"
      //                       >
      //                         {name}
      //                       </Typography>
      //                     </div>
      //                   </td>
      //                   <td className={className}>
      //                     {members.map(({ img, name }, key) => (
      //                       <Tooltip key={name} content={name}>
      //                         <Avatar
      //                           src={img}
      //                           alt={name}
      //                           size="xs"
      //                           variant="circular"
      //                           className={`cursor-pointer border-2 border-white ${
      //                             key === 0 ? "" : "-ml-2.5"
      //                           }`}
      //                         />
      //                       </Tooltip>
      //                     ))}
      //                   </td>
      //                   <td className={className}>
      //                     <Typography
      //                       variant="small"
      //                       className="text-xs font-medium text-blue-gray-600"
      //                     >
      //                       {budget}
      //                     </Typography>
      //                   </td>
      //                   <td className={className}>
      //                     <div className="w-10/12">
      //                       <Typography
      //                         variant="small"
      //                         className="mb-1 block text-xs font-medium text-blue-gray-600"
      //                       >
      //                         {completion}%
      //                       </Typography>
      //                       <Progress
      //                         value={completion}
      //                         variant="gradient"
      //                         color={completion === 100 ? "green" : "blue"}
      //                         className="h-1"
      //                       />
      //                     </div>
      //                   </td>
      //                   <td className={className}>
      //                     <Typography
      //                       as="a"
      //                       href="#"
      //                       className="text-xs font-semibold text-blue-gray-600"
      //                     >
      //                       <EllipsisVerticalIcon
      //                         strokeWidth={2}
      //                         className="h-5 w-5 text-inherit"
      //                       />
      //                     </Typography>
      //                   </td>
      //                 </tr>
      //               );
      //             }
      //           )}
      //         </tbody>
      //       </table>
      //     </CardBody>
      //   </Card>
      // </div>
      
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div>
              {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
              <input type="text" id="first_name" class=" w-32 h-8 mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job No./BL No." />
              
          </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="p-4">
                      <div class="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                      </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
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
                  </th>
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
  
  export default Job;
  