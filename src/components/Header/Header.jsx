import './Header.css'

export default function Header(){
  return(
    <div className="header_">
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Contacts</a></li>
      </ul>
    </div>
  )
}