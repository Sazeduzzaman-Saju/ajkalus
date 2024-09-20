import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import "./Header.css";

function MenuDropdown({ extraNav }) {
  return (
    <Dropdown className="bg-transparent">
      <Dropdown.Toggle
        className="bg-transparent border-0"
        variant="success"
        id="dropdown-basic"
      >
        অন্যান্য +
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {extraNav.map((link) => (
          <Dropdown.Item key={link.id} className="drop-menus-items">
            <Link href={`/${link.name}/${link.id}`} passHref>
              <div>{link.name_bangla}</div>
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MenuDropdown;
