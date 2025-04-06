import Link from "next/link"
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa"

const buttons = [
    {
        icon: <FaGithub />,
        path: '/'
    },
    {
        icon: <FaLinkedin />,
        path: '/'
    },
    {
        icon: <FaInstagram />,
        path: '/'
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {
            buttons.map((item, idx) => {
                return <Link 
                    href={item.path}
                    key={idx}
                    className={iconStyles}
                    >
                        {item.icon}
                    </Link>
            })
        }
    </div>
  )
}

export default Socials