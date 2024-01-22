import Link from "next/link"

const NavLinks = () => {
    const pagesName = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Search",
            path: "/search"
        },
        {
            id: 3,
            title: "Show Your Apartment",
            path: "/show-your-apartment"
        },
        {
            id: 4,
            title: "My Booking",
            path: "/my-booking"
        },
        {
            id: 5,
            title: "My Favourites",
            path: "/my-favourites"
        },
        {
            id: 6,
            title: "My Unites",
            path: "/my-unites"
        }
    ]
    return (
        <nav className="flex-1">
            <ul className="flex items-center justify-center">
                {
                    pagesName.map((item) => (
                        <Link href={item.path} className="text-sm font-medium px-3 cursor-pointer whitespace-nowrap hover:text-cyan-400 duration-200 max-lg:px-2" key={item.id}>{item.title}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks