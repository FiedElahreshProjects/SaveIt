import { Button } from "@/components/ui/button"


function Navbar() {
    return (
        <div className="w-full text-white p-4 flex items-center justify-between ">

            {/* Left Div - Contains one element */}
            <div className="flex">
                <h1 className="text-orange-500">Save</h1>
                <h1 >It</h1>
            </div>

            {/* Center Div - Contains three elements, arranged in a flex row */}
            <div className="flex space-x-12">

            </div>

            {/* Right Div - Contains one element */}
            <div className="flex-none text-black">
                <Button variant = "destructive">Demo</Button>
            </div>

        </div>
    );
}

export default Navbar;
