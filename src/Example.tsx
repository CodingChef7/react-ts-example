import React from "react";

interface Props {
    message: string,
    status: boolean,
    buttonStyle?: React.CSSProperties,
    node?: React.ReactNode,
    element?: React.JSX.Element
}

const Example1: React.FunctionComponent<Props> = ({message, status}) => <div>
    {message}
</div>

const Example4  = ({message, status}: Props) => <div>{status}</div>;

const Parent = () => (
    <div>
        <Example5 status={true} message={'adadad'}
            buttonStyle={{
                backgroundColor: 'red',
                fontSize: 12
            }}
                  node={<div>dadadad</div>}
        />
    </div>
)

const Example5 = (props: Props) => (
    <div>
        {props.status}
        <button style={props.buttonStyle? props.buttonStyle : {backgroundColor: 'green'}}>
            Coding Chef
        </button>
    </div>
);
