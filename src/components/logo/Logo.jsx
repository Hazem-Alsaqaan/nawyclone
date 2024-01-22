const { default: Image } = require("next/image")

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <Image src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1705500479/logo_phg6l1.jpg" alt="LOGO" width={28} height={28} />
            </div>
            <h1 className="font-bold text-3xl text-[#1E4164] tracking-tighter">Nawy</h1>
        </div>
    )
}
export default Logo