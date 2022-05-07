const sugestoesDados = [
    {
        user: "bad.vibes.memes",
        image: "mediafiles/instagram/assets/img/bad.vibes.memes.svg"
    },
    {
        user: "chibirdart",
        image: "mediafiles/instagram/assets/img/chibirdart.svg"
    },
    {
        user: "razoesparaacreditar",
        image: "mediafiles/instagram/assets/img/razoesparaacreditar.svg"
    },
    {
        user: "adorable_animals",
        image: "mediafiles/instagram/assets/img/adorable_animals.svg"
    },
    {
        user: "smallcutecats",
        image: "mediafiles/instagram/assets/img/smallcutecats.svg"
    },
]

function Sugetao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function User (props) {
    return (
        <div class="usuario">
            <img src={props.userImage} />
            <div class="texto">
                <strong>{props.userNameCaps}</strong>
                {props.userNameLown}
            </div>
        </div>
    )
}

export default function Sidebar () {
    return (
        <div class="sidebar">
            <User userImage="mediafiles/instagram/assets/img/catanacomics.svg" userNameCaps="catanacomics" userNameLown="Catana" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoesDados.map((newArray) => (
                    <Sugetao image={newArray.image} user={newArray.user} />
                ))}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}