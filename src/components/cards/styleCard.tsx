import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
    width: 15em;
    margin-bottom: 0.5em;
    box-shadow: 10px 5px 5px #c3c9c9;
    &:hover {
        box-shadow: none;
    }
    & .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    & .card-img-top {
        height: 10em;
    }
    & .card-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    & .card-text {
        max-height: 3em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & .btn {
        box-shadow: 5px 3px 3px #c3c9c9;
    }
    & .btn:hover{
        box-shadow: none;
        background-color: #c3c9c9;
    }
`