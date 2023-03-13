import { css } from '@emotion/css';

export const fullWidth = css`
    width: 100%;
`;

export const flexbox = css`
    display: flex;
    justify-content: center;
`;

export const flexboxRight = css`
    display: flex;
    justify-content: right;
`;

export const flexboxLeft = css`
    display: flex;
    justify-content: left;
    align-items: flex-start;
`;

export const innerFlexbox = css`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
`;

export const innerFlexboxLeft = css`
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    align-items: flex-start;
`;

export const portrait = css`
    border-radius: 50%;
    width: 20%;
`;

export const imageWidth2 = css`
    width: 2rem;
`;

export const imageWidth3 = css`
    width: 2.5rem;
`;

export const mt1 = css`
    margin-top: 1rem;
`;

export const pl1 = css`
    padding-left: 0.5rem;
`;

export const pr1 = css`
    padding-right: 0.5rem;
`;

export const linkCssClass = css`
    color: white;
    text-decoration: none;
    font-size: xx-large;
    font-weight: bold;
    margin: 1rem;
`;

export const contentContainer = css`
    width: 70%;
`;
