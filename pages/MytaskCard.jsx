import React from 'react';

const MytaskCard = () => {
    return (
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y ">
                <thead class="">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bids</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">update</th>
                         <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody class=" divide-y ">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">dfds f f f</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium  text-gray-800">{}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1,004,344</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">in 14 days</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"><button className='btn btn-primary'>Update</button></td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"><button className='btn btn-primary'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-4 text-center text-gray-500 text-sm">A list of your posted tasks</div>
        </div>

    );
};

export default MytaskCard;