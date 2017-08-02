import {css} from 'styled-components'

//if screensize is smaller than 800px
export const media = {
    handheld: (...args) => css`
    @media (max-width: 800px){
    ${css(...args)}
    `
}