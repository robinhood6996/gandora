import React from 'react';
import nft1 from '../../assets/images/Dashboard/items/nft1.png';
import nft2 from '../../assets/images/Dashboard/items/nft2.png';
import nft3 from '../../assets/images/Dashboard/items/nft3.png';
import nft4 from '../../assets/images/Dashboard/items/nft4.png';
import nft5 from '../../assets/images/Dashboard/items/nft5.png';
import nft6 from '../../assets/images/Dashboard/items/nft6.png';
import { BsArrowDownLeft } from 'react-icons/bs';
const Offers = () => {
    return (
        <div>
            <div className='container mx-auto mt-50 '>
                <div className="text-default page-header mb-3 flex justify-start items-center gap-2 font-Rajdhani font-semibold">
                    <div>
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.9142 10.0344L1.27396 18.7782C1.16973 18.884 1.03685 18.9561 0.892123 18.9853C0.7474 19.0146 0.597346 18.9998 0.460951 18.9428C0.324556 18.8857 0.207954 18.789 0.1259 18.6648C0.0438466 18.5407 3.13491e-05 18.3947 0 18.2453V0.754659C3.13491e-05 0.605302 0.0438466 0.459312 0.1259 0.335166C0.207954 0.21102 0.324556 0.114299 0.460951 0.0572441C0.597346 0.000189619 0.7474 -0.0146328 0.892123 0.0146519C1.03685 0.0439366 1.16973 0.116012 1.27396 0.221757L9.9142 8.96559C9.98367 9.0357 10.0388 9.119 10.0764 9.2107C10.114 9.30241 10.1333 9.40071 10.1333 9.5C10.1333 9.59928 10.114 9.69759 10.0764 9.7893C10.0388 9.881 9.98367 9.9643 9.9142 10.0344Z" fill="#EEBC4E" />
                        </svg>
                    </div>
                    <div>
                        Dashboard
                    </div>
                </div>

                {/* Filter Button Start*/}
                <div className="filter-buttons-group mx-100 mb-30">
                    <div className="filter-buttons flex justify-around">
                        <button className="flex gap-2 py-2 px-5 rounded-2 my-auto border-10 border-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M17.5348 7.90146C17.7285 7.75721 17.8721 7.55597 17.9456 7.32597C18.0191 7.09596 18.0188 6.84872 17.9446 6.61891C17.8705 6.3891 17.7263 6.18825 17.5323 6.04452C17.3383 5.90079 17.1042 5.82139 16.8627 5.81744L12.1737 5.6403C12.1506 5.63871 12.1285 5.63049 12.11 5.61662C12.0916 5.60276 12.0775 5.58384 12.0695 5.56215L10.4492 1.18571C10.3677 0.963056 10.2199 0.770794 10.0256 0.634957C9.83128 0.49912 9.59994 0.42627 9.36286 0.42627C9.12579 0.42627 8.89444 0.49912 8.70014 0.634957C8.50584 0.770794 8.35798 0.963056 8.27657 1.18571L6.66145 5.57778C6.65347 5.59947 6.63939 5.61838 6.6209 5.63225C6.60241 5.64612 6.58031 5.65434 6.55725 5.65593L1.86821 5.83307C1.62678 5.83702 1.39264 5.91642 1.19861 6.06015C1.00459 6.20388 0.860411 6.40473 0.786298 6.63454C0.712185 6.86435 0.711853 7.11159 0.785347 7.3416C0.858842 7.5716 1.00248 7.77284 1.19612 7.91709L4.87441 10.8087C4.89282 10.8232 4.90658 10.8427 4.91398 10.8649C4.92139 10.8872 4.92212 10.9111 4.91609 10.9337L3.65005 15.4196C3.58444 15.648 3.5908 15.8911 3.66825 16.1158C3.7457 16.3405 3.89049 16.5358 4.08292 16.6753C4.27535 16.8148 4.50608 16.8916 4.74372 16.8953C4.98135 16.899 5.21436 16.8294 5.41104 16.696L9.29774 14.091C9.31688 14.0778 9.3396 14.0707 9.36286 14.0707C9.38613 14.0707 9.40884 14.0778 9.42799 14.091L13.3147 16.696C13.5087 16.834 13.7409 16.9081 13.979 16.9081C14.217 16.9081 14.4492 16.834 14.6432 16.696C14.8357 16.5579 14.9807 16.3634 15.0581 16.1395C15.1355 15.9156 15.1417 15.6732 15.0757 15.4456L13.7992 10.9441C13.7925 10.9215 13.7928 10.8974 13.8003 10.875C13.8077 10.8526 13.8219 10.8331 13.8409 10.8191L17.5348 7.90146Z"
                                    fill="#585858" />
                            </svg>
                            ITEM
                        </button>
                        <button className="flex gap-2 py-2 px-5 rounded-2 my-auto border-10 border-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M15.0781 0.5H2.70312C1.56875 0.5 0.640625 1.42812 0.640625 2.5625V14.9375C0.640625 16.0719 1.56875 17 2.70312 17H15.0781C16.2125 17 17.1406 16.0719 17.1406 14.9375V2.5625C17.1406 1.42812 16.2125 0.5 15.0781 0.5ZM15.0781 10.8125L12.5 9.26562L9.92188 10.8125V2.5625H15.0781V10.8125Z"
                                    fill="#585858" />
                            </svg>
                            COLLECTION
                        </button>
                        <button className="flex gap-2 py-2 px-5 rounded-2 my-auto border-10 border-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="#00000">
                                <path d="M9.09434 1.82831L8.64026 2.28239L8.18617 1.82831C7.77062 1.40757 7.27568 1.07352 6.73004 0.845529C6.18441 0.617536 5.59894 0.500137 5.00758 0.500137C4.41623 0.500137 3.83076 0.617536 3.28512 0.845529C2.73949 1.07352 2.24454 1.40757 1.82899 1.82831C1.40801 2.24388 1.07376 2.73893 0.845617 3.28471C0.617478 3.8305 0.5 4.41616 0.5 5.00771C0.5 5.59926 0.617478 6.18492 0.845617 6.7307C1.07376 7.27649 1.40801 7.77153 1.82899 8.18711L8.64026 15L15.4531 8.18711C15.8741 7.77153 16.2084 7.27649 16.4365 6.7307C16.6647 6.18492 16.7821 5.59926 16.7821 5.00771C16.7821 4.41616 16.6647 3.8305 16.4365 3.28471C16.2084 2.73893 15.8741 2.24388 15.4531 1.82831C15.0375 1.40752 14.5424 1.07344 13.9966 0.845425C13.4508 0.617411 12.8652 0.5 12.2737 0.5C11.6823 0.5 11.0967 0.617411 10.5509 0.845425C10.0051 1.07344 9.51003 1.40752 9.09434 1.82831Z"
                                    fill="#585858" />
                            </svg>
                            FAVOURITE
                        </button  >
                        <button className="flex gap-2 py-2 px-5 rounded-2 my-auto border-10 border-base bg-active text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M7.84139 0.626329C9.53734 0.492629 11.2339 0.877024 12.7066 1.72865C14.1793 2.58028 15.3587 3.85899 16.0888 5.39559C16.8188 6.93219 17.0651 8.65424 16.795 10.3339C16.525 12.0135 15.7513 13.5716 14.5763 14.8018C13.4014 16.0321 11.8806 16.8767 10.2151 17.2237C8.54969 17.5707 6.81814 17.4039 5.24959 16.7453C3.68104 16.0867 2.34943 14.9674 1.43097 13.5354C0.512508 12.1034 0.0504883 10.4263 0.106045 8.72603C0.112171 8.51717 0.201015 8.3193 0.353032 8.17595C0.505049 8.0326 0.707786 7.9555 0.916644 7.96163C1.1255 7.96776 1.32337 8.0566 1.46672 8.20862C1.61008 8.36063 1.68717 8.56337 1.68104 8.77223C1.62783 10.3817 2.14546 11.9582 3.1424 13.2229C4.13933 14.4876 5.55135 15.359 7.12878 15.6831C8.70621 16.0072 10.3474 15.7631 11.7622 14.9939C13.177 14.2247 14.2743 12.98 14.86 11.4799C15.4456 9.97979 15.482 8.32091 14.9626 6.79658C14.4432 5.27225 13.4016 3.98067 12.0219 3.15023C10.6421 2.31978 9.01318 2.00396 7.42306 2.25862C5.83294 2.51327 4.38409 3.32199 3.33269 4.54178L3.11849 4.80323H5.08934L5.19644 4.81058C5.38573 4.83566 5.55945 4.92866 5.68528 5.07227C5.81112 5.21588 5.88049 5.40032 5.88049 5.59125C5.88049 5.78219 5.81112 5.96663 5.68528 6.11024C5.55945 6.25385 5.38573 6.34685 5.19644 6.37193L5.08934 6.37823H1.41644L1.30934 6.37193C1.13893 6.3485 0.980878 6.26991 0.859339 6.14818C0.7378 6.02645 0.659461 5.86828 0.636294 5.69783L0.628944 5.59073V1.39073L0.636294 1.28468C0.659461 1.11423 0.7378 0.956055 0.859339 0.834326C0.980878 0.712597 1.13893 0.634012 1.30934 0.610579L1.41644 0.604279L1.52354 0.610579C1.69396 0.634012 1.85201 0.712597 1.97355 0.834326C2.09509 0.956055 2.17343 1.11423 2.19659 1.28468L2.20394 1.39073L2.20289 3.44138C3.64424 1.80476 5.66709 0.794846 7.84139 0.626329ZM8.23829 4.80323L8.34539 4.81058C8.51581 4.83401 8.67386 4.9126 8.7954 5.03433C8.91694 5.15605 8.99528 5.31423 9.01844 5.48468L9.02579 5.59073V9.00008L10.8633 9.00113L10.9704 9.00848C11.1589 9.03441 11.3316 9.12771 11.4566 9.27112C11.5817 9.41454 11.6506 9.59837 11.6506 9.78863C11.6506 9.97889 11.5817 10.1627 11.4566 10.3061C11.3316 10.4495 11.1589 10.5428 10.9704 10.5688L10.8633 10.5761H8.23829L8.13119 10.5688C7.96093 10.5454 7.803 10.467 7.68148 10.3454C7.55996 10.2239 7.48152 10.066 7.45814 9.89573L7.45079 9.78758V5.59073L7.45814 5.48468C7.48131 5.31423 7.55965 5.15605 7.68119 5.03433C7.80273 4.9126 7.96078 4.83401 8.13119 4.81058L8.23829 4.80428V4.80323Z"
                                    fill="white" />
                            </svg>
                            ACTIVITY
                        </button>
                        <button className="flex gap-2 py-2 px-5 rounded-2 my-auto border-10 border-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.9838 8.6325L9.10875 0.7575C8.79375 0.4425 8.35625 0.25 7.875 0.25H1.75C0.7875 0.25 0 1.0375 0 2V8.125C0 8.60625 0.1925 9.04375 0.51625 9.3675L8.39125 17.2425C8.70625 17.5575 9.14375 17.75 9.625 17.75C10.1063 17.75 10.5438 17.5575 10.8588 17.2338L16.9838 11.1088C17.3075 10.7938 17.5 10.3563 17.5 9.875C17.5 9.39375 17.2988 8.9475 16.9838 8.6325ZM3.0625 4.625C2.33625 4.625 1.75 4.03875 1.75 3.3125C1.75 2.58625 2.33625 2 3.0625 2C3.78875 2 4.375 2.58625 4.375 3.3125C4.375 4.03875 3.78875 4.625 3.0625 4.625Z"
                                    fill="#585858" />
                            </svg>
                            OFFERS
                        </button>
                    </div>
                </div>
                {/* Filter Button End */}

                <div className='bg-backg'>
                    {/* Table Data Start*/}
                    <div className="acitvity-table mt-50">
                        <div className="activity">
                            <div class="px-4 sm:px-8">
                                <div class="py-8">
                                    {/* <div>
                                    <h2 class="text-2xl font-semibold leading-tight">Matches Schedule</h2>
                                </div> */}
                                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                        <div class="inline-block min-w-full bg-white overflow-hidden">
                                            <div className="table-h flex gap-10 pt-2 pl-5 ">
                                                <p className='text-base arrow'>  <BsArrowDownLeft /></p>
                                                <p className='text-base'> OFFER RECEIVED</p>
                                            </div>
                                            <table class="min-w-full leading-normal">

                                                <thead>
                                                    <tr className="heading-row-table">
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            <span className="">ITEM</span>
                                                        </th>
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            UNIT PRICE
                                                        </th>
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            FLOOR DIFFERENCE
                                                        </th>
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            FROM
                                                        </th>
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            EXPIRATION
                                                        </th>
                                                        <th
                                                            class="px-5 py-3 text-center text-lg  font-semibold text-gray-600 uppercase tracking-wider table-heading">
                                                            RECEIVED
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="data-row">
                                                    <tr>

                                                        <td class="px-5 py-5 bg-white text-sm ">
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
                                                            <p class="text-gray-600 whitespace-no-wrap text-right flex justify-start ml-20">
                                                                <span>$31.43</span>
                                                            </p>
                                                        </td>
                                                        <td class="px-5 bg-white text-sm w-2/5">

                                                            <p class="text-gray-900  text-center whitespace-no-wrap  nft-name text-lg ">
                                                                <span>65% Below</span>

                                                            </p>

                                                        </td>
                                                        <td class="px-5 bg-white text-sm w-2/5">

                                                            <p class="text-gray-900  text-center whitespace-no-wrap  text-lg nft-user">
                                                                <span>6eAoxc</span>

                                                            </p>

                                                        </td>
                                                        <td class="px-5  bg-white text-sm w-2/5">
                                                            <p class="text-gray-900  text-center whitespace-no-wrap text-lg nft-name">
                                                                about 1 hour
                                                            </p>
                                                        </td>
                                                        <td class="px-5   bg-white text-sm w-2/5">

                                                            <p class="text-gray-900  text-center whitespace-no-wrap text-lg nft-name">
                                                                <span>2 miniutes Ago</span>

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
                    {/* Table Data End*/}


                    {/* Offers Table  */}

                    {/*Offer Table Data Start*/}
                    <div className="acitvity-table mt-50">
                        <div className="activity">
                            <div class="px-4 sm:px-8">
                                <div class="py-8">
                                    {/* <div>
                                    <h2 class="text-2xl font-semibold leading-tight">Matches Schedule</h2>
                                </div> */}
                                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                        <div class="inline-block min-w-full bg-white overflow-hidden">
                                            <div className="table-offer py-3 items-center flex gap-10  pl-5 ">
                                                <p className='text-base arrow'>  <BsArrowDownLeft /></p>
                                                <p className='text-base'> OFFER MADE</p>
                                            </div>

                                        </div>
                                        <div className='text-center py-4 no-offer'>
                                            <h2>NO OFFERS YET</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Offer Table Data End*/}

                </div>

            </div>
        </div>
    );
};

export default Offers;