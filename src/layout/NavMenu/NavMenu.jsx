import { Link } from "react-router-dom";

export default function NacMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Portfolio</Link></li>
         
      </ul>
    </nav>

  )
}