class Aside extends HTMLElement {arrowle

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
  
        document.addEventListener("showModalDelete", (event => {
            this.openModal()
        }));
  
        this.render()
    }
  
    render() {
  
        this.shadow.innerHTML =
        /*html*/`
        <style>
            aside{
                background-color: hsl(0, 0%, 0%);
                height: 100%;
                max-width: 235px;
                min-width: 235px;
                overflow: hidden;
                transition: 0.2s;
            }

            aside.active{
                max-width: 0px;
                min-width: 0px;

            }

            .hide-button{
                position: fixed;
                bottom: 50%;
                left: 12.5%;
                background-color: transparent;
                border: none;
                width: 3rem;
                height: 3rem;
                fill: white;
                transform: rotate(180deg);
                transition: 0.2s;
            }
            .hide-button.active{
                transform: rotate(0deg);
                left: 0%
            }

        </style>
  
        <aside>
            <slot name="content"></slot>
        </aside>
        <button class="hide-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </button>
        `
        
        let arrowButton = this.shadow.querySelector(".hide-button")
        let aside = this.shadow.querySelector("aside")
        
        
        arrowButton.addEventListener("click", () => {
            arrowButton.classList.toggle("active")
            aside.classList.toggle("active")

        })

        }
  
    }
  
  customElements.define('aside-component', Aside);