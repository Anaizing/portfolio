# Ian's Portfolio

---

![screenshot of projects page of Ian's Portfolio](https://res.cloudinary.com/soggy-ink-games/image/upload/v1675034375/portfolio/MY-PORTFOLIO_ayex92.png)

## PORTFOLIO

[SEE PORTFOLIO](https://ian-araya.netlify.app/)

![image](https://res.cloudinary.com/soggy-ink-games/image/upload/v1709051301/ian_dqgaof.png)

gatsby component architecture in the current version 2.4.2

- graphql passes `data` via a staticquery component

- the staticquery component renders the react component via its render property, where it passes a data and any props required

- the static graphql queries passed to every component via each staticquery are referenced in the gatsby-config.js file (very fucking important), add required references there as you grow the components
