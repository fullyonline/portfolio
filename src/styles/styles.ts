import { css } from '@emotion/css';

export const flexbox = css`
    display: flex;
    justify-content: center;
`;
export const flexboxRight = css`
    display: flex;
    justify-content: right;
`;

export const innerFlexbox = css`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
`;

export const portrait = css`
    border-radius: 50%;
    width: 20%;
`;

export const linkCssClass = css`
    color: white;
    text-decoration: none;
    font-size: xx-large;
    font-weight: bold;
    margin: 1rem;
`;

export const contentContainer = css`
    width: 55%;
`;
