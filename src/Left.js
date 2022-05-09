import React from 'react';

const storyDados = [
    {
        image: "mediafiles/instagram/assets/img/9gag.svg",
        user: "9gag",
    },
    {
        image: "mediafiles/instagram/assets/img/meowed.svg",
        user: "meowed",
    },
    {
        image: "mediafiles/instagram/assets/img/barked.svg",
        user: "barked",
    },
    {
        image: "mediafiles/instagram/assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet",
    },
    {
        image: "mediafiles/instagram/assets/img/wawawicomics.svg",
        user: "wawawicomics",
    },
    {
        image: "mediafiles/instagram/assets/img/respondeai.svg",
        user: "respondeai",
    },
    {
        image: "mediafiles/instagram/assets/img/filomoderna.svg",
        user: "filomoderna",
    },
    {
        image: "mediafiles/instagram/assets/img/memeriagourmet.svg",
        user: "memeriagourmet",
    }
]

const postDados = [
    {
        imageUserPost: "mediafiles/instagram/assets/img/meowed.svg",
        nameUserPost: "meowed",
        imagePost: "mediafiles/instagram/assets/img/gato-telefone.svg",
        likeUserImage: "mediafiles/instagram/assets/img/respondeai.svg",
        likeUser: "respondeai",
        totalPeopleLike: "101.523",
    },
    {
        imageUserPost: "mediafiles/instagram/assets/img/barked.svg",
        nameUserPost: "barked",
        imagePost: "mediafiles/instagram/assets/img/dog.svg",
        likeUserImage: "mediafiles/instagram/assets/img/adorable_animals.svg",
        likeUser: "adorable_animals",
        totalPeopleLike: "99.159",
    },
]

function Story (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>

    )
}

function Post (props) {
    
    let contador = 0;
    const ionicon = "";
    const ioniconRed = "red";
    const coracaoVazio = "heart-outline"
    const coracaoCheio = "heart"
    const [curtida, setCurtida] = React.useState(false);
    const [classe, setClasse] = React.useState(ionicon);
    const [coracao, setCoracao] = React.useState(coracaoVazio)

    function curtidaFoto() {
        console.log("curtidaFoto")
        if(curtida == false) {
            contador++;
            if(contador == 2) {
                setCurtida(true);
                setClasse(ioniconRed)
                setCoracao(coracaoCheio)
            }
        }  
    }

    function curtidaIcone() {
        console.log("curtidaIcone")
        if(curtida == true) {
            setCurtida(false)
            setClasse(ionicon)
            setCoracao(coracaoVazio)
        }
        else {
            setCurtida(true)
            setClasse(ioniconRed)
            setCoracao(coracaoCheio)
        }
    }

    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={props.imageUserPost} />
                {props.nameUserPost}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo" onClick={() => curtidaFoto()}>
            <img src={props.imagePost} />
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                <ion-icon class={classe} name={coracao} onClick={() => curtidaIcone()}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likeUserImage} />
                <div class="texto">
                Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.totalPeopleLike} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default function Left () {
    return (
        <div class="esquerda">
            <div class="stories">
                {storyDados.map((url) => (
                    <Story image={url.image} user={url.user} /> 
                ))}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
             </div>

            <div class="posts">
                    {postDados.map((url) => (
                        <Post imageUserPost={url.imageUserPost} nameUserPost={url.nameUserPost} imagePost={url.imagePost} likeUserImage={url.likeUserImage} likeUser={url.likeUser} totalPeopleLike={url.totalPeopleLike} />
                    ))}

            </div>
        </div>
    )
}