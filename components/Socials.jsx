import Link from "next/link"
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa"

const buttons = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/04ac'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://linkedin.com/in/areen-chakraborty-a62927263'
  },
  // {
  //     icon: <FaInstagram />,
  //     path: '/'
  // },
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        })
      }
    </div>
  )
}

export default Socials