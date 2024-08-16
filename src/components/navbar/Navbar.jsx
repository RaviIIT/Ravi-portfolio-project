import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                >Ravi Kumar
                </motion.span>
                <motion.div className="social"
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:2}}>
                    <a href="https://github.com/RaviIIT"><img src="/git.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/ravi-kumar-633424206/"><img src="/linkedin.png" alt="" /></a>
                    <a href="https://www.youtube.com/@realitycheck9216"><img src="/youtube.png" alt="" /></a>
                    <a href="https://www.instagram.com/_.ivar.kumar._/"><img src="/instagram.png" alt="" /></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar