import { AuthContext } from '../src/Contest/AuthContest';

const AddTask = () => {
    
    

    const handleSUbmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const addData = Object.fromEntries(formData.entries());
        console.log(addData);

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }




    return (
        <div className="max-w-2xl  mt-10 mb-25 mx-auto p-6    shadow-xl border-1 border-gray-400 rounded-lg ">
            <div className='text-center my-2'>
                <h1 className='text-3xl font-semibold'>Post a New Task</h1>
                <p>Describe your task in detail to attract the best freelancers.</p>
            </div>
            <form onSubmit={handleSUbmit} className='space-y-4 '>
                <div>
                    <label className="block font-medium mb-1">Task Title</label>
                    <input name='title' type="text" className="w-full px-4 py-2 border rounded-md " />
                </div>

                <div>
                    <label className="block  font-medium mb-1">Category</label>
                    <select name='options' className="w-full px-4 py-2 border rounded-md ">
                        <option>Select a category</option>
                        <option>Development</option>
                        <option>Marketing</option>
                        <option>Video Editing</option>
                        <option>Programming</option>
                        <option>Business</option>
                        <option>Others</option>

                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea name='description' rows="5" className="w-full px-4 py-2 border rounded-md "></textarea>
                </div>

                <div>
                    <label className="block  font-medium mb-1">Deadline</label>
                    <input name='date' type="date" className="w-full px-4 py-2 border rounded-md " />
                </div>

                <div>
                    <label className="block  font-medium mb-1">Budget ($)</label>
                    <input name='budget' type="number" className="w-full px-4 py-2 border rounded-md " />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block  font-medium mb-1">Your Email</label>
                        <input name="email" defaultValue='example@email' className="w-full px-4 py-2 border rounded-md " />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Your Name</label>
                        <input name='user' type="text" readOnly value="Google User" className="w-full px-4 py-2 border rounded-md " />
                    </div>
                </div>

                <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Post Task</button>
            </form>
        </div>

    );
};

export default AddTask;