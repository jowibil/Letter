

export function MiddleContainer() {
    return (
        <div className="grid grid-cols-1 mt-40 p-2 lg:grid-cols-2 md:grid-cols-2 sm: gap-4">
            <div className="grid grid-cols-1 gap-4 p-2">
                <h3 className="text-center text-2xl font-medium md:text-right">Add Fun in Learning</h3>
                <p className="p-1 text-justify md:text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur necessitatibus recusandae tenetur minus at, sint eligendi dolor debitis, suscipit laudantium rerum perspiciatis assumenda esse nemo impedit aliquid exercitationem blanditiis eaque!</p>
                <a href="#" className="text-blue-700 hover:text-blue-500 ml-auto p-1">{'Start Exploring \u003E'}</a>
            </div>
            <div className="w-2xs h-64 bg-red-700 m-auto p-2"></div>
        </div>
    )
}