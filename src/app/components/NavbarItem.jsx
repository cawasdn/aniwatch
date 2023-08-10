import Link from 'next/link'

const NavbarItem = ({ title, param }) => {
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavbarItem
