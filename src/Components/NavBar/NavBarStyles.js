import styled from "styled-components";

export const NavBarStyle = styled.div`
    .header {
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        /* background: transparent; */

        background: orange;
        .navbar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: auto;
            height: 100%;
            top: 0;
            padding-right: 7vw;
            /* background: transparent; */
            background: pink;
            a {
                font-size: 1.3vw;
                z-index: 100;
                color: #dfdede;
                text-decoration: none;
                padding-left: 3vw;
                font-family: "Open Sans", sans-serif;
                text-shadow: 0px 0px 7px rgb(0, 0, 0);
                opacity: 0;
                filter: drop-shadow(5px 5px 5px #222);
                animation: fade-in-navBar 0.8s 1.5s forwards;
            }
        }

        @keyframes fade-in-navBar {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    }
`;
