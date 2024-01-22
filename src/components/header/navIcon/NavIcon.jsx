const { default: Image } = require("next/image")

const NavIcon = () => {
    const logedin = false
    return (
        <div className="flex items-center justify-center">
            {
                logedin ?
                    <div className="relative">
                        <Image src="/user_747376.png" alt="User Logo" width={20} height={20} />
                    </div>
                    :
                    <button className="px-4 py-1 rounded bg-orange-500 text-white text-base max-lg:py-0.5 max-lg:px-1.5 max-lg:text-xs">Login</button>
            }
        </div>
    )
}
export default NavIcon
