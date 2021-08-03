import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryTextColor};
    }

    .front-container #background-overlay{
        background: ${({ theme }) => theme.overlayFaded};
    }

    .example-extra-layer #tag-line h3 {
        color: ${({ theme }) => theme.primaryTextColor};
    }

    .example-extra-layer #tag-line a {
        color: ${({ theme }) => theme.primaryTextColor};
    }

    .about-extra-layer .faq-item svg{
        color: ${({ theme }) => theme.primaryTextColor};
    }

    .apply-extra-layer h4{
        border-bottom: 1px solid ${({ theme }) => theme.primaryTextColor};
    }

    .apply-extra-layer button{
        color: ${({ theme }) => theme.primaryTextColor}
    }

    footer .backdrop-overlay{
        background: ${({ theme }) => theme.overlayFaded};
    }
`;

export const lightTheme = {
    primaryTextColor: '#000',
    primaryBackground: '#f1f3fe',
    secondaryBackground: '#63a4ff',
    tertiaryBackground: '#83eaf1',
    quaternaryBackground: '#09c7fb',
    tertiaryFaded: 'rgba(9, 199, 251, 0.3)',
    quaternaryFaded: 'rgba(131, 234, 241, 0.5)',
    overlayFaded: 'rgba(0,0,0,0.5)',
}

export const darkTheme = {
    primaryTextColor: '#fff',
    primaryBackground: '#181818',
    secondaryBackground: '#37d5d6',
    tertiaryBackground: '#009ffd',
    quaternaryBackground: '#2a2a72',
    tertiaryFaded: 'rgba(4, 97, 159, 0.3)',
    quaternaryFaded: 'rgba(42, 42, 114, 0.5)',
    overlayFaded: 'rgba(0,0,0,0.7)',
}

// export const darkTheme = {
//     primaryTextColor: '#fff',
//     primaryBackground: '#181818',
//     secondaryBackground: '#63a4ff',
//     tertiaryBackground: '#83eaf1',
//     quaternaryBackground: '#09c7fb',
//     tertiaryFaded: 'rgba(9, 199, 251, 0.3)',
//     quaternaryFaded: 'rgba(131, 234, 241, 0.5)',
//     overlayFaded: 'rgba(0,0,0,0.7)',
//     teamBackground: '#414a4c'
// }


    // .nav - extra - layer.nav - links button{
    //     background: linear-gradient(
    //         to left,
    //         ${({ theme }) => theme.tertiaryBackground},
    //         ${({ theme }) => theme.quaternaryBackground}
    //     );
    // }
    // .header{
    //     color: ${({ theme }) => theme.secondaryBackground};
    // }
    // #underline{
    //     background: linear - gradient(
    //         to right,
    //         ${({ theme }) => theme.secondaryBackground},
    //         ${ ({ theme }) => theme.tertiaryBackground }
    //     );
    // }
    // .front - container - extra - layer.primary - text #get-started{
    //     border - image - source: linear - gradient(
    //         to left,
    //         ${({ theme }) => theme.tertiaryBackground},
    //         ${ ({ theme }) => theme.quaternaryBackground }
    //     );
    // }
    // .features - extra - layer svg{
    //     background: linear-gradient(
    //         to right,
    //         ${({ theme }) => theme.tertiaryBackground},
    //         ${({ theme }) => theme.secondaryBackground}
    //     );
    // }
    // .member #info{
    //     background: linear-gradient(
    //         to right,
    //         ${({ theme }) => theme.tertiaryFaded},
    //         ${({ theme }) => theme.quaternaryFaded}
    //     );
    // }
    // .start - now.backdrop - overlay{
    //     background: linear-gradient(
    //         to right,
    //         ${({ theme }) => theme.secondaryBackground},
    //         ${({ theme }) => theme.tertiaryFaded},
    //         ${({ theme }) => theme.secondaryBackground}
    //     );
    // }
    // .start - now - extra - layer button: hover{
    //     background: ${({ theme }) => theme.tertiaryFaded};
    // }
    // .apply - extra - layer.apply - container{
    //     background: linear-gradient(
    //         to right bottom,
    //         ${({ theme }) => theme.secondaryBackground},
    //         ${({ theme }) => theme.tertiaryBackground}
    //     );
    //     box - shadow: 0 0 5px ${ ({ theme }) => theme.secondaryBackground };
    //     color: ${ ({ theme }) => theme.primaryTextColor }
    // }
    // .apply - extra - layer button{
    //     background: ${({ theme }) => theme.secondaryBackground};
    //     box - shadow: 0 0 10px ${ ({ theme }) => theme.tertiaryBackground };
    // }
    // @media(max - width: 700px) {
    //     #nav - btn{
    //         background: ${ ({ theme }) => theme.tertiaryFaded };
    //     }

    //     nav{
    //         background: linear - gradient(
    //             ${({ theme }) => theme.tertiaryBackground},
    //             ${ ({ theme }) => theme.secondaryBackground },
    //             ${ ({ theme }) => theme.tertiaryBackground }
    //         );
    //     }
    // }
    // @media(max - width: 450px) {


    //         .features - extra - layer button svg{
    //         color: ${ ({ theme }) => theme.secondaryBackground };
    //     }
    // }

    // .team{
    //     background: ${({ theme }) => theme.teamBackground};
    // }


    // .example{
    //     background: linear-gradient(
    //         to right,
    //         ${({ theme }) => theme.tertiaryBackground},
    //         ${({ theme }) => theme.quaternaryBackground}
    //     );
    // }
    // .example-extra-layer #peek{
    //     color: ${({ theme }) => theme.secondaryBackground};
    // }