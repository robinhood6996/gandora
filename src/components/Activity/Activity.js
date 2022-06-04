
import chart from "../../assets/images/Dashboard/chart.jpg";
import nft1 from '../../assets/images/Dashboard/items/nft1.png'
import nft2 from '../../assets/images/Dashboard/items/nft2.png'
import nft3 from '../../assets/images/Dashboard/items/nft3.png'
import nft4 from '../../assets/images/Dashboard/items/nft4.png'
import nft5 from '../../assets/images/Dashboard/items/nft5.png'
import nft6 from '../../assets/images/Dashboard/items/nft6.png'
const Activity = () => {

    return (
        <>
            <div className='container mt-50 '>
                <div className="activity-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="container mx-auto flex justify-center flex-column">
                    <div className="filter-options flex justify-between pt-20">
                        <div className="float-left flex gap-20">
                            <div className="py-2 ">
                                <select className="border-base py-2 px-5">
                                    <option className="py-4" value="">Last 7 Days</option>
                                    <option className="py-4" value="">Last 7 Days</option>
                                </select>
                            </div>
                            <div className="flex gap-20">
                                <div className="filtered-text">
                                    <p className="text-sm">7 DAYS AVG. PRICE</p>
                                    <p className="font-bold text-default">0.0184 ETH</p>
                                </div>
                                <div className="filtered-text">
                                    <p className="text-sm">7 DAYS VOLUMN</p>
                                    <p className="font-bold text-default">27.4875 ETH</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-20">

                            <div className="py-2 ">
                                <select className="border-base py-2 px-5">
                                    <option value="">All Chains</option>
                                </select>
                            </div>
                            <div className="py-2 ">
                                <select className="border-base py-2 px-5">
                                    <option value="">All Types</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center activity-chart ">
                        <div className="mx-auto">
                            <img className='chart-image' src={chart} alt="" />
                        </div>
                    </div>
                </div>

                <div className="acitvity-table mt-50">
                    <div className="activity">
                        <div class="container mx-auto px-4 sm:px-8">
                            <div class="py-8">
                                {/* <div>
                                    <h2 class="text-2xl font-semibold leading-tight">Matches Schedule</h2>
                                </div> */}
                                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr className="heading-row-table">
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        NFT TYPES
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        Item
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        Price
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        Quantity
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        From
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        To
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                        Time
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="data-row">
                                                <tr>
                                                    <td class="px-5 py-5 bg-white text-sm w-2/5">
                                                        <div class="flex items-center">
                                                            {/* <div class="flex-shrink-0 w-30 h-30 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                                    alt="" />
                                                            </div> */}
                                                            <div class="ml-3">
                                                                <p class="text-gray-900 whitespace-no-wrap nft-name">
                                                                    Sales
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm ">
                                                        <div class="flex justify-center items-center">
                                                            <div class="flex-shrink-0 w-45 h-45 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-2"
                                                                    src={nft1}
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-10">
                                                                <p class="text-gray-900 whitespace-no-wrap text-right nft-name text-lg">
                                                                    Bareblockclub#01
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex text-lg">
                                                            <span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.0923 9.11725L8.21729 0.367245C8.15882 0.292543 8.08412 0.23213 7.99885 0.190582C7.91357 0.149034 7.81996 0.127441 7.7251 0.127441C7.63024 0.127441 7.53662 0.149034 7.45135 0.190582C7.36607 0.23213 7.29137 0.292543 7.23291 0.367245L0.357908 9.11725C0.270391 9.22564 0.222656 9.36075 0.222656 9.50006C0.222656 9.63937 0.270391 9.77448 0.357908 9.88287L7.23291 18.6329C7.29137 18.7076 7.36607 18.768 7.45135 18.8095C7.53662 18.8511 7.63024 18.8727 7.7251 18.8727C7.81996 18.8727 7.91357 18.8511 7.99885 18.8095C8.08412 18.768 8.15882 18.7076 8.21729 18.6329L15.0923 9.88287C15.1798 9.77448 15.2275 9.63937 15.2275 9.50006C15.2275 9.36075 15.1798 9.22564 15.0923 9.11725ZM8.3501 2.55475L13.6157 9.25787L8.3501 11.6563V2.55475ZM7.1001 11.6563L1.83447 9.25787L7.1001 2.55475V11.6563ZM7.1001 13.0313V16.4454L2.92822 11.1329L7.1001 13.0313ZM8.3501 13.0313L12.522 11.1329L8.3501 16.4454V13.0313Z" fill="#585858" />
                                                            </svg></span>
                                                            <span className="nft-name ml-5 ">0.60</span><br />
                                                        </p>
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex justify-end">
                                                            <span>$31.43</span>
                                                        </p>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  nft-name text-lg ">
                                                            <span>1</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  text-lg nft-user">
                                                            <span>5YpYEE</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5  bg-white text-sm w-2/5">
                                                        <p class="text-gray-900  text-center whitespace-no-wrap text-lg nft-user">
                                                            6eAoxc
                                                        </p>
                                                    </td>
                                                    <td class="px-5   bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap text-lg nft-name">
                                                            <span>2 miniutes Ago</span>

                                                        </p>

                                                    </td>


                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 bg-white text-sm w-2/5">
                                                        <div class="flex items-center">
                                                            {/* <div class="flex-shrink-0 w-30 h-30 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                                    alt="" />
                                                            </div> */}
                                                            <div class="ml-3">
                                                                <p class="text-gray-900 whitespace-no-wrap nft-name  text-center">
                                                                    Sales
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm ">
                                                        <div class="flex justify-center items-center">
                                                            <div class="flex-shrink-0 w-45 h-45 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-2"
                                                                    src={nft2}
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-10">
                                                                <p class="text-gray-900 whitespace-no-wrap text-right nft-name text-lg">
                                                                    Bareblockclub#01
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex text-lg">
                                                            <span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.0923 9.11725L8.21729 0.367245C8.15882 0.292543 8.08412 0.23213 7.99885 0.190582C7.91357 0.149034 7.81996 0.127441 7.7251 0.127441C7.63024 0.127441 7.53662 0.149034 7.45135 0.190582C7.36607 0.23213 7.29137 0.292543 7.23291 0.367245L0.357908 9.11725C0.270391 9.22564 0.222656 9.36075 0.222656 9.50006C0.222656 9.63937 0.270391 9.77448 0.357908 9.88287L7.23291 18.6329C7.29137 18.7076 7.36607 18.768 7.45135 18.8095C7.53662 18.8511 7.63024 18.8727 7.7251 18.8727C7.81996 18.8727 7.91357 18.8511 7.99885 18.8095C8.08412 18.768 8.15882 18.7076 8.21729 18.6329L15.0923 9.88287C15.1798 9.77448 15.2275 9.63937 15.2275 9.50006C15.2275 9.36075 15.1798 9.22564 15.0923 9.11725ZM8.3501 2.55475L13.6157 9.25787L8.3501 11.6563V2.55475ZM7.1001 11.6563L1.83447 9.25787L7.1001 2.55475V11.6563ZM7.1001 13.0313V16.4454L2.92822 11.1329L7.1001 13.0313ZM8.3501 13.0313L12.522 11.1329L8.3501 16.4454V13.0313Z" fill="#585858" />
                                                            </svg></span>
                                                            <span className="nft-name ml-5 ">0.60</span><br />
                                                        </p>
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex justify-end">
                                                            <span>$31.43</span>
                                                        </p>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  nft-name text-lg ">
                                                            <span>1</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  text-lg nft-user">
                                                            <span>5YpYEE</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5  bg-white  text-center text-sm w-2/5">
                                                        <p class="text-gray-900 whitespace-no-wrap text-lg nft-user">
                                                            6eAoxc
                                                        </p>
                                                    </td>
                                                    <td class="px-5   bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  text-lg nft-name">
                                                            <span>2 miniutes Ago</span>

                                                        </p>

                                                    </td>


                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-5 bg-white text-sm w-2/5">
                                                        <div class="flex items-center">
                                                            {/* <div class="flex-shrink-0 w-30 h-30 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                                    alt="" />
                                                            </div> */}
                                                            <div class="ml-3">
                                                                <p class="text-gray-900  text-center whitespace-no-wrap nft-name">
                                                                    List
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm ">
                                                        <div class="flex justify-center items-center">
                                                            <div class="flex-shrink-0 w-45 h-45 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-2"
                                                                    src={nft3}
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-10">
                                                                <p class="text-gray-900 whitespace-no-wrap text-right nft-name text-lg">
                                                                    Bareblockclub#01
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex text-lg">
                                                            <span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.0923 9.11725L8.21729 0.367245C8.15882 0.292543 8.08412 0.23213 7.99885 0.190582C7.91357 0.149034 7.81996 0.127441 7.7251 0.127441C7.63024 0.127441 7.53662 0.149034 7.45135 0.190582C7.36607 0.23213 7.29137 0.292543 7.23291 0.367245L0.357908 9.11725C0.270391 9.22564 0.222656 9.36075 0.222656 9.50006C0.222656 9.63937 0.270391 9.77448 0.357908 9.88287L7.23291 18.6329C7.29137 18.7076 7.36607 18.768 7.45135 18.8095C7.53662 18.8511 7.63024 18.8727 7.7251 18.8727C7.81996 18.8727 7.91357 18.8511 7.99885 18.8095C8.08412 18.768 8.15882 18.7076 8.21729 18.6329L15.0923 9.88287C15.1798 9.77448 15.2275 9.63937 15.2275 9.50006C15.2275 9.36075 15.1798 9.22564 15.0923 9.11725ZM8.3501 2.55475L13.6157 9.25787L8.3501 11.6563V2.55475ZM7.1001 11.6563L1.83447 9.25787L7.1001 2.55475V11.6563ZM7.1001 13.0313V16.4454L2.92822 11.1329L7.1001 13.0313ZM8.3501 13.0313L12.522 11.1329L8.3501 16.4454V13.0313Z" fill="#585858" />
                                                            </svg></span>
                                                            <span className="nft-name ml-5 ">0.60</span><br />
                                                        </p>
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex justify-end">
                                                            <span>$31.43</span>
                                                        </p>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  nft-name text-lg ">
                                                            <span>1</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 whitespace-no-wrap  text-center text-lg nft-user">
                                                            <span>5YpYEE</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5  bg-white text-sm w-2/5">
                                                        <p class="text-gray-900  text-center whitespace-no-wrap text-lg nft-user">
                                                            6eAoxc
                                                        </p>
                                                    </td>
                                                    <td class="px-5   bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 whitespace-no-wrap  text-center text-lg nft-name">
                                                            <span>2 miniutes Ago</span>

                                                        </p>

                                                    </td>


                                                </tr>


                                                <tr>
                                                    <td class="px-5 py-3 bg-white text-sm w-2/5">
                                                        <div class="flex items-center">
                                                            {/* <div class="flex-shrink-0 w-30 h-30 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                                    alt="" />
                                                            </div> */}
                                                            <div class="ml-3">
                                                                <p class="text-gray-900  text-center whitespace-no-wrap nft-name">
                                                                    Sale
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm ">
                                                        <div class="flex justify-center items-center">
                                                            <div class="flex-shrink-0 w-45 h-45 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-2"
                                                                    src={nft4}
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-10">
                                                                <p class="text-gray-900 whitespace-no-wrap text-right nft-name text-lg">
                                                                    Bareblockclub#01
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex text-lg">
                                                            <span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.0923 9.11725L8.21729 0.367245C8.15882 0.292543 8.08412 0.23213 7.99885 0.190582C7.91357 0.149034 7.81996 0.127441 7.7251 0.127441C7.63024 0.127441 7.53662 0.149034 7.45135 0.190582C7.36607 0.23213 7.29137 0.292543 7.23291 0.367245L0.357908 9.11725C0.270391 9.22564 0.222656 9.36075 0.222656 9.50006C0.222656 9.63937 0.270391 9.77448 0.357908 9.88287L7.23291 18.6329C7.29137 18.7076 7.36607 18.768 7.45135 18.8095C7.53662 18.8511 7.63024 18.8727 7.7251 18.8727C7.81996 18.8727 7.91357 18.8511 7.99885 18.8095C8.08412 18.768 8.15882 18.7076 8.21729 18.6329L15.0923 9.88287C15.1798 9.77448 15.2275 9.63937 15.2275 9.50006C15.2275 9.36075 15.1798 9.22564 15.0923 9.11725ZM8.3501 2.55475L13.6157 9.25787L8.3501 11.6563V2.55475ZM7.1001 11.6563L1.83447 9.25787L7.1001 2.55475V11.6563ZM7.1001 13.0313V16.4454L2.92822 11.1329L7.1001 13.0313ZM8.3501 13.0313L12.522 11.1329L8.3501 16.4454V13.0313Z" fill="#585858" />
                                                            </svg></span>
                                                            <span className="nft-name ml-5 ">0.60</span><br />
                                                        </p>
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex justify-end">
                                                            <span>$31.43</span>
                                                        </p>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  text-center whitespace-no-wrap  nft-name text-lg ">
                                                            <span>1</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 whitespace-no-wrap  text-center text-lg nft-user">
                                                            <span>5YpYEE</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5  bg-white text-sm w-2/5">
                                                        <p class="text-gray-900 whitespace-no-wrap text-lg  text-center nft-user">
                                                            6eAoxc
                                                        </p>
                                                    </td>
                                                    <td class="px-5   bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 whitespace-no-wrap  text-center text-lg nft-name">
                                                            <span>6 miniutes Ago</span>

                                                        </p>

                                                    </td>


                                                </tr>

                                                <tr>
                                                    <td class="px-5 py-5 bg-white text-sm w-2/5">
                                                        <div class="flex items-center">
                                                            {/* <div class="flex-shrink-0 w-30 h-30 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                                                    alt="" />
                                                            </div> */}
                                                            <div class="ml-3">
                                                                <p class="text-gray-900  text-center whitespace-no-wrap nft-name">
                                                                    Sale
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm ">
                                                        <div class="flex justify-center items-center">
                                                            <div class="flex-shrink-0 w-45 h-45 hidden sm:table-cell">
                                                                <img class="w-full h-full rounded-2"
                                                                    src={nft5}
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-10">
                                                                <p class="text-gray-900 whitespace-no-wrap text-right nft-name text-lg">
                                                                    Bareblockclub#01
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex text-lg">
                                                            <span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.0923 9.11725L8.21729 0.367245C8.15882 0.292543 8.08412 0.23213 7.99885 0.190582C7.91357 0.149034 7.81996 0.127441 7.7251 0.127441C7.63024 0.127441 7.53662 0.149034 7.45135 0.190582C7.36607 0.23213 7.29137 0.292543 7.23291 0.367245L0.357908 9.11725C0.270391 9.22564 0.222656 9.36075 0.222656 9.50006C0.222656 9.63937 0.270391 9.77448 0.357908 9.88287L7.23291 18.6329C7.29137 18.7076 7.36607 18.768 7.45135 18.8095C7.53662 18.8511 7.63024 18.8727 7.7251 18.8727C7.81996 18.8727 7.91357 18.8511 7.99885 18.8095C8.08412 18.768 8.15882 18.7076 8.21729 18.6329L15.0923 9.88287C15.1798 9.77448 15.2275 9.63937 15.2275 9.50006C15.2275 9.36075 15.1798 9.22564 15.0923 9.11725ZM8.3501 2.55475L13.6157 9.25787L8.3501 11.6563V2.55475ZM7.1001 11.6563L1.83447 9.25787L7.1001 2.55475V11.6563ZM7.1001 13.0313V16.4454L2.92822 11.1329L7.1001 13.0313ZM8.3501 13.0313L12.522 11.1329L8.3501 16.4454V13.0313Z" fill="#585858" />
                                                            </svg></span>
                                                            <span className="nft-name ml-5 ">0.60</span><br />
                                                        </p>
                                                        <p class="text-gray-900 whitespace-no-wrap text-right flex justify-end">
                                                            <span>$31.43</span>
                                                        </p>
                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 text-center whitespace-no-wrap nft-name text-lg ">
                                                            <span>1</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5 bg-white text-sm w-2/5">

                                                        <p class="text-gray-900  whitespace-no-wrap  text-center text-lg nft-user">
                                                            <span>5YpYEE</span>

                                                        </p>

                                                    </td>
                                                    <td class="px-5  bg-white text-sm w-2/5">
                                                        <p class="text-gray-900 whitespace-no-wrap text-lg nft-user  text-center">
                                                            6eAoxc
                                                        </p>
                                                    </td>
                                                    <td class="px-5   bg-white text-sm w-2/5">

                                                        <p class="text-gray-900 whitespace-no-wrap  text-center text-lg nft-name">
                                                            <span>6 miniutes Ago</span>

                                                        </p>

                                                    </td>


                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Activity;