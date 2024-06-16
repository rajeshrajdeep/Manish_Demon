import Link from "next/link";


export default function Footer() {

    return (
        <footer>
            <div className="md:flex text-center bg-neutral-700">
                <div>1</div>
                <div>2</div>
            </div>
            <div className="md:flex md:px-10 md:py-5 py-2 text-center md:justify-between items-center bg-neutral-800">
                <div><p className="text-neutral-950">Website by — <Link className="text-neutral-200" href="/">Vishal Rajdeep</Link></p></div>
                <div><p className="text-neutral-950"><Link className="text-neutral-300" href="/">Manish Demon</Link> — All rights reserved</p></div>
            </div>
        </footer>
    );
}