

export function UpperContainer() {
    return (
        <div>
            <div className="grid grid-cols-1 p-2 lg:grid-cols-2 md:grid-cols-2">
                <div className="w-2xs h-64 bg-red-700 p-2 m-auto"></div>
                <div className="grid grid-cols-1 gap-4 text-center p-2">
                    <h3 className="scroll-m-20 text-center text-3xl m-2 font-bold tracking-tight text-balance lg:text-4xl">Learn to Code</h3>
                    <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellendus magnam nesciunt atque, tempora consequuntur quibusdam eaque quam autem accusantium! Corporis perspiciatis molestiae culpa ea et cumque animi? Delectus, natus.</p>
                    <div className="p-2 m-3"><a href="#" className="rounded-2xl gap-1.5 px-3 py-2.5 has-[>svg]:px-2.5 bg-blue-700 text-white hover:bg-blue-500">
                        {'Create Account \u003E'}
                    </a></div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-40 p-2 lg:grid-cols-2 md:grid-cols-2 sm: gap-4">
                <div className="grid grid-cols-1 gap-4 p-2">
                    <h3 className="text-center text-2xl font-medium md:text-right">Add Fun in Learning</h3>
                    <p className="p-1 text-justify md:text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur necessitatibus recusandae tenetur minus at, sint eligendi dolor debitis, suscipit laudantium rerum perspiciatis assumenda esse nemo impedit aliquid exercitationem blanditiis eaque!</p>
                    <a href="#" className="text-blue-700 hover:text-blue-500 ml-auto p-1">{'Start Exploring \u003E'}</a>
                </div>
                <div className="w-2xs h-64 bg-red-700 m-auto p-2"></div>
            </div>
        </div>

    )
}