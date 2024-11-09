import Link from "next/link"

const Header = () => {
    return (
        <div className="flex bg-slate-400 justify-between items-center p-6">
            <h1 className="text-2xl font-bold text-white">
                NAVBAR
            </h1>
            <div className="flex justify-center  items-center gap-5 text-white" >
                <Link href={"#"}>
                Home
                </Link>
                <Link href={"#"}>
                About</Link>
                <Link href={"#"}>
                contact us
                </Link>
            </div>
        </div>
    )
}
export default Header