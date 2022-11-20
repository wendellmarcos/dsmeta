import logo from '../../assets/img/logo.svg';

import './styles.css'

function Header() {
   return(
        <header>
            <div className="dsmeta-logo-container">
                <img src= {logo} alt="DSMeta" />
                <h1>W.M.W</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.instagram.com/wendellmarcosw.ig">@wendellmarcosw</a>
                </p>
            </div>
        </header>
    )

}

export default Header
