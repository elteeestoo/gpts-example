class User extends HTMLElement {arrowle

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
        
        .user{
        bottom: 0;
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        position: absolute;
        }

        .user-logo{
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 2rem;
        justify-content: center;
        overflow: hidden;
        width: 2rem;
        }

        .user-logo img{
        width: 100%;
        }

        .user-name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        }

        .user-name h3{
        color: hsl(0, 0%, 100%);
        font-family: 'SoehneBuch', sans-serif;
        font-size: 0.9rem;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        }
        .hide-aside{
            background-color: white;
            width: 2rem
        }
      </style>
    <section class="user">
        <div class="user-logo">
            <img src="images/user-avatar.png" alt="avatar de usuario">
        </div>
        <div class="user-name">
            <h3>Carlos Seda</h3>
        </div>
    </section>
        <div class="hide-aside">
            <div class="left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>
            </div>
            <div class="right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </div>
        </div>
       

        `
  
          let input = this.shadow.querySelector(".input-text");
          
          input.addEventListener("input" , () => {
              
              const sendButton = this.shadow.querySelector(".send-button")
              const disabledButton = this.shadow.querySelector(".send-button button")
              if (input.value.length > 0) {
                  sendButton.classList.add("active");
                  disabledButton.disabled = false;
              }
  
              if (input.value.length <= 0) {
                  sendButton.classList.remove("active");
                  disabledButton.disabled = true;
              }
              
          })
      }
  
      
  
  }
  
  customElements.define('history-component', History);