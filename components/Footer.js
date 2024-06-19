import Link from "next/link";
import Logo from "./ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


export default function Footer() {

    return (
        <footer>
            <div className="flex flex-col md:flex-row justify-center py-10 px-5 items-center text-center bg-neutral-700">
                <div className="lg:w-1/5 md:w-1/3 text-white font-extrabold text-4xl md:pb-0 pb-5"><Logo /></div>
                <div className="lg:w-4/5 md:w-2/3 text-neutral-300 grid lg:grid-cols-4 gap-1 md:grid-cols-2">
                    <div className="flex flex-col items-center md:pb-0 pb-5">
                        <div className="text-justify">
                            <h3 className="font-bold text-neutral-100">MENU</h3>
                            <p><a href="/">GET A TATTOO</a></p>
                            <p><a href="/">ARTISTS</a></p>
                            <p><a href="/">PORTFOLIO</a></p>
                            <p><a href="/">ABOUT</a></p>
                            <p><a href="/">NEWS</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:pb-0 pb-5">
                        <div className="text-justify">
                            <h3 className="font-bold text-neutral-100">FOLLOW</h3>
                            <p><a href="/">INSTAGRAM</a></p>
                            <p><a href="/">FACEBOOK</a></p>
                            <p><a href="/">X</a></p>
                            <p><a href="/">YOUTUBE</a></p>
                            {/* <p><a href="/">CREATIVE</a></p> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:pb-0 pb-5">
                        <div className="text-justify">
                            <h3 className="font-bold text-neutral-100">CONTACT</h3>
                            <p><a href="/"><FontAwesomeIcon icon={faWhatsapp} /> 821 879 5956</a></p>
                            <p><a href="/"><FontAwesomeIcon icon={faPhone} /> 821 879 5956</a></p>
                            <p><a href="/"><FontAwesomeIcon icon={faEnvelope} /> example@email.com</a></p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center md:px-5">
                        <div className="text-justify">
                            <h3 className="font-bold text-neutral-100">WELCOME</h3>
                            <p>Thanks for visiting our platform</p>
                            <p className="bg-green-400 inline-block px-1 rounded-lg">Visitor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:px-10 md:py-5 py-2 text-center text-sm md:justify-between items-center bg-neutral-800">
                <div><p className="text-neutral-950">Website by — <Link className="text-neutral-200" href="/">Vishal Rajdeep</Link></p></div>
                <div><p className="text-neutral-950"><Link className="text-neutral-300" href="/">Manish Demon</Link> — All rights reserved</p></div>
            </div>
        </footer>
    );
}